import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import '../Navber.css';

function Navber() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
          <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Brand" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className='dropdown_list'>브래드 스토리</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Product" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">생크림 카스테라</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">케이크 만들기</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">크림빵</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Community" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mebership</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Notice</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Q&A</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Offline Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">매장 메뉴 안내</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navber;