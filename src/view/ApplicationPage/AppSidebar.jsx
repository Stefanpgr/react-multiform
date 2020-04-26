import React from "react";
import styled from "styled-components";
import { Nav, NavDropdown, Container } from "react-bootstrap";
import Form1 from './forms/Form1';
import Form2 from './forms/Form2';
import Form3 from './forms/Form3';
import Form4 from './forms/Form4';
import { Progress } from 'antd';
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

const AppSidebar = ({current, progress, goto}) => {
  return (
    <div>
      <Wrapper>
        {/* <MenuItem>Payment Option</MenuItem> */}
        <Progress strokeColor='#21AD26'  type="circle" percent={progress} format={percent => (<div>{percent} %</div>)} />
        <h4>Account Setup</h4>
        <Nav
          style={{ paddingRight: "50px", paddingLeft: "10px" }}
          variant="pills"
          activeKey={current}
          className="flex-column"
        >
          <Nav.Item>
            <Nav.Link onClick={()=> goto(0)}  className="text-muted" eventKey="0">
              Payment Option
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=> goto(1)} className="text-muted" eventKey="1" title="Item">
              Employment Details
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=> goto(2)} className="text-muted" eventKey="2">
              Financial Information
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=> goto(3)} className="text-muted" eventKey="3">
              Rent Information
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=> goto(4)} className="text-muted" eventKey="4">
              Landlord Details
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=> goto(5)} className="text-muted" eventKey="5">
              Referee Details
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Wrapper>
    </div>
  );
};

export default AppSidebar;
