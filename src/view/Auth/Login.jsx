import React from "react";

import "./Auth.scss";
import { Col, Row, Container, Card } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";

import TopNav from "../TopNav";
import { Form, Input, Button, Spin, Alert } from "antd";
import { requestLogin } from "../../actions/auth";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  background: #eff7ff 0% 0% no-repeat padding-box;
  overflow: hidden;
`;
// const layout = {
//   labelCol: { span: 12 },
//   wrapperCol: { span: 16 },
// };
const Login = ({ requestLogin, history, application, user }) => {
const dispatch = useDispatch()
  const onFinish = (values) => {
    dispatch({
      type: 'LOADING_USER'
    })
    requestLogin(values, history, application);
    console.log("Received values of form: ", values);
  };

  return (
    <div className="login ">
      <Wrapper className="bg-img">
        <TopNav />
        <Container>
          <Row>
            <Col md="7">
              <div>
                <div className=" login-text mt-5">
                  <h2
                    style={{ font: "Bold 34px/42px Rubik", color: "#00204F" }}
                  >
                    Welcome back,{" "}
                  </h2>
                  <h3
                    style={{
                      font: "Regular 30px/41px Rubik",
                      color: "#00204F",
                    }}
                  >
                    Login to continue
                  </h3>
                </div>
              </div>
            </Col>
            <Col md="5">
              <Card className="mt-5">
                <Card.Body>
                {user.error ? (<Alert type="error" message={user.errorMsg} banner  closable/>) : ''}
                  <Form
                    name="normal_login"
                    // {...layout}
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    layout="vertical"
                  >
                    <Form.Item
                      name="email"
                      rules={[
                        { required: true, message: "Please input email!" },
                        { type: "email", message: "Not a valid mail" },
                      ]}
                      label="Email Address"
                    >
                      <Input
                        placeholder="Enter email address"
                        style={{ width: "100%" }}
                      />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Password!",
                        },
                      ]}
                      label="Password"
                    >
                      <Input
                        type="password"
                        placeholder="Enter password"
                        style={{ width: "100%" }}
                      />
                    </Form.Item>
                    <Form.Item>
                      <a className="login-form-forgot" href="">
                        Forgot password
                      </a>
                      <span className="float-right">
                        New? <a href="/signup">Signup</a>
                      </span>
                    </Form.Item>

                    <Form.Item>
                      <Spin spinning={!user.loading ? false : true}>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        style={{ width: "100%", height: "2.5rem" }}
                        // disabled={!user.loading ? false : true}
                      >
                        Log in
                      </Button>
                      </Spin>
                    </Form.Item>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </div>
  );
};

const mapStateToProps = (state) => ({
  application: state.application,
  user: state.user
});

export default connect(mapStateToProps, { requestLogin })(Login);
