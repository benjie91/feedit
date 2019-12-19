import React, { useState, useEffect } from 'react';

import { Col, Row, Button, ButtonGroup } from 'react-bootstrap';

import PageHeader from '../../components/PageHeader';
import Bar from '../../components/BarChart';
import Line from '../../components/LineChart';
import Pie from '../../components/PieChart';
import FeedbackDataGrid from '../../components/FeedbackDataGrid';
import Dropdown from 'react-bootstrap/Dropdown';
import { feedbackData } from '../../data/MockFeedbackData';
import { feeditConfig } from '../../config/FeeditConfiguration';
import { useJSONFetch } from '../../utils/ReactHooks';
import LoadingPage from '../LoadingPage';
import DropdownButton from 'react-bootstrap/DropdownButton';

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
        <Col md={2}>
          <DropdownButton id="week/year" title="Week / Year">
            <Dropdown.Item onClick={() => setType('Week')}>Week</Dropdown.Item>
            <Dropdown.Item onClick={() => setType('Year')}>Year</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col md={2}>
          <DropdownButton id="sid" title="System ID">
            <Dropdown.Item onClick={() => setSid('All')}>All</Dropdown.Item>
            <Dropdown.Item onClick={() => setSid('1')}>1</Dropdown.Item>
            <Dropdown.Item onClick={() => setSid('2')}>2</Dropdown.Item>
            <Dropdown.Item onClick={() => setSid('3')}>3</Dropdown.Item>
          </DropdownButton>
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
