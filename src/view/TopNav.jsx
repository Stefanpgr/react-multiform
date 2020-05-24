import React from 'react'
import {Navbar,Form,FormControl, Nav, Button, NavItem, NavDropdown} from 'react-bootstrap'
import { ReactComponent as Logo } from '../assets/img/logo.svg'

const TopNav = () => {

    return (
            <Navbar collapseOnSelect expand="md" bg="white" variant="light" className="px-4 px-lg-5 py-0">
              <Navbar.Brand href="/" className="py-0">
                <Logo
                  alt="RentCrowdy"
                  width="140"
                  height="75"
                  className="d-inline-block align-top"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto font-weight-bold">
                  <Nav.Link href="/" className="px-3">Home</Nav.Link>
                  <Nav.Link href="/calculate" className="px-3">Calculate ROI</Nav.Link>
                  <Nav.Link href="/about" className="px-3">About</Nav.Link>
                  <Nav.Link  href="/faq" className="px-3">FAQ</Nav.Link>
                  <Nav.Link href="/login" className="px-3">Login</Nav.Link>
                  <Nav.Link href="/signup"  className="btn btn-outline-primary px-3 mx-2">Register</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          )
}

export default TopNav;