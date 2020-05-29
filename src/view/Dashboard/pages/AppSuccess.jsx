import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import UserTopNav from "../../UserTopNav";
import FooterCommon from "../../Partials/FooterCommon";
const Btn = styled.button`
  width: 146px;
  height: 44px;
  background: #51a4fb 0% 0% no-repeat padding-box;
  border: none;
  color: white;
  border-radius: 5px;
  margin-top: 4px;
  opacity: 1;
`;

const AppSuccess = () => {
  return (
    <div style={{ backgroundColor: "#F5F5F5", minHeight: "100vh" }}>
      <UserTopNav />
      <div
        style={{
          backgroundColor: "#ffff",
          width: "98%",
          margin: "auto",
          minHeight: "480px",
          borderRadius: "5px",
          marginTop: "3rem",
        }}
      >
        <Container fluid>
          <div className="text-center mt-5 pb-5 pt-5">
            <img
              src={require("../../../assets/img/dashboard/app-comp.svg")}
              width="280"
            />
            <h6
              style={{ color: "#51A4FB", fontWeight: "bold", fontSize: "35px" }}
            >
              Application Complete
            </h6>
            <h6 style={{ color: "#707070", fontSize: "10px" }}>
              You have successfully completed your application
            </h6>
            <Btn>Ok</Btn>
          </div>
        </Container>
      </div>
      <FooterCommon />
    </div>
  );
};

export default AppSuccess;
