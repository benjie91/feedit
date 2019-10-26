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
        <Row style={{ marginBottom: '10px' }}>
          <Col md={4}>
            <Pie />
          </Col>
          <Col md={4}>
            <Line />
          </Col>
          <Col md={4}>
            <Bar sysID={sysID} count={count} />
          </Col>
          {/*style=*/}
          {/*{{*/}
          {/*  paddingTop: '50px',*/}
          {/*  boxSizing: 'content-box',*/}
          {/*}}*/}
          {/*containerStyle=*/}
          {/*{{*/}
          {/*  position: 'relative',*/}
          {/*  overflow: 'vosible',*/}
          {/*}}*/}
        </Row>
        <Row>
          <Col md={10}>
            <FeedbackDataGrid feedbackData={this.state.feedbackData} />
          </Col>
          <Col md={2}>
            <Row>
              <h3>
                Feedback:{'\n'}
                <h1>123</h1>
              </h3>
            </Row>
            <Row>
              <h3>
                Systems:{'\n'}
                <h1>123</h1>
              </h3>
            </Row>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default DashboardPage;
