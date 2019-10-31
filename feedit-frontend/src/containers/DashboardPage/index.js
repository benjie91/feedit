import React, { Component } from 'react';

import { Col, Row } from 'react-bootstrap';

import PageHeader from '../../components/PageHeader';
import Bar from '../../components/BarChart';
import Line from '../../components/LineChart';
import Pie from '../../components/PieChart';
import FeedbackDataGrid from '../../components/FeedbackDataGrid';
import Dropdown from 'react-bootstrap/Dropdown';
import Data from '../../data/DataFilter';

class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data,
    };
  }

  render() {
    // let sysID = this.state.Data.filter(
    //   feedbackData => feedbackData.sid === 'App01',
    // );
    return (
      <React.Fragment>
        <Row>
          <Col md={4}>
            <PageHeader
              header="Feedback Dashboard"
              fontAwesomeIcon="chart-line"
            />
          </Col>
          <Col>
            {/*<h3>Dropdown's position</h3>*/}
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <Row style={{ marginBottom: '20px' }}>
          <Col md={4} style={{ padding: '20px' }}>
            <Pie feedbackData={this.state.Data} />
          </Col>
          <Col md={4} style={{ padding: '20px' }}>
            <Line feedbackData={this.state.Data} />
          </Col>
          <Col md={4} style={{ padding: '20px' }}>
            <Bar feedbackData={this.state.Data} />
          </Col>
        </Row>
        {/*<div>{JSON.stringify(sysID)}</div>*/}
        <FeedbackDataGrid feedbackData={this.state.Data} />
      </React.Fragment>
    );
  }
}

export default DashboardPage;
