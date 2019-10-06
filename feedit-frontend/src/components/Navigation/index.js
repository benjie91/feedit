import React, { useEffect } from 'react';

import { Nav, Navbar } from 'react-bootstrap';

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
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Feedit</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
