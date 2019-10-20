import React from 'react';

const SystemsOverview = ({ systemsData }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px' }}>
      <h4>Overview</h4>
      <div>Total number of systems registered: {systemsData.length}</div>
    </div>
  );
};

export default SystemsOverview;
