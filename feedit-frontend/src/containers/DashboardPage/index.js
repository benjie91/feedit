import React, { useState, useEffect } from 'react';

import { Col, Row, Button, ButtonGroup } from 'react-bootstrap';

import PageHeader from '../../components/PageHeader';
import Bar from '../../components/BarChart';
import Line from '../../components/LineChart';
import Pie from '../../components/PieChart';
import FeedbackDataGrid from '../../components/FeedbackDataGrid';

import { feedbackData } from '../../data/MockFeedbackData';
import { feeditConfig } from '../../config/FeeditConfiguration';
import { useJSONFetch } from '../../utils/ReactHooks';
import LoadingPage from '../LoadingPage';

// Todo: To remove all hardcoded information and refactor code
const DashboardPage = () => {
  // const { response: feedbackData, error, isLoading } = useJSONFetch(
  //   '/api/feedback/retrieve/all',
  // );
  //
  // const {
  //   response: systemData,
  //   error: sysError,
  //   isLoading: isLoadingSystems,
  // } = useJSONFetch('/api/system/retrieve/all');
  //
  // if (isLoading || isLoadingSystems) {
  //   return <LoadingPage />;
  // } else if (error !== null) {
  //   return <div>Fetch failed...</div>;
  // }
  //
  // const systemName = systemData.map(data => data.systemName);

  // let originalData = feedbackData;
  // let lineData = feedbackData;
  // let lineTitle = 'Past Month';
  //
  // const sysBtn = a => {
  //   if (a === 'App01') {
  //     feedbackData = feedbackData.filter(
  //       feedbackData => feedbackData.sid === 'App01',
  //     );
  //     lineData = feedbackData.filter(
  //       feedbackData => feedbackData.sid === 'App01',
  //     );
  //   } else if (a === 'App02') {
  //     feedbackData = feedbackData.filter(
  //       feedbackData => feedbackData.sid === 'App02',
  //     );
  //     lineData = feedbackData.filter(
  //       feedbackData => feedbackData.sid === 'App02',
  //     );
  //   } else if (a === 'App03') {
  //     feedbackData = feedbackData.filter(
  //       feedbackData => feedbackData.sid === 'App03',
  //     );
  //     lineData = feedbackData.filter(
  //       feedbackData => feedbackData.sid === 'App03',
  //     );
  //   } else {
  //     feedbackData = originalData;
  //     lineData = feedbackData;
  //   }
  // };

  const [type, setType] = useState('Week');
  const [sid, setSid] = useState('All');

  let lineChartTitle = `Past ${type} - ${sid} `;
  useEffect(() => {
    lineChartTitle = `Past ${type} - ${sid} `;
  });

  return (
    <React.Fragment>
      <PageHeader header="Feedback Dashboard" fontAwesomeIcon="chart-line" />
      <Row>
        {/*<Col md={12}>*/}
        {/*  <ButtonGroup aria-label="Basic example">*/}
        {/*    {systemName.map(name => (*/}
        {/*      <Button onClick={() => {}}>{name}</Button>*/}
        {/*    ))}*/}
        {/*    <Button onClick={() => {}}>All</Button>*/}
        {/*  </ButtonGroup>*/}
        {/*</Col>*/}
        <Col md={4}>
          <ButtonGroup aria-label="Basic example">
            <Button onClick={() => setType('Week')}>Week</Button>
            <Button onClick={() => setType('Year')}>Year</Button>
          </ButtonGroup>
        </Col>
        <Col md={4}>
          <ButtonGroup aria-label="Basic example">
            <Button onClick={() => setSid('All')}>All</Button>
            <Button onClick={() => setSid('1')}>1</Button>
            <Button onClick={() => setSid('2')}>2</Button>
            <Button onClick={() => setSid('3')}>3</Button>
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
            // lineTitle={'Past Feedback'}
            lineTitle={lineChartTitle}
            weekOrYearState={type}
            systemIdState={sid}
          />
        </Col>
        <Col md={4} style={{ padding: '20px' }}>
          <Bar feedbackData={feedbackData} />
        </Col>
      </Row>
      <FeedbackDataGrid feedbackData={feedbackData} />
    </React.Fragment>
  );
};

export default DashboardPage;
