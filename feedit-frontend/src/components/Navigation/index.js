import React from 'react';

import { Navbar } from 'react-bootstrap';

import mainLogo from '../../assets/images/monster.svg';

const Navigation = () => {
  return (
    <Navbar
      className="feedit-bg-lightblue"
      style={{ borderBottom: '1px solid gray' }}
      fixed="top"
    >
      <Navbar.Brand href="#home">
        <img
          src={mainLogo}
          style={{ marginRight: '15px' }}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Feedit Logo"
        />
        <span>Feedit</span>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Navigation;
