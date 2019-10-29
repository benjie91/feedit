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
    const sysID = this.state.feedbackData
      .map(feedbackData => feedbackData.sid)
      .filter((value, index, self) => self.indexOf(value) === index);

    let count = this.state.feedbackData.reduce(
      (acc, o) => ((acc[o.sid] = (acc[o.sid] || 0) + 1), acc),
      {},
    );

    count = Object.values(count);

    return (
      <React.Fragment>
        <PageHeader header="Feedback Dashboard" fontAwesomeIcon="chart-line" />
        <Row style={{ marginBottom: '20px' }}>
          <Col md={4} style={{ padding: '20px' }}>
            <Pie />
          </Col>
          <Col md={4} style={{ padding: '20px' }}>
            <Line />
          </Col>
          <Col md={4} style={{ padding: '20px' }}>
            <Bar sysID={sysID} count={count} />
          </Col>
        </Row>
        <FeedbackDataGrid feedbackData={this.state.feedbackData} />
      </React.Fragment>
    );
  }
}

export default DashboardPage;
