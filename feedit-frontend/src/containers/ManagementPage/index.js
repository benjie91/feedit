import React, { useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

import PageHeader from '../../components/PageHeader';

import { generateMockFeedbacks } from '../../utils/MockDataGenerator';

const ManagementPage = () => {
  const [consoleMessages, setConsoleMessages] = useState([
    'Welcome to feedit Management!',
  ]);

  const populateDatabase = async () => {
    let cliMessages = consoleMessages
      .concat('Populating database with mock data...')
      .concat('Retrieving current registered system in Feedit...');

    setConsoleMessages(cliMessages);

    const res = await fetch('/api/system/retrieve/all');
    if (res.status !== 200) {
      setConsoleMessages(
        cliMessages.concat(
          'Unable to retrieve registered systems from Feedit. Please try again later.',
        ),
      );
    } else {
      const json = await res.json();
      const systemIds = json.map(sys => sys.systemId);
      const systemNames = json.map(sys => sys.systemName);

      setConsoleMessages(
        cliMessages
          .concat(
            'Generating mock data for ingestion for the following systems...',
          )
          .concat(systemNames.join(' , ')),
      );

      const mockData = generateMockFeedbacks(systemIds);
      console.info(mockData);
    }
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
        <Col md={2}>
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
              <Button
                style={{ width: '100%', marginBottom: '10px' }}
                onClick={clearAllFeedback}
              >
                Clear All Feedback
              </Button>
              <Button
                style={{ width: '100%', marginBottom: '10px' }}
                onClick={() => {
                  setConsoleMessages([]);
                }}
              >
                Clear Console
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={10}>
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
