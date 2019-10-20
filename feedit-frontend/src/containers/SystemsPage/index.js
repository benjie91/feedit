import React from 'react';
import { Col, Row } from 'react-bootstrap';

import PageHeader from '../../components/PageHeader';
import SystemsDataGrid from '../../components/SystemsDataGrid';
import SystemsOverview from '../../components/SystemsOverview';

import { useJSONFetch } from '../../utils/ReactHooks';

const SystemPage = () => {
  const { response: data, error, isLoading } = useJSONFetch(
    '/api/system/retrieve/all',
  );

  if (isLoading) {
    return <div>Fetching data...</div>;
  } else if (error !== null) {
    return <div>Fetch failed...</div>;
  }

  return (
    <React.Fragment>
      <PageHeader header="Systems" fontAwesomeIcon="coffee" />
      <Row>
        <Col xs={6}>
          <SystemsDataGrid systemsData={data} />
        </Col>
        <Col xs={6}>
          <SystemsOverview systemsData={data} />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default SystemPage;
