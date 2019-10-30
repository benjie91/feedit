import React, { Component } from 'react';

import { Col, Row } from 'react-bootstrap';

import PageHeader from '../../components/PageHeader';
import Bar from '../../components/BarChart';
import Line from '../../components/LineChart';
import Pie from '../../components/PieChart';
import FeedbackDataGrid from '../../components/FeedbackDataGrid';

import { feedbackData } from '../../data/MockFeedbackData';

class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbackData,
    };
  }

  render() {
    // let sysID = this.state.feedbackData.filter(
    //   feedbackData => feedbackData.ts.slice(0, 10) === '08/06/2019',
    // );
    // let wholeResult = sysID
    //   .map(
    //     feedbackData => feedbackData.ts.substr(11).replace(':', ''),
    //     // .substr(1, 1),
    //   )
    //   .map(Number);
    //
    // let count = [0, 0, 0, 0];
    //
    // for (let i = 0; i < wholeResult.length; i++) {
    //   if (wholeResult[i] < 600) {
    //     count[0]++;
    //   } else if (wholeResult[i] < 1200) {
    //     count[1]++;
    //   } else if (wholeResult[i] < 1800) {
    //     count[2]++;
    //   } else {
    //     count[3]++;
    //   }
    // }

    ///////////////////////////////////////////////////////////////////////////////////////
    return (
      <React.Fragment>
        <PageHeader header="Feedback Dashboard" fontAwesomeIcon="chart-line" />
        <Row style={{ marginBottom: '20px' }}>
          <Col md={4} style={{ padding: '20px' }}>
            <Pie feedbackData={this.state.feedbackData} />
          </Col>
          <Col md={4} style={{ padding: '20px' }}>
            <Line />
          </Col>
          <Col md={4} style={{ padding: '20px' }}>
            <Bar feedbackData={this.state.feedbackData} />
          </Col>
        </Row>
        {/*<div>{JSON.stringify(sysID)}</div>*/}
        {/*<div>{JSON.stringify(wholeResult)}</div>*/}
        {/*<div>{JSON.stringify(count)}</div>*/}
        {/*<div>{JSON.stringify(wholeResult[0])}</div>*/}

        {/*Will be removing the Data Grid for the debugging of the array data,
           will add back after finishing*/}
        <FeedbackDataGrid feedbackData={this.state.feedbackData} />
      </React.Fragment>
    );
  }
}

export default DashboardPage;
