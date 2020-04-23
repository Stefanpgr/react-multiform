import React from "react";
import styled from "styled-components";
import { Nav, NavDropdown, Container } from "react-bootstrap";
const Wrapper = styled.div`
  top: 80px;
  left: 52px;
  width: 246px;
  height: 429px;
  background: #f5f5f5 0% 0% no-repeat padding-box;
  border-radius: 18px;
  opacity: 1;
`;

const NavLink = styled.div`
  top: 582px;
  left: 81px;
  width: 17px;
  height: 50px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  text-align: center;
  font: Bold 10px/15px Rubik;
`;

const MenuItem = styled.p`
  top: 939px;
  left: 174px;
  width: 202px;
  height: 29px;
  text-align: center;
  font: Bold 17px/21px Rubik;
  letter-spacing: 0px;
  color: #5b55ff;
  opacity: 1;
  padding-top: 10px;
`;

const AppSidebar = () => {
  return (
    <div>
      <Wrapper>
        {/* <MenuItem>Payment Option</MenuItem> */}

        <Nav
          style={{ paddingRight: "50px", paddingLeft: "10px" }}
          variant="pills"
          activeKey="3"
          className="flex-column"
        >
          <Nav.Item>
            <Nav.Link className="text-muted" eventKey="1" href="#/home">
              Payment Option
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-muted" eventKey="2" title="Item">
              Employment Details
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-muted" eventKey="3">
              Financial Information
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-muted" eventKey="4">
              Rent Information
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-muted" eventKey="5">
              Landlord Details
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-muted" eventKey="6">
              Referee Details
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Wrapper>
    </div>
  );
};

export default AppSidebar;
