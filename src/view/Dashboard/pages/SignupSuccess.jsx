import React from "react";
import styled from "styled-components";
import { Container, Button } from "react-bootstrap";

const Btn = styled.button`
  width: 146px;
  height: 44px;
  background: #5b55ff 0% 0% no-repeat padding-box;
  border: none;
  color: white;
  border-radius: 5px;
  margin-top: 4px;
  opacity: 1;
`;

const SignupSuccess = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <Container className=" bg-white">
        <div className="text-center mt-5">
          <img
            src={require("../../../assets/img/signup-success.svg")}
            width="320"
          />
          <h6
            style={{ color: "#5B55FF", fontWeight: "bold", fontSize: "35px" }}
          >
            Sign up Successful
          </h6>
          <h6 style={{ color: "#585858", fontSize: "20px" }}>
            Your sign was successful
          </h6>
          <h6 style={{ color: "#585858", fontSize: "20px" }}>
            Please check your email to verify your account
          </h6>

          <Btn>Login</Btn>
        </div>
      </Container>
    </div>
  );
};

export default SignupSuccess;