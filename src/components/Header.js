import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
 

function Header(props) {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">{props.title}  </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default Header
