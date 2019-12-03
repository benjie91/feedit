import React, { useState, useEffect } from 'react';

import { Col, Row, Button, ButtonGroup } from 'react-bootstrap';

import PageHeader from '../../components/PageHeader';
import Bar from '../../components/BarChart';
import Line from '../../components/LineChart';
import Pie from '../../components/PieChart';
import FeedbackDataGrid from '../../components/FeedbackDataGrid';

import { feeditConfig } from '../../config/FeeditConfiguration';
import { useJSONFetch } from '../../utils/ReactHooks';
import LoadingPage from '../LoadingPage';
import { feedbackData } from '../../data/MockFeedbackData';
// Todo: To remove all hardcoded information and refactor code
const DashboardPage = () => {
  // const { response: feedbackData, error, isLoading } = useJSONFetch(
  //   //   '/api/feedback/retrieve/all',
  //   // );
  //   //
  //   // if (isLoading) {
  //   //   return <LoadingPage />;
  //   // } else if (error !== null) {
  //   //   return <div>Fetch failed...</div>;
  //   // }

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
  //
  // const lineBtn = a => {
  //   if (a === 'Week') {
  //     let sysID = this.state.data.filter(
  //       feedbackData => feedbackData.ts.slice(0, 10) === '02/06/2019',
  //     );
  //     let sysID2 = this.state.data.filter(
  //       feedbackData => feedbackData.ts.slice(0, 10) === '03/06/2019',
  //     );
  //     let sysID3 = this.state.data.filter(
  //       feedbackData => feedbackData.ts.slice(0, 10) === '04/06/2019',
  //     );
  //     let sysID4 = this.state.data.filter(
  //       feedbackData => feedbackData.ts.slice(0, 10) === '05/06/2019',
  //     );
  //     let sysID5 = this.state.data.filter(
  //       feedbackData => feedbackData.ts.slice(0, 10) === '06/06/2019',
  //     );
  //     let sysID6 = this.state.data.filter(
  //       feedbackData => feedbackData.ts.slice(0, 10) === '07/06/2019',
  //     );
  //     let sysID7 = this.state.data.filter(
  //       feedbackData => feedbackData.ts.slice(0, 10) === '08/06/2019',
  //     );
  //
  //     sysID.push(...sysID2);
  //     sysID.push(...sysID3);
  //     sysID.push(...sysID4);
  //     sysID.push(...sysID5);
  //     sysID.push(...sysID6);
  //     sysID.push(...sysID7);
  //
  //     lineData = sysID;
  //     lineTitle = 'Past Week';
  //   } else {
  //     lineData = feedbackData;
  //     lineTitle = 'Past Month';
  //   }
  // };

  return (
    <React.Fragment>
      <Row>
        <Col md={4}>
          <PageHeader
            header="Feedback Dashboard"
            fontAwesomeIcon="chart-line"
          />
        </Col>
        {/*<Col md={4}>*/}
        {/*  <ButtonGroup aria-label="Basic example">*/}
        {/*    <Button onClick={() => sysBtn('App01')}>App01</Button>*/}
        {/*    <Button onClick={() => sysBtn('App02')}>App02</Button>*/}
        {/*    <Button onClick={() => sysBtn('App03')}>App03</Button>*/}
        {/*    <Button onClick={() => sysBtn('All')}>All</Button>*/}
        {/*  </ButtonGroup>*/}
        {/*</Col>*/}
        {/*<Col md={4}>*/}
        {/*  <ButtonGroup aria-label="Basic example">*/}
        {/*    <Button onClick={() => lineBtn('Week')}>Week</Button>*/}
        {/*    <Button onClick={() => lineBtn('Month')}>Month</Button>*/}
        {/*  </ButtonGroup>*/}
        {/*</Col>*/}
      </Row>
      <Row style={{ marginBottom: '20px' }}>
        <Col md={4} style={{ padding: '20px' }}>
          <Pie feedbackData={feedbackData} />
        </Col>
        {/*<Col md={4} style={{ padding: '20px' }}>*/}
        {/*  <Line feedbackData={feedbackData} lineTitle={'test'} />*/}
        {/*</Col>*/}
        <Col md={4} style={{ padding: '20px' }}>
          <Bar feedbackData={feedbackData} />
        </Col>
      </Row>
      <FeedbackDataGrid feedbackData={feedbackData} />
    </React.Fragment>
  );
};

export default DashboardPage;
