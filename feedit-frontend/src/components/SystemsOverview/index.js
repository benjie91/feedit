import React from 'react';
import { Card } from 'react-bootstrap';

const SystemsOverview = ({ systemsData }) => {
  return (
    <Card>
      <Card.Body>
        <h4>Overview</h4>
        <div>Total number of systems registered: {systemsData.length}</div>
      </Card.Body>
    </Card>
  );
};

export default SystemsOverview;
