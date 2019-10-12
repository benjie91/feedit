import React, { useEffect } from 'react';

import { Nav, Navbar } from 'react-bootstrap';

import mainLogo from '../../assets/images/monster.svg';

const Navigation = () => {
  useEffect(() => {
    fetch('/api/feedback/retrieve/test')
      .then(res => {
        // console.info(res.text())
        return res.text();
      })
      .then(feedbacks => {
        console.info(feedbacks);
      });
  });

  return (
    <Navbar className="feedit-bg-lightblue">
      <Navbar.Brand href="#home">
        <img
          src={mainLogo}
          style={{ marginRight: '15px' }}
          width="30"
          height="30"
          className="d-inline-block align-top"
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
