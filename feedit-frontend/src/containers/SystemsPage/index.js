import React from 'react';
import PageHeader from '../../components/PageHeader';

import { useJSONFetch } from '../../utils/ReactHooks';
import SystemsDataGrid from '../../components/SystemsDataGrid';

const SystemPage = () => {
  const { response: data, error, isLoading } = useJSONFetch(
    '/api/system/retrieve/all',
  );

  if (isLoading) {
    return <div>Fetching data...</div>;
  } else if (error !== null) {
    return <div>{error}</div>;
  }

  return (
    <React.Fragment>
      <PageHeader header="Systems" fontAwesomeIcon="coffee" />
      <SystemsDataGrid systemsData={data} />
    </React.Fragment>
  );
};

export default SystemPage;
