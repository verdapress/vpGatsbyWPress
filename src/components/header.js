import React from "react";
import {Link} from "gatsby";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => (
    <Navbar bg="light" expand="lg">
  <Container>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as ={Link} to="/">Home </Nav.Link>
          <Nav.Link as ={Link} to="/about">About us
          </Nav.Link>
          <Nav.Link as ={Link} to="/contact">Contact Us
          </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
)


export default Header
