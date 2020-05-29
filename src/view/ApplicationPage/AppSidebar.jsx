import React, { useState } from "react";
import styled from "styled-components";
import { Nav } from "react-bootstrap";

// import {useSelector} from 'react-redux'

import { Progress, Divider, Badge } from "antd";
const Wrapper = styled.div`
  top: 80px;
  left: 52px;
  width: 256px;
  height: 499px;
  background: #00204f 0% 0% no-repeat padding-box;
  border-radius: 18px;
  opacity: 1;
`;

// const NavLink = styled.div`
// 	top: 582px;
// 	left: 81px;
// 	width: 17px;
// 	height: 50px;
// 	background: #ffffff 0% 0% no-repeat padding-box;
// 	border-radius: 10px;
// 	opacity: 1;
// 	text-align: center;
// 	font: Bold 10px/15px Rubik;
// `;

// const MenuItem = styled.p`
// 	top: 939px;
// 	left: 174px;
// 	width: 202px;
// 	height: 29px;
// 	text-align: center;
// 	font: Bold 17px/21px Rubik;
// 	letter-spacing: 0px;
// 	color: #5b55ff;
// 	opacity: 1;
// 	padding-top: 10px;
// `;

const AppSidebar = ({ current, progress, goto }) => {
  const [sideBar, setSidebar] = useState([]);
  // const {progress} = useSelector((state)=>({
  // 	progress: state.application.progress
  // }))
  console.log("current", current);
  sideBar.push(current);
  return (
    <div>
      <Wrapper>
        {/* <MenuItem>Payment Option</MenuItem> */}
        <Progress
          strokeColor="#21AD26"
          type="circle"
          className="mb-2 pl-5 mt-3"
          style={{ marginLeft: "10px" }}
          percent={progress}
          format={(percent) => <div>{percent} %</div>}
        />
        <h5 className="text-white text-center" style={{ fontWeight: "bold" }}>
          Account Setup
        </h5>
        {/* <hr  /> */}
        <Divider style={{ width: "2px" }} />
        <Nav
          style={{ paddingRight: "50px", paddingLeft: "10px" }}
          variant="pills"
          activeKey={current}
          className="flex-column"
        >
          <Nav.Item className="pb-2">
            <Nav.Link
              className={sideBar.includes(0) ? "text-white" : "text-muted"}
              disabled={sideBar.includes(0) ? false : true}
              onClick={() => goto(0)}
              eventKey="0"
            >
              Payment Option{" "}
              <span className="nav-badge">
                <Badge count={1} style={{ backgroundColor: "#21AD26" }} />
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="pb-2">
            <Nav.Link
              className={sideBar.includes(1) ? "text-white" : "text-muted"}
              disabled={sideBar.includes(1) ? false : true}
              onClick={() => goto(1)}
              eventKey="1"
              title="Item"
            >
              Employment Details
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="pb-2">
            <Nav.Link
              className={sideBar.includes(2) ? "text-white" : "text-muted"}
              disabled={sideBar.includes(2) ? false : true}
              onClick={() => goto(2)}
              eventKey="2"
            >
              Financial Information
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="pb-2">
            <Nav.Link
              className={sideBar.includes(3) ? "text-white" : "text-muted"}
              disabled={sideBar.includes(3) ? false : true}
              onClick={() => goto(3)}
              eventKey="3"
            >
              Rent Information
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="pb-2">
            <Nav.Link
              className={sideBar.includes(4) ? "text-white" : "text-muted"}
              disabled={sideBar.includes(4) ? false : true}
              onClick={() => goto(4)}
              eventKey="4"
            >
              Landlord Details
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="pb-2">
            <Nav.Link
              className={sideBar.includes(5) ? "text-white" : "text-muted"}
              disabled={sideBar.includes(5) ? false : true}
              onClick={() => goto(5)}
              eventKey="5"
            >
              Referee Details
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Wrapper>
    </div>
  );
};

export default AppSidebar;
