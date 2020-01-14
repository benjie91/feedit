import React, { useState, useRef, useEffect } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

import PageHeader from '../../components/PageHeader';

import { generateMockFeedbacks } from '../../utils/MockDataGenerator';

const ManagementPage = () => {
  const messagesEndRef = useRef(null);

  const [consoleMessages, setConsoleMessages] = useState([
    'Welcome to feedit Management!',
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [consoleMessages]);

  const populateDatabase = async () => {
    let cliMessages = consoleMessages.concat(
      'Populating database with fake systems',
    );
    setConsoleMessages(cliMessages);

    // Placeholders for generating fake systems

    cliMessages = cliMessages.concat(
      'Retrieving current registered system in Feedit...',
    );

    setConsoleMessages(cliMessages);

    const sysResponse = await fetch('/api/system/retrieve/all');
    if (sysResponse.status !== 200) {
      setConsoleMessages(
        cliMessages.concat(
          'Unable to retrieve registered systems from Feedit. Please try again later.',
        ),
      );
    } else {
      const sysJson = await sysResponse.json();
      const systemIds = sysJson.map(sys => sys.systemId);
      const systemNames = sysJson.map(sys => sys.systemName);

      cliMessages = cliMessages
        .concat(
          'Generating mock data for ingestion for the following systems...',
        )
        .concat(systemNames.join(' , '));

      setConsoleMessages(cliMessages);

      const mockData = generateMockFeedbacks(systemIds);

      const ingestResponse = await fetch('/api/feedback/ingest/bulk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mockData),
      });

      if (ingestResponse.status !== 200) {
        cliMessages = cliMessages.concat(
          'Error ingesting mock feedback into the database',
        );
      } else {
        cliMessages = cliMessages.concat(
          'Successfully inserting mock feedback into database',
        );
      }
      setConsoleMessages(cliMessages);
    }
  };

  const clearAllFeedback = async () => {
    let cliMessages = consoleMessages.concat(
      'Clearing all feedback in the database...',
    );
    setConsoleMessages(cliMessages);
    const response = await fetch('/api/feedback/delete/all', {
      method: 'DELETE',
    });
    if (response.status !== 200) {
      cliMessages = cliMessages.concat(
        'Error deleting all feedback in the database.',
      );
    } else {
      cliMessages = cliMessages.concat('All feedback deleted.');
    }
    setConsoleMessages(cliMessages);
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
              <div ref={messagesEndRef} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ManagementPage;
