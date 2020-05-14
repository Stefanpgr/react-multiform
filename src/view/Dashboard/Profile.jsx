import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Layout, Timeline } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  return (
    <div style={{ backgroundColor: "#F8F8F8", minHeight: "100vh" }}>
      <h1>TEST</h1>
      <div style={{ width: "97%", margin: "auto" }}>
        <Container fluid>
          <Row>
            <Col md="4">
              <div>
                <SubHead>Personal info</SubHead>
              </div>
            </Col>
            <Col md="4" className="offset-md-3">
              <p>
                <span className="mr-1">
                  <FontAwesomeIcon
                    style={{ color: "#585858", fontSize: "12px" }}
                    icon={["fas", "edit"]}
                  />
                </span>
                Edit Profile
              </p>
            </Col>
          </Row>

          <Row>
            {/* <div class="w-100 d-none d-md-block"></div> */}
            <Col md="8" className="">
              <Card
                style={{
                  backgroundColor: "#5b54ff",
                  height: "140px",
                  border: "none",
                  opacity: "0.07",
                }}
                className="mb-4"
              >
                <Row>
                  <Col></Col>
                  <Col></Col>
                </Row>
              </Card>

              <Row className="mb-4">
                <Col md="6">
                  <Card className="profile-cards">
                    <Card.Body>
                      <Row>
                        <Col className="text-muted ml-md-2">
                          <small>Date of Birth</small>{" "}
                          <p className="text-blue">January 7, 1990</p>
                        </Col>

                        <Col md="4" className=" text-muted">
                          <small>Gender</small>{" "}
                          <p className="text-blue">Male</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="text-muted ml-md-2" md="12">
                          <small>Marital status</small>{" "}
                          <p className="text-blue">Single</p>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="profile-cards">
                    <Card.Body>
                      <Row>
                        <Col className="text-muted ml-md-2" md="12">
                          <small>Current Address</small>{" "}
                          <p className="text-blue">
                            No 23B Bright View Estate, Surulere, Lagos
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="text-muted ml-md-2">
                          <small>Duration of this property</small>{" "}
                          <p className="text-blue">3 Years</p>
                        </Col>

                        <Col md="4" className=" text-muted">
                          <small>Last Rent amount</small>{" "}
                          <p className="text-blue">N700,000</p>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              <Card className="profile-cards profile-cards-large">
                <Card.Body>
                  <Card.Title>Employement info</Card.Title>
                  <hr />
                  <Row>
                    <Col md="4">
                      <small className="text-muted">Job Title</small>
                      <p className="text-blue">Quality Assurance</p>
                    </Col>
                    <Col md="4">
                      {" "}
                      <small className="text-muted">Salary</small>
                      <p className="text-blue">N500,000</p>
                    </Col>
                    <Col md="4">
                      {" "}
                      <small className="text-muted">
                        Duration of employement
                      </small>
                      <p className="text-blue">2 Years</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4">
                      <small className="text-muted">Employer name</small>
                      <p className="text-blue">Lamigata Industrial LTD</p>
                    </Col>
                    <Col md="4">
                      <small className="text-muted">Phone number</small>
                      <p className="text-blue">0123345657</p>
                    </Col>
                    <Col md="4">
                      <small className="text-muted">Email address</small>
                      <p className="text-blue">info@lamigatacom</p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              <FontAwesomeIcon icon={["fas", "envelope"]} />
            </Col>

            <Col md="4" className=" mb-4  ">
              <Card
                className="mb-4"
                className="profile-cards-right"
                style={{ backgroundColor: "#00204F", height: "140px" }}
              >
                <Card.Body>
                  {/* <ProfilePicWrap> */}
                  <Container>
                    <p
                      className="text-center mt-1 mb-1"
                      style={{
                        color: "#51A4FB",
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      Kwaba Credit Score
                    </p>
                    <div className="text-center mb-2 mt--9">
                      <img
                        src="https://res.cloudinary.com/kwaba/image/upload/v1589465498/favourites_zxcteh.svg"
                        alt="credit score"
                        width="14"
                        className="mr-1"
                      />
                      <img
                        src="https://res.cloudinary.com/kwaba/image/upload/v1589465498/favourites_zxcteh.svg"
                        alt="credit score"
                        width="20"
                        className="mr-2"
                      />
                      <img
                        src="https://res.cloudinary.com/kwaba/image/upload/v1589465498/favourites_zxcteh.svg"
                        alt="credit score"
                        width="30"
                        className="mr-1"
                      />
                      <img
                        src="https://res.cloudinary.com/kwaba/image/upload/v1589465498/favourites_zxcteh.svg"
                        alt="credit score"
                        width="20"
                        className="mr-1"
                      />
                      <img
                        src="https://res.cloudinary.com/kwaba/image/upload/v1589465498/favourites_zxcteh.svg"
                        alt="credit score"
                        width="14"
                        className="mr-1"
                      />
                    </div>
                    <div className="text-center" style={{}}>
                      <FontAwesomeIcon
                        className="text-white"
                        icon={["fas", "minus"]}
                      />
                    </div>
                  </Container>
                  {/* </ProfilePicWrap> */}
                </Card.Body>
              </Card>

              <Card className="profile-cards-right mt-4">
                <Card.Body>
                  <Card.Title className="text-blue">Activities</Card.Title>
                  <hr />
                  <Container>
                    <Timeline className="text-blue">
                      <Timeline.Item color="#FF6C6C">
                        Loan not approved <br />
                        <small className="text-muted">
                          3 - 03 -2020 at 9:30 am
                        </small>
                      </Timeline.Item>
                      <Timeline.Item>
                        Processing Application <br />
                        <small className="text-muted">
                          3 - 03 -2020 at 9:30 am
                        </small>
                      </Timeline.Item>
                      <Timeline.Item color="#21AD26">
                        Application Complete
                        <br />
                        <small className="text-muted">
                          3 - 03 -2020 at 9:30 am
                        </small>
                      </Timeline.Item>
                      <Timeline.Item>
                        Application Started
                        <br />
                        <small className="text-muted">
                          3 - 03 -2020 at 9:30 am
                        </small>
                      </Timeline.Item>
                    </Timeline>
                  </Container>
                </Card.Body>
              </Card>
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
