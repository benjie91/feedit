import React, {useEffect} from 'react';

import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
// import Navbar from 'react-bootstrap/Navbar'

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

  return(
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Feedit</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#starred">Starred</Nav.Link>
          <NavDropdown title="All" id="all-dropdown">
            <NavDropdown.Item href="#action/3.1">All (1 - 50)</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href="#action/3.2">All (51 - 100)</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href="#action/3.3">All (101 - 150)</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href="#action/3.4">All (151 - 200)</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Labels" id="labels-dropdown">
            <NavDropdown.Item href="#action/3.1">Label 1</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href="#action/3.2">Label 2</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href="#action/3.3">Label 3</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href="#action/3.4">Label 4</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#starred">Recycle Bin</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
