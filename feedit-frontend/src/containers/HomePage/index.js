import React from 'react';

import { Col, Row } from 'react-bootstrap';

import PageHeader from '../../components/PageHeader';

import feeditRegistrationURI from '../../assets/images/feedit-registration.png';

const HomePage = () => {
  return (
    <div>
      <PageHeader header="Feedit System" fontAwesomeIcon="home" />
      <Row>
        <Col xs={12}>
          Feedit is a web application that helps you consolidate feedback from
          your users. Just ask the right questions and hook up to feedit to see
          these answered!
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={12} style={{ marginBottom: '20px' }}>
          <h4>
            Before you can start analyzing on your user feedback, you need to
            register your system with feedit.
          </h4>
        </Col>
        <Col xs={6} style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={feeditRegistrationURI}
            style={{
              maxHeight: '300px',
              maxWidth: '-webkit-fill-available',
              border: '1px solid gray',
            }}
          />
        </Col>
        <Col xs={6}>
          <div
            style={{
              height: '100%',
              maxWidth: '400px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <span>
              Click on the{' '}
              <span style={{ color: 'red' }}>System Registration</span> button
              on the side menu to register the system in feedit.
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
