import React, { useState, useReducer } from 'react';

import { Card, Form, Button } from 'react-bootstrap';
import PageHeader from '../../components/PageHeader';
import RegistrationNotification from './RegistrationNotification';

const RegistrationPage = () => {
  const [registrationFormState, setRegistrationFormState] = useReducer(
    (prevState, newState) => ({
      ...prevState,
      ...newState,
    }),
    { systemName: '', custodian: '' },
  );

  const [validated, setValidated] = useState(false);
  const [response, setResponse] = useState({
    statusCode: undefined,
  });
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      fetch('/api/system/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          systemName: registrationFormState.systemName,
          custodianName: registrationFormState.custodian,
        }),
      })
        .then(res => {
          if (res.status === 201) {
            setResponse({
              statusCode: 201,
            });
            setRegistrationFormState({ systemName: '', custodian: '' });
            setValidated(false);
          } else {
            setResponse({
              statusCode: res.status,
            });
          }
        })
        .finally(() => {
          setShowNotification(true);
        });
    }
  };

  return (
    <React.Fragment>
      <PageHeader header="System Registration" fontAwesomeIcon="cheese" />
      <Card>
        <Card.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="registrationForm.SystemName">
              <Form.Label>System Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter System Name"
                value={registrationFormState.systemName}
                onChange={event => {
                  setRegistrationFormState({ systemName: event.target.value });
                }}
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please enter a valid system name.
              </Form.Control.Feedback>{' '}
            </Form.Group>
            <Form.Group controlId="registrationForm.custodian">
              <Form.Label>Custodian</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Custodian Name"
                value={registrationFormState.custodian}
                onChange={event => {
                  setRegistrationFormState({ custodian: event.target.value });
                }}
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please enter a valid custodian name.
              </Form.Control.Feedback>{' '}
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <RegistrationNotification
        showNotification={showNotification}
        success={response.statusCode === 201}
        onClose={() => {
          setShowNotification(false);
        }}
      />
    </React.Fragment>
  );
};

export default RegistrationPage;
