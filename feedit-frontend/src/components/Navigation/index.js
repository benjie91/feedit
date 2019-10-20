import React from 'react';

import { Nav, Navbar } from 'react-bootstrap';

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
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#dashboard">Dashboard</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
