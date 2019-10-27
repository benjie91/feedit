import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import { Button, Card, Col, Row } from 'react-bootstrap';

const ManagementPage = () => {
  const [consoleMessages, setConsoleMessages] = useState([
    'Welcome to feedit Management!',
  ]);

  const populateDatabase = () => {
    setConsoleMessages(
      consoleMessages.concat('Populating database with mock data...'),
    );
  };

  const clearAllFeedback = () => {
    setConsoleMessages(
      consoleMessages.concat('Clearing all feedback in the database...'),
    );
  };

  return (
    <React.Fragment>
      <PageHeader header="Feedit Management" fontAwesomeIcon="tasks" />
      <Row>
        <Col xs={2}>
          <Card>
            <Card.Body
              style={{
                height: '500px',
                overflowY: 'scroll',
              }}
            >
              <Button
                style={{ width: '100%', marginBottom: '10px' }}
                onClick={populateDatabase}
              >
                Populate Database
              </Button>
              <Button style={{ width: '100%' }} onClick={clearAllFeedback}>
                Clear all feedback
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={10}>
          <Card>
            <Card.Body
              style={{
                backgroundColor: 'black',
                color: 'white',
                height: '500px',
                padding: '5px 10px',
                overflowY: 'scroll',
              }}
            >
              {consoleMessages.map((msg, index) => (
                <div key={index}>[Feedit-Management] ~ {msg}</div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ManagementPage;
