import React, { useState } from 'react';

import {
  Col,
  Row,
  Button,
  ButtonGroup,
  Card,
  Form,
  Accordion,
} from 'react-bootstrap';
import Select from 'react-select';

import LoadingPage from '../LoadingPage';

import PageHeader from '../../components/PageHeader';

import { feeditConfig } from '../../config/FeeditConfiguration';
import {
  generateFakeSystemData,
  generateFakeSystemIds,
  generateMockFeedbacks,
} from '../../utils/MockDataGenerator';
import Spacer from 'react-spacer';
import ResponsiveLocalStorageLayout from '../ResponsiveLocalStorageLayout';

const DashboardPage = () => {
  // Data and Fetching State
  const [fetchStatus, setFetchStatus] = useState({
    status: 'pending',
  });
  const [feedbackData, setFeedbackData] = useState([]);
  const [systemData, setSystemData] = useState([]);

  const [dynamic, setDynamic] = useState(1);

  // Filter Conditions State
  const [pastDateRange, setPastDateRange] = useState('');
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
    const systemIds = generateFakeSystemIds(feeditConfig.numberOfMockSystem);
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

  let unreadColour;
  if (feedbackData.length < 1000) {
    unreadColour = 'MediumSeaGreen';
  } else {
    unreadColour = 'Tomato';
  }

  return (
    <React.Fragment>
      <div style={{ display: 'flex' }}>
        <PageHeader header="Feedback Dashboard" fontAwesomeIcon="chart-line" />
        <Spacer grow="11" />
        <Button onClick={() => setDynamic(dynamic + 1)}>Dynamic</Button>
        <Spacer grow="1" />
        <h3>Unread:</h3>
        <Spacer width="12px" />
        <h3 style={{ color: unreadColour }}> {feedbackData.length} </h3>
      </div>
      <Accordion
        defaultActiveKey="0"
        style={{
          border: '1px solid #ddd',
        }}
      >
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <h3 style={{ margin: '0px' }}>Filters</h3>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col} md="4">
                  <Form.Label>System</Form.Label>
                  <Form.Text>
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
                  </Form.Text>
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>Past Date Range</Form.Label>
                  <Form.Text>
                    <ButtonGroup>
                      <Button
                        onClick={() => {
                          setPastDateRange('');
                        }}
                      >
                        Show All
                      </Button>
                      <Button
                        onClick={() => {
                          setPastDateRange('Week');
                        }}
                      >
                        Week
                      </Button>
                      <Button
                        onClick={() => {
                          setPastDateRange('Year');
                        }}
                      >
                        Year
                      </Button>
                    </ButtonGroup>
                  </Form.Text>
                </Form.Group>
              </Form.Row>
            </Form>
          </Card.Body>
        </Accordion.Collapse>
      </Accordion>
      <ResponsiveLocalStorageLayout
        systemData={systemData}
        feedbackData={feedbackData}
        systemId={systemId}
        pastDateRange={pastDateRange}
        dynamic={dynamic}
      />
    </React.Fragment>
  );
};

export default DashboardPage;
