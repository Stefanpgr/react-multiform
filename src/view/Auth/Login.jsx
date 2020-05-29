import React, { useState } from "react";
import { Col, Row, Container, Card } from "react-bootstrap";
import { connect } from "react-redux";
import TopNav from "../TopNav";
import { Form, Input } from "antd";
import { requestLogin } from "../../actions/auth";
import styled from "styled-components";
import "./Auth.scss";
const Wrapper = styled.div`
  height: 100vh;
  background-color: #eff7ff;
`;

const Login = () => {
  return (
    <div>
      <TopNav />
      <Wrapper className="auth">
        <Row>
          <Col className="bg-img-login">Hello</Col>
          <Col>
            <Card>
              <Card.Body>Login card</Card.Body>
            </Card>
          </Col>
        </Row>
      </Wrapper>
    </div>
  );
};

export default connect(null, { requestLogin })(Login);
