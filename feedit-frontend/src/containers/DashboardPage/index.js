import React, { Component } from 'react';

import { Col, Row } from 'react-bootstrap';

import PageHeader from '../../components/PageHeader';
import Bar from '../../components/BarChart';
import Line from '../../components/LineChart';
import Pie from '../../components/PieChart';
import FeedbackDataGrid from '../../components/FeedbackDataGrid';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { feedbackData } from '../../data/MockFeedbackData';

let data = feedbackData;
let lineData = feedbackData;
let lineTitle = 'Past Month';

class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
    };
  }

  sysBtn = a => {
    if (a === 'App01') {
      data = feedbackData.filter(feedbackData => feedbackData.sid === 'App01');
      lineData = feedbackData.filter(
        feedbackData => feedbackData.sid === 'App01',
      );
    } else if (a === 'App02') {
      data = feedbackData.filter(feedbackData => feedbackData.sid === 'App02');
      lineData = feedbackData.filter(
        feedbackData => feedbackData.sid === 'App02',
      );
    } else if (a === 'App03') {
      data = feedbackData.filter(feedbackData => feedbackData.sid === 'App03');
      lineData = feedbackData.filter(
        feedbackData => feedbackData.sid === 'App03',
      );
    } else {
      data = feedbackData;
      lineData = feedbackData;
    }
    this.forceUpdate();
  };

  lineBtn = a => {
    if (a === 'Week') {
      let sysID = this.state.data.filter(
        feedbackData => feedbackData.ts.slice(0, 10) === '02/06/2019',
      );
      let sysID2 = this.state.data.filter(
        feedbackData => feedbackData.ts.slice(0, 10) === '03/06/2019',
      );
      let sysID3 = this.state.data.filter(
        feedbackData => feedbackData.ts.slice(0, 10) === '04/06/2019',
      );
      let sysID4 = this.state.data.filter(
        feedbackData => feedbackData.ts.slice(0, 10) === '05/06/2019',
      );
      let sysID5 = this.state.data.filter(
        feedbackData => feedbackData.ts.slice(0, 10) === '06/06/2019',
      );
      let sysID6 = this.state.data.filter(
        feedbackData => feedbackData.ts.slice(0, 10) === '07/06/2019',
      );
      let sysID7 = this.state.data.filter(
        feedbackData => feedbackData.ts.slice(0, 10) === '08/06/2019',
      );

      sysID.push(...sysID2);
      sysID.push(...sysID3);
      sysID.push(...sysID4);
      sysID.push(...sysID5);
      sysID.push(...sysID6);
      sysID.push(...sysID7);

      lineData = sysID;
      lineTitle = 'Past Week';
    } else {
      lineData = feedbackData;
      lineTitle = 'Past Month';
    }
    this.forceUpdate();
  };
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col md={4}>
            <PageHeader
              header="Feedback Dashboard"
              fontAwesomeIcon="chart-line"
            />
          </Col>
          <Col md={4}>
            <ButtonGroup aria-label="Basic example">
              <Button onClick={() => this.sysBtn('App01')}>App01</Button>
              <Button onClick={() => this.sysBtn('App02')}>App02</Button>
              <Button onClick={() => this.sysBtn('App03')}>App03</Button>
              <Button onClick={() => this.sysBtn('All')}>All</Button>
            </ButtonGroup>
          </Col>
          <Col md={4}>
            <ButtonGroup aria-label="Basic example">
              <Button onClick={() => this.lineBtn('Week')}>Week</Button>
              <Button onClick={() => this.lineBtn('Month')}>Month</Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row style={{ marginBottom: '20px' }}>
          <Col md={4} style={{ padding: '20px' }}>
            <Pie feedbackData={data} />
          </Col>
          <Col md={4} style={{ padding: '20px' }}>
            <Line feedbackData={lineData} lineTitle={lineTitle} />
          </Col>
          <Col md={4} style={{ padding: '20px' }}>
            <Bar feedbackData={data} />
          </Col>
        </Row>
        <FeedbackDataGrid feedbackData={data} />
      </React.Fragment>
    );
  }
}

export default DashboardPage;
