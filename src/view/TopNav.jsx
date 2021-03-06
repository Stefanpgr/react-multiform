import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Navbar,
  Form,
  FormControl,
  Nav,
  Button,
  NavItem,
  NavDropdown,
} from "react-bootstrap";
import { ReactComponent as Logo } from "../assets/img/logo.svg";
import { NavLink } from "react-router-dom";

const TopNav = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({
    user: state.user,
  }));

  const handleLogout = () => dispatch({ type: "LOGOUT_USER" });
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="white"
      variant="light"
      className="px-4 px-lg-5 py-0 sticky-top"
    >
      <Navbar.Brand href="/" className="py-0">
        {/* <Logo
          alt="RentCrowdy"
          width="140"
          height="70"
          className="d-inline-block align-top"
        /> */}
        <img
          src="https://res.cloudinary.com/kwaba/image/upload/v1587125730/logo_kccjal.png"
          alt="Kwaba"
          width="130"
          height="35"
          className="d-inline-block align-top mt-2 mb-2"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto font-weight-bold">
          <Nav.Item>
            <NavLink
              to="/"
              exact={true}
              activeClassName="active"
              className="nav-link px-3"
            >
              Home
            </NavLink>
          </Nav.Item>
          {/*                   
                  <Nav.Item>
                    <NavLink to="/calculate" exact={true}  activeClassName='active' className="nav-link px-3">
                      Calculate ROI
                    </NavLink>
                  </Nav.Item> */}

          <Nav.Item>
            <NavLink
              to="/about"
              exact={true}
              activeClassName="active"
              className="nav-link px-3"
            >
              About
            </NavLink>
          </Nav.Item>

          <Nav.Item>
            <NavLink
              to="/faq"
              exact={true}
              activeClassName="active"
              className="nav-link px-3"
            >
              FAQ
            </NavLink>
          </Nav.Item>

          <Nav.Item>
            {user.isAuth ? (
              <NavLink
                to="#"
                exact={true}
                activeClassName="active"
                className="nav-link px-3"
                onClick={() => handleLogout()}
              >
                Logout
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                exact={true}
                activeClassName="active"
                className="nav-link px-3"
              >
                Login
              </NavLink>
            )}
          </Nav.Item>

          <Nav.Item>
            {user.isAuth ? (
              <NavLink
                to="/dashboard"
                exact={true}
                activeClassName="active"
                className="nav-link btn btn-outline-primary bg-white text-dark px-3 mx-2"
              >
                Dashboard
              </NavLink>
            ) : (
              <NavLink
                to="/signup"
                exact={true}
                activeClassName="active"
                className="nav-link btn btn-outline-primary bg-white text-dark px-3 mx-2"
              >
                Register
              </NavLink>
            )}
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNav;
