import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Radio, Select, Form, Input, DatePicker, Layout } from "antd";
import styled from "styled-components";
const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const SubHead = styled.p`
  text-align: left;
  font: Bold 25px/27px Rubik;
  letter-spacing: 0px;
  color: #00204f;
`;

const ProfilePicWrap = styled.div`
  width: 255px;
  overflow: hidden;

  height: 223px;
  background: #ffffff;
  border-radius: 10px;
  opacity: 1;
`;

const KcsWrap = styled.div`
  width: 255px;
  overflow: hidden;

  height: 120px;
  background: #5b55ff;
  border-radius: 10px;
  opacity: 1;
`;

const ProfilePic = styled.div`
  width: 134px;
  position: relative;
  height: 134px;
  background: #f0f7ff;
  box-shadow: 0px 3px 15px #00000029;
  border: 5px solid #ffffff;
  border-radius: 50%;
  opacity: 1;
`;

const EditProfile = () => {
  const [form] = Form.useForm();
  // const dispatch = useDispatch();
  const validateMessages = {
    required: "This field is required!",
    types: {
      email: "Not a validate email!",
      number: "Not a validate number!",
    },
    number: {
      range: "Must be between ${min} and ${max}",
    },
  };
  const onFinish = (fielValues) => {
    console.log("Received values of form: ", fielValues);
  };
  return (
    <div style={{ backgroundColor: "#F8F8F8", minHeight: "100vh" }}>
      <h1>TEST</h1>
      <div style={{ width: "97%", margin: "auto" }}>
        <Container fluid>
          <Row>
            {/* <div class="w-100 d-none d-md-block"></div> */}
            <Col md="4" className="order-md-2 mb-4 m-view-center">
              <div className="mb-4">
                <ProfilePicWrap>
                  <Container>
                    <ProfilePic className="ml-5 mt-4" />
                    <p className="text-center mt-4">Change profile picture</p>
                  </Container>
                </ProfilePicWrap>
              </div>
              <KcsWrap>
                <Container>
                  <div className="ml-3 mt-3 text-white">
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: "25px",
                        margin: 0,
                      }}
                    >
                      KCS Score
                    </p>
                    <p
                      className="mt--9"
                      style={{ fontWeight: "bold", fontSize: "30px" }}
                    >
                      85%
                    </p>
                  </div>
                </Container>
              </KcsWrap>
            </Col>
            <Col md="8" className="order-md-1">
              <div
                className="bg-white"
                style={{ overflow: "hidden", borderRadius: "10px" }}
              >
                <Container className=" profile-form-wrap mt-5">
                  <SubHead>Personal info</SubHead>
                  <div>
                    <Form
                      form={form}
                      {...layout}
                      name="nest-messages"
                      onFinish={onFinish}
                      validateMessages={validateMessages}
                      layout="vertical"
                    >
                      {/* <Form.Item
					name={[ 'acct_stat' ]}
					label="What’s your accommodation status?"
					rules={[ { required: true } ]}
				>
					<Radio.Group
						onChange={(e) => {
							setAcc(e.target.value);
						}}
						name="radiogroup"
					>
						<StyledRadio type="button" className="mr-3 fg" switch="Looking to renew my rent" stat={accStat}>
							<Radio className="fg" value="Looking to renew my rent">
								Looking to renew my rent
							</Radio>
						</StyledRadio>

						<StyledRadio type="button" className="mr-3" switch="Want to pay for a new place" stat={accStat}>
							<Radio value="Want to pay for a new place">Want to pay for a new place</Radio>
						</StyledRadio>

						<StyledRadio type="button" switch="I'm still searching" stat={accStat}>
							<Radio value="I'm still searching">I'm still searching</Radio>
						</StyledRadio>
					</Radio.Group>
				</Form.Item> */}

                      <Form.Item
                        name={["first_name"]}
                        label="First Name"
                        rules={[{ required: true }]}
                        style={{
                          display: "inline-block",
                        }}
                        className="w-mobile"
                      >
                        <Input style={{ width: "117%" }} placeholder="" />
                      </Form.Item>
                      <Form.Item
                        name={["last_name"]}
                        label="Last Name"
                        rules={[{ required: true }]}
                        style={{
                          display: "inline-block",
                        }}
                        className="ml-md-5 w-mobile ml-sm"
                      >
                        <Input style={{ width: "117%" }} placeholder="" />
                      </Form.Item>
                      <Form.Item
                        name={["address"]}
                        label="Current Address"
                        rules={[{ required: true }]}
                        className="w-mobile"
                      >
                        <Input style={{ width: "57%" }} placeholder="" />
                      </Form.Item>
                      <Form.Item
                        name={["rent_collector_bankname"]}
                        label="Duration at this property"
                        rules={[{ required: true }]}
                        style={{
                          display: "inline-block",
                        }}
                        className="w-mobile"
                      >
                        <Select style={{ width: "120%" }}>
                          <Select.Option value="3">3 Years</Select.Option>
                        </Select>
                      </Form.Item>
                      <Form.Item
                        name={["rent_collector_bankname"]}
                        label="Date of Birth"
                        rules={[{ required: true }]}
                        style={{
                          display: "inline-block",
                        }}
                        className="ml-md-5 ml-sm w-mobile-date"
                      >
                        <DatePicker style={{ width: "130%", height: "39px" }} />
                      </Form.Item>
                      <br />
                      <Form.Item
                        name={["marital_status"]}
                        label="Marital status &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"
                        rules={[{ required: true }]}
                        style={{
                          display: "inline-block",
                        }}
                        className="w-mobile"
                      >
                        <Select style={{ width: "120%" }}>
                          <Select.Option value="single">Single</Select.Option>
                          <Select.Option value="married">married</Select.Option>
                        </Select>
                      </Form.Item>
                      <Form.Item
                        name={["last_name"]}
                        label="Last rent amount"
                        rules={[{ required: true }]}
                        style={{
                          display: "inline-block",
                        }}
                        className="ml-md-5 w-mobile ml-sm"
                      >
                        <Input style={{ width: "117%" }} placeholder="" />
                      </Form.Item>
                      <br />
                      <br />
                      <SubHead>Employment info</SubHead>
                      <Form.Item
                        name={["employer_name"]}
                        label="Employer Name"
                        rules={[{ required: true }]}
                        style={{
                          display: "inline-block",
                        }}
                        className="w-mobile"
                      >
                        <Input style={{ width: "117%" }} placeholder="" />
                      </Form.Item>
                      <Form.Item
                        name={["phone"]}
                        label="Phone number"
                        rules={[{ required: true }]}
                        style={{
                          display: "inline-block",
                        }}
                        className="ml-md-5 w-mobile ml-sm"
                      >
                        <Input style={{ width: "117%" }} placeholder="" />
                      </Form.Item>
                      <br />
                      <Form.Item
                        name={["email"]}
                        label="Email address"
                        rules={[{ required: true, type: "email" }]}
                        style={{
                          display: "inline-block",
                        }}
                        className="w-mobile"
                      >
                        <Input style={{ width: "117%" }} placeholder="" />
                      </Form.Item>
                      <Form.Item
                        name={["job_title"]}
                        label="Job title"
                        rules={[{ required: true }]}
                        style={{
                          display: "inline-block",
                        }}
                        className="ml-md-5 w-mobile ml-sm"
                      >
                        <Input style={{ width: "117%" }} placeholder="" />
                      </Form.Item>
                      <br />
                      <Form.Item
                        name={["salary"]}
                        label="Salary"
                        rules={[{ required: true }]}
                        style={{
                          display: "inline-block",
                        }}
                        className="w-mobile"
                      >
                        <Input style={{ width: "117%" }} placeholder="" />
                      </Form.Item>
                      <Form.Item
                        name={["last_name"]}
                        label="Duration of employment"
                        rules={[{ required: true }]}
                        style={{
                          display: "inline-block",
                        }}
                        className="ml-md-5 w-mobile ml-sm"
                      >
                        <Input style={{ width: "117%" }} placeholder="" />
                      </Form.Item>
                    </Form>
                  </div>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Layout.Footer
        className="text-center"
        style={{ backgroundColor: "#F8F8F8" }}
      >
        Copyright ©{new Date().getFullYear()} Kwaba
      </Layout.Footer>
    </div>
  );
};

export default EditProfile;
