import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/Logo 2.png'

function Navigation() {
  return (
    <div className="navigation">
      <Navbar collapseOnSelect expand="lg" fixed='top' bg='light'>
        <Container>
          <Navbar.Brand href='/'><img src={Logo} className="navigation-logo-image" alt='logo'></img>RESTU INVESTAMA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item>
                <Nav.Link eventKey="1" as={Link} to='/'>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="2" as={Link} to='/service'>Service</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="3" as={Link} to='/about'>About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="4" as={Link} to='/news'>News</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="5" as={Link} to='/contact'>Contact</Nav.Link>
              </Nav.Item>
            </Nav>
            <div className="btn-group">
              <a href='/'><button className='button-1'>EN</button></a>
              <a href='/id/beranda'><button className='button-2'>ID</button></a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation