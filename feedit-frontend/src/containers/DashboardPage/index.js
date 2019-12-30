import React, { useState } from 'react';
// import GridLayout, { WidthProvider } from 'react-grid-layout';
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
import { Responsive, WidthProvider } from 'react-grid-layout';

import './react-grid-layout/css/styles.css';
import './react-resizable/css/styles.css';

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

  const layoutlg = [
    { i: 'a', x: 0, y: 0, w: 5, h: 2.5 },
    { i: 'b', x: 5, y: 0, w: 5, h: 2.5 },
    { i: 'c', x: 10, y: 0, w: 2, h: 2.5 },
  ];

  const layoutmd = [
    { i: 'a', x: 0, y: 0, w: 6, h: 2.5 },
    { i: 'c', x: 7, y: 0, w: 2, h: 2.5 },
    { i: 'b', x: 0, y: 0, w: 6, h: 2.5 },
  ];

  const layoutsm = [
    { i: 'a', x: 0, y: 0, w: 5, h: 3 },
    { i: 'b', x: 0, y: 0, w: 5, h: 3 },
    { i: 'c', x: 0, y: 0, w: 5, h: 1 },
  ];

  const layouts = { lg: layoutlg, md: layoutmd, sm: layoutsm };

  const ResponsiveGridLayout = WidthProvider(Responsive);

  let unreadColour;
  if (feedbackData.length < 1000) {
    unreadColour = 'MediumSeaGreen';
  } else {
    unreadColour = 'Tomato';
  }

  return (
    <React.Fragment>
      <PageHeader header="Feedback Dashboard" fontAwesomeIcon="chart-line" />
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

      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        // cols={12}
        breakpoints={{ lg: 1200, md: 996, sm: 768 }}
        cols={{ lg: 12, md: 10, sm: 6 }}
        // style={{ marginBottom: '20px' }}
        isResizable={false}
      >
        <div key="a">
          <Bar feedbackData={feedbackData} />
        </div>
        <div key="b">
          <Line
            systemData={systemData}
            feedbackData={feedbackData}
            systemId={systemId}
            pastDateRange={pastDateRange}
          />
        </div>
        <div key="c">
          <h3>Unread</h3>
          {/*<h1 style="color:Tomato"> {feedbackData.length} </h1>*/}
          {/*(feedbackData.length>1000)*/}
          <h1 style={{ color: unreadColour }}> {feedbackData.length} </h1>
          {/*<h1 style={{ color: 'Tomato' }}> {feedbackData.length} </h1>*/}
        </div>
      </ResponsiveGridLayout>

      <FeedbackDataGrid
        systemData={systemData}
        feedbackData={feedbackData}
        systemId={systemId}
        pastDateRange={pastDateRange}
      />
    </React.Fragment>
  );
};

export default DashboardPage;
