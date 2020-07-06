import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Logo } from "../assets/img/logo.svg";
import { Input } from "antd";
import { SearchOutlined, BellOutlined } from "@ant-design/icons";
import "./UserTopNav.scss";
import { withRouter } from "react-router";

import { NavLink } from "react-router-dom";

const UserTopNav = (props) => {
  const { location, history } = props;
  const dispatch = useDispatch();
 const user = JSON.parse(sessionStorage.getItem('user'))
  const requestLogout = () => {
    dispatch({
      type: "LOGOUT_USER",
      payload: {},
    });
    localStorage.clear();
    history.push("/login");
  };

  console.log(location.pathname, "Props");
  const HideNav = () => {
    if (
      location.pathname === "/success" ||
      location.pathname === "/apply" ||
      location.pathname === "/onboard" ||
      location.pathname === "/application-success"
    ) {
      return <div></div>;
    } else {
      return (
        <div>
          <Navbar
            collapseOnSelect
            expand="lg"
            variant="light"
            className="second-nav px-4"
          >
            <Nav.Item>
              <NavLink
                to="/dashboard"
                exact={true}
                activeClassName="active"
                className="nav-link pl-3 pr-4"
              >
                <i className="kw kw-dash"></i> Dashboard
              </NavLink>
            </Nav.Item>

            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="bg-white"
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav.Item>
                <NavLink
                  to="/dashboard/profile"
                  exact={true}
                  activeClassName="active"
                  className="nav-link pl-3 pr-4"
                >
                  {" "}
                  <i className="kw kw-renter"></i> Renter Profile
                </NavLink>
              </Nav.Item>

              <Nav.Item>
                <NavLink
                  to="/dashboard/docs"
                  exact={true}
                  activeClassName="active"
                  className="nav-link pl-3 pr-4"
                >
                  {" "}
                  <i className="kw kw-app"></i> Documents
                </NavLink>
              </Nav.Item>

              <Nav.Item>
                <NavLink
                  to="/dashboard/referral"
                  exact={true}
                  activeClassName="active"
                  className="nav-link pl-3 pr-4"
                >
                  {" "}
                  <i className="kw kw-ref"></i> Referrals
                </NavLink>
              </Nav.Item>

              <Nav.Item>
                <NavLink
                  to="/dashboard/settings"
                  exact={true}
                  activeClassName="active"
                  className="nav-link pl-3 pr-4"
                >
                  {" "}
                  <i className="kw kw-setting"></i> Settings
                </NavLink>
              </Nav.Item>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
    }
  };
  return (
    <div className="container-fluid px-0 nav-cont mb-4 sticky-top">
      <Navbar
        collapseOnSelect
        expand="md"
        bg="white"
        variant="light"
        className="py-0 px-4"
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

        <Nav.Item className="d-none d-md-inline">
          <Input
            prefix={
              <SearchOutlined className="site-form-item-icon text-muted mt-2" />
            }
            placeholder="Search"
          />
        </Nav.Item>
        <Nav className="ml-auto font-weight-bold">
          <Nav.Link className="px-3">
            <BellOutlined className="text-muted align-middle px-2" />
            <span className="d-none d-sm-inline">
              <span className="font-weight-light">Hi,</span> {user.firstname}
              <span className="name-icon">
                {user.firstname.charAt(0).toUpperCase()}
              </span>
              <span className="font-weight-light">
                <button onClick={() => requestLogout()}>Logout</button>
              </span>
            </span>
          </Nav.Link>
        </Nav>
      </Navbar>
      <HideNav />
    </div>
  );
};

export default withRouter(UserTopNav);
