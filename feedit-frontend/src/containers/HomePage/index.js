import React from 'react';

import { Col, Row } from 'react-bootstrap';

import PageHeader from '../../components/PageHeader';

import feeditRegistrationURI from '../../assets/images/feedit-registration.png';
import feedbitIngestRequest from '../../assets/images/feedit-ingest-request.png';

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
        <Col xs={12} style={{ marginBottom: '60px' }}>
          <h4>
            Before you can start analyzing on your user feedback, you need to
            register your system with feedit.
          </h4>
        </Col>
      </Row>
      <Row style={{ marginBottom: '100px' }}>
        <Col xs={6} style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={feeditRegistrationURI}
            style={{
              maxHeight: '300px',
              maxWidth: '-webkit-fill-available',
              border: '1px solid gray',
            }}
            alt="Feedit Registration Step"
          />
        </Col>
        <Col
          xs={6}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '400px' }}>
            <span>
              Click on the{' '}
              <span style={{ color: 'red' }}>System Registration</span> button
              on the side menu to register the system in feedit.
            </span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col
          xs={6}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '400px' }}>
            <span>
              Once registration is successful, you will receive an{' '}
              <span style={{ color: 'red' }}>id</span>. Remember this id as this
              will be used to transmit the feedback to feedit.
            </span>
          </div>
        </Col>
        <Col xs={6} style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={feedbitIngestRequest}
            style={{
              maxHeight: '300px',
              maxWidth: '-webkit-fill-available',
              border: '1px solid gray',
            }}
            alt="Feedit Ingest Step"
          />
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
