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
import BootstrapSwitchButton from 'bootstrap-switch-button-react/lib/bootstrap-switch-button-react';
import ServerErrorPage from '../ServerErrorPage';

const DashboardPage = () => {
  // Data and Fetching State
  const [fetchStatus, setFetchStatus] = useState({
    status: 'pending',
  });
  const [feedbackData, setFeedbackData] = useState([]);
  const [systemData, setSystemData] = useState([]);

  const [dynamic, setDynamic] = useState(true);

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
    return <ServerErrorPage errMessage={fetchStatus.message} />;
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

  let a = 0;
  for (let x = 0; x < feedbackData.length; x++) {
    if (feedbackData[x].unread) a++;
  }

  let unreadColour;
  if (feedbackData.length < 1000) {
    unreadColour = 'MediumSeaGreen';
  } else {
    unreadColour = 'Tomato';
  }

  return (
    <React.Fragment>
      <PageHeader
        header="Feedback Dashboard"
        fontAwesomeIcon="chart-line"
        rightElement={
          <div style={{ display: 'flex' }}>
            <h3>
              Unread: <span style={{ color: unreadColour }}>{a}</span>
            </h3>
            <h3 style={{ marginLeft: '30px' }}>
              Dynamic:{' '}
              <BootstrapSwitchButton
                checked={true}
                height={15}
                onlabel="On"
                offlabel="Off"
                onChange={() => {
                  setDynamic(!dynamic);
                  // ResponsiveLocalStorageLayout(resetLayout())
                }}
              />
            </h3>
          </div>
        }
      />

      <Accordion
        defaultActiveKey="0"
        style={{
          border: '1px solid #ddd',
        }}
      >
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <h3 style={{ margin: '0px', fontSize: '20px' }}>Filters</h3>
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
