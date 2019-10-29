import React from 'react';

import { Col, Row } from 'react-bootstrap';

import PageHeader from '../../components/PageHeader';
import Bar from '../../components/BarChart';
import Line from '../../components/LineChart';
import Pie from '../../components/PieChart';
import FeedbackDataGrid from '../../components/FeedbackDataGrid';

import { feeditConfig } from '../../config/FeeditConfiguration';
import { feedbackData as data } from '../../data/MockFeedbackData';
import { useJSONFetch } from '../../utils/ReactHooks';
import LoadingPage from '../LoadingPage';

const DashboardPage = () => {
  let feedbackData = data;

  const { response: fetchData, error, isLoading } = useJSONFetch(
    '/api/feedback/retrieve/all',
  );

  if (feeditConfig.useDataFromServer) {
    if (isLoading) {
      return <LoadingPage />;
    } else if (error !== null) {
      return <div>Fetch failed...</div>;
    }
    feedbackData = fetchData;
  }

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
          <Bar feedbackData={feedbackData} />
        </Col>
      </Row>
      <FeedbackDataGrid feedbackData={feedbackData} />
    </React.Fragment>
  );
};

export default DashboardPage;
