import React, { useState } from 'react';

import { Col, Row, Button, ButtonGroup, Card, Form } from 'react-bootstrap';
import Select from 'react-select';

import LoadingPage from '../LoadingPage';

import PageHeader from '../../components/PageHeader';
import Bar from '../../components/BarChart';
import Line from '../../components/LineChart';
import Pie from '../../components/PieChart';
import FeedbackDataGrid from '../../components/FeedbackDataGrid';

import { feeditConfig } from '../../config/FeeditConfiguration';
import {
  generateFakeSystemData,
  generateFakeSystemIds,
  generateMockFeedbacks,
} from '../../utils/MockDataGenerator';

const DashboardPage = () => {
  // Data and Fetching State
  const [fetchStatus, setFetchStatus] = useState({
    status: 'pending',
  });
  const [feedbackData, setFeedbackData] = useState([]);
  const [systemData, setSystemData] = useState([]);

  // Filter Conditions State
  const [type, setType] = useState('Week');
  const [systemId, setSystemId] = useState('All');

  // Fetching Data
  if (feeditConfig.useDataFromServer && fetchStatus.status === 'pending') {
    setFetchStatus({
      status: 'fetching',
    });
    const fetchFeedbackData = fetch('/api/feedback/retrieve/all').then(res =>
      res.json(),
    );

    const fetchSystemData = fetch('/api/system/retrieve/all').then(res =>
      res.json(),
    );

    Promise.all([fetchFeedbackData, fetchSystemData])
      .then(([feedbackData, systemData]) => {
        feedbackData.sort((feedbackA, feedbackB) => {
          return feedbackA.timestamp - feedbackB.timestamp;
        });

        setFeedbackData(feedbackData);
        setSystemData(systemData);
        setFetchStatus({
          status: 'completed',
        });
      })
      .catch(error => {
        setFetchStatus({
          status: 'error',
          message: error.message,
        });
      });
  } else if (
    feeditConfig.useDataFromServer === false &&
    fetchStatus.status === 'pending'
  ) {
    const systemIds = generateFakeSystemIds(3);
    setSystemData(generateFakeSystemData(systemIds));
    const feedbackData = generateMockFeedbacks(systemIds).sort(
      (feedbackA, feedbackB) => {
        return feedbackA.timestamp - feedbackB.timestamp;
      },
    );
    setFeedbackData(feedbackData);
    setFetchStatus({
      status: 'completed',
    });
  }

  if (fetchStatus.status === 'fetching') {
    return <LoadingPage />;
  } else if (fetchStatus.status === 'error') {
    return (
      <div>
        <p>Fetch failed...</p>
        <p>{fetchStatus.message}</p>
      </div>
    );
  }

  // Fetch Complete
  let systemOptions = [
    {
      label: 'All Systems',
      value: 'All',
    },
  ];

  systemOptions = systemOptions.concat(
    systemData.map(data => ({
      label: data.systemName,
      value: data.systemId,
    })),
  );

  return (
    <React.Fragment>
      <PageHeader header="Feedback Dashboard" fontAwesomeIcon="chart-line" />
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <h3>Filters</h3>
              <Form>
                <Form.Row>
                  <Form.Group as={Col} md="4">
                    <Form.Label>System</Form.Label>
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      defaultValue={systemOptions[0]}
                      isLoading={fetchStatus.status === 'fetching'}
                      name="color"
                      options={systemOptions}
                      onChange={selectedOption => {
                        setSystemId(selectedOption.value);
                      }}
                    />
                  </Form.Group>
                </Form.Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        {/*<Col md={12}>*/}
        {/*  <ButtonGroup aria-label="Basic example">*/}
        {/*    {systemData*/}
        {/*      .map(data => data.systemName)*/}
        {/*      .map(name => (*/}
        {/*        <Button onClick={() => {}}>{name}</Button>*/}
        {/*      ))}*/}
        {/*    <Button onClick={() => {}}>All</Button>*/}
        {/*  </ButtonGroup>*/}
        {/*</Col>*/}
        <Col md={4}>
          <ButtonGroup aria-label="Basic example">
            <Button onClick={() => setType('Week')}>Week</Button>
            <Button onClick={() => setType('Year')}>Year</Button>
          </ButtonGroup>
        </Col>
      </Row>

      <Row style={{ marginBottom: '20px' }}>
        <Col md={4} style={{ padding: '20px' }}>
          <Pie feedbackData={feedbackData} />
        </Col>
        <Col md={4} style={{ padding: '20px' }}>
          <Line
            feedbackData={feedbackData}
            lineTitle={`Past ${type} - ${systemId} `}
            weekOrYearState={type}
            systemIdState={systemId}
          />
        </Col>
        <Col md={4} style={{ padding: '20px' }}>
          <Bar feedbackData={feedbackData} />
        </Col>
      </Row>
      <FeedbackDataGrid feedbackData={feedbackData} systemId={systemId} />
    </React.Fragment>
  );
};

export default DashboardPage;
