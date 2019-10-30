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
    return (
      <React.Fragment>
        <PageHeader header="Feedback Dashboard" fontAwesomeIcon="chart-line" />
        <Row style={{ marginBottom: '20px' }}>
          <Col md={4} style={{ padding: '20px' }}>
            <Pie feedbackData={this.state.feedbackData} />
          </Col>
          <Col md={4} style={{ padding: '20px' }}>
            <Line feedbackData={this.state.feedbackData} />
          </Col>
          <Col md={4} style={{ padding: '20px' }}>
            <Bar feedbackData={this.state.feedbackData} />
          </Col>
        </Row>
        <FeedbackDataGrid feedbackData={this.state.feedbackData} />
      </React.Fragment>
    );
  }
}

export default DashboardPage;
