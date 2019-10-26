import React from 'react';

import { Toast } from 'react-bootstrap';

import mainLogo from '../../assets/images/monster.svg';

const RegistrationNotification = ({ showNotification, onClose, success }) => {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      style={{
        position: 'absolute',
        minHeight: '100px',
        top: '15px',
        right: '15px',
      }}
    >
      <Toast onClose={onClose} show={showNotification} delay={3000} autohide>
        <Toast.Header>
          <img
            src={mainLogo}
            style={{ width: '16px', height: '16px' }}
            className="rounded mr-2"
            alt=""
          />
          <strong className="mr-auto">Feedit Registration</strong>
        </Toast.Header>
        <Toast.Body>
          {success && <span>Successful registration of System</span>}
          {!success && (
            <span>
              There was an error registering the system. Please try again later.
            </span>
          )}
        </Toast.Body>
      </Toast>
    </div>
  );
};

export default RegistrationNotification;
