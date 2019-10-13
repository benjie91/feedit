import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import FeedbackDataGrid from '../../components/FeedbackDataGrid';
import BarChart from '../../components/BarChart';
import PageHeader from '../../components/PageHeader';

class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbackData: [
        {
          sid: 'App01',
          fb: 'The system is not easy to use.',
          fbt: 'Generic',
          uid: 12345,
          ug: 'Department A',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App01',
          fb: 'The GUI is poor.',
          fbt: 'Generic',
          uid: 23456,
          ug: 'Department B',
          ts: '07/09/2019 15:22',
        },
        {
          sid: 'App01',
          fb: 'The system is very slow.',
          fbt: 'Generic',
          uid: 34567,
          ug: 'Department A',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App01',
          fb: 'Hello',
          fbt: 'Generic',
          uid: 34567,
          ug: 'Department A',
          ts: '09/09/2019 15:22',
        },
        {
          sid: 'App01',
          fb: 'World',
          fbt: 'Generic',
          uid: 34567,
          ug: 'Department A',
          ts: '09/09/2019 15:22',
        },
        {
          sid: 'App02',
          fb: 'Good Job!',
          fbt: 'Generic',
          uid: 45678,
          ug: 'Department B',
          ts: '07/09/2019 15:22',
        },
        {
          sid: 'App02',
          fb: 'The system is not easy to use.',
          fbt: 'Generic',
          uid: 56789,
          ug: 'Department A',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App02',
          fb: 'The GUI is poor.',
          fbt: 'Generic',
          uid: 12345,
          ug: 'Department B',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App03',
          fb: 'The system is very slow.',
          fbt: 'Generic',
          uid: 23456,
          ug: 'Department A',
          ts: '07/09/2019 15:22',
        },
        {
          sid: 'App03',
          fb: 'Good job!',
          fbt: 'Generic',
          uid: 34567,
          ug: 'Department B',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App03',
          fb: 'The system is not easy to use.',
          fbt: 'Generic',
          uid: 45678,
          ug: 'Department A',
          ts: '07/09/2019 15:22',
        },
        {
          sid: 'App04',
          fb: 'The GUI is poor.',
          fbt: 'Generic',
          uid: 56789,
          ug: 'Department B',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App04',
          fb: 'The system is very slow.',
          fbt: 'Generic',
          uid: 12345,
          ug: 'Department A',
          ts: '07/09/2019 15:22',
        },
        {
          sid: 'App04',
          fb: 'Good job!',
          fbt: 'Generic',
          uid: 23456,
          ug: 'Department B',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App05',
          fb: 'The system is not easy to use.',
          fbt: 'Generic',
          uid: 34567,
          ug: 'Department A',
          ts: '07/09/2019 15:22',
        },
        {
          sid: 'App05',
          fb: 'The GUI is poor.',
          fbt: 'Generic',
          uid: 45678,
          ug: 'Department B',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App05',
          fb: 'The system is very slow.',
          fbt: 'Generic',
          uid: 56789,
          ug: 'Department A',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App05',
          fb: 'Hello',
          fbt: 'Generic',
          uid: 56789,
          ug: 'Department A',
          ts: '09/09/2019 15:22',
        },
        {
          sid: 'App05',
          fb: 'World',
          fbt: 'Generic',
          uid: 56789,
          ug: 'Department A',
          ts: '09/09/2019 15:22',
        },
        {
          sid: 'App06',
          fb: 'Good job!',
          fbt: 'Generic',
          uid: 12345,
          ug: 'Department B',
          ts: '07/09/2019 15:22',
        },
        {
          sid: 'App06',
          fb: 'The system is not easy to use.',
          fbt: 'Generic',
          uid: 23456,
          ug: 'Department A',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App06',
          fb: 'The GUI is poor.',
          fbt: 'Generic',
          uid: 34567,
          ug: 'Department B',
          ts: '07/09/2019 15:22',
        },
        {
          sid: 'App07',
          fb: 'The system is very slow.',
          fbt: 'Generic',
          uid: 45678,
          ug: 'Department A',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App07',
          fb: 'Good job!',
          fbt: 'Generic',
          uid: 56789,
          ug: 'Department B',
          ts: '07/09/2019 15:22',
        },
        {
          sid: 'App07',
          fb: 'The system is not easy to use.',
          fbt: 'Generic',
          uid: 12345,
          ug: 'Department A',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App08',
          fb: 'The GUI is poor.',
          fbt: 'Generic',
          uid: 23456,
          ug: 'Department B',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App08',
          fb: 'The system is very slow.',
          fbt: 'Generic',
          uid: 34567,
          ug: 'Department A',
          ts: '07/09/2019 15:22',
        },
        {
          sid: 'App08',
          fb: 'Good job!',
          fbt: 'Generic',
          uid: 45678,
          ug: 'Department B',
          ts: '08/09/2019 15:22',
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <PageHeader header="Feedback Dashboard" fontAwesomeIcon="chart-line" />
        <Row>
          <Col md={6}>
            <FeedbackDataGrid feedbackData={this.state.feedbackData} />
          </Col>
          <Col md={6}>
            <BarChart />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default DashboardPage;
