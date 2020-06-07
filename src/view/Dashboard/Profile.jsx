import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Layout, Timeline } from "antd";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import UserTopNav from "../UserTopNav";
import "./Dashboard.scss";
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

const LoanStatus = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 15px #0000006e;
  border-radius: 27px;
  color: #00204f;
  width: 140px;
  height: 27px;
  font-size: 12px;
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

const Profile = ({ history }) => {
  const { user, appl } = useSelector((state) => ({
    user: state.user,
    appl: state.application,
  }));

  React.useEffect(() => {
    if (!appl.isComplete) {
      history.push("/apply");
    }
  }, []);

  return (
    <div style={{ backgroundColor: "#F8F8F8", minHeight: "100vh" }}>
      <UserTopNav />
      <div style={{ width: "97%", margin: "auto" }} className="profile">
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
                  height: "170px",
                  border: "none",
                }}
                className="mb-4 bg-img"
              >
                <Card.Body>
                  {" "}
                  <Row>
                    <Col md="2">
                      <div>
                        <img
                          src="https://res.cloudinary.com/kwaba/image/upload/v1589548933/Group_1819_usqxwo.png"
                          alt="profile image"
                          style={{ width: "125px", height: "125px" }}
                        />
                        <div
                          style={{
                            width: "22px",
                            height: "21px",
                            backgroundColor: "#ffff",
                            borderRadius: "50%",

                            position: "relative",
                            top: "-2rem",
                            left: "4.5rem",
                          }}
                          className="text-center"
                        >
                          <img
                            style={{ width: "11px", height: "11px" }}
                            src="https://res.cloudinary.com/kwaba/image/upload/v1589549432/Icon_feather-image_uxxoye.svg"
                          />
                        </div>
                      </div>
                    </Col>
                    <Col md="4">
                      <div className=" mt-5 text-white">
                        <h6
                          className="text-white"
                          style={{ fontSize: "27px", fontWeight: "medium" }}
                        >
                          {`${user.firstname} ${user.lastname}`}{" "}
                          <small style={{ fontSize: "13px" }}>
                            <br />
                            <span className="pr-2">
                              <FontAwesomeIcon
                                style={{ color: "#51A4FB", fontSize: "12px" }}
                                icon={["fas", "envelope"]}
                              />
                            </span>{" "}
                            {user.email}
                          </small>
                        </h6>
                        {/* <small className="mt--9">
                         
                          {user.email}
                        </small> */}
                      </div>
                    </Col>
                    <Col md="2">
                      <div
                        className="text-white"
                        style={{
                          marginTop: "3.6rem",
                        }}
                      >
                        <small>
                          <span className="pr-2">
                            <FontAwesomeIcon
                              style={{ color: "#51A4FB", fontSize: "11px" }}
                              icon={["fas", "phone-alt"]}
                            />
                          </span>
                          {user.phone}
                        </small>
                      </div>
                    </Col>
                    <Col md="4">
                      <LoanStatus
                        className="text-center"
                        style={{
                          marginTop: "3.6rem",
                        }}
                      >
                        <p className="pt-1">
                          <span className="pr-1">
                            <FontAwesomeIcon
                              style={{ color: "green", fontSize: "12px" }}
                              icon={["far", "check-circle"]}
                            />
                          </span>
                          Loan approved
                        </p>
                      </LoanStatus>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

              <Row>
                <Col md="6">
                  <Card className="profile-cards mb-4">
                    <Card.Body>
                      <Row>
                        <Col className="text-muted ml-md-2">
                          <small>Date of Birth</small>{" "}
                          <p className="text-blue">{appl.finance_info.dob}</p>
                        </Col>

                        <Col md="4" className=" text-muted">
                          <small>Gender</small>{" "}
                          <p className="text-blue">{user.gender}</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="text-muted ml-md-2" md="12">
                          <small>Marital status</small>{" "}
                          <p className="text-blue">{user.marital_status}</p>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="profile-cards mb-4">
                    <Card.Body>
                      <Row>
                        <Col className="text-muted ml-md-2" md="12">
                          <small>Current Address</small>{" "}
                          <p className="text-blue">
                            {appl.rent_info.home_address}
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="text-muted ml-md-2">
                          <small>Duration of this property</small>{" "}
                          <p className="text-blue">
                            {appl.rent_info.duration} Years
                          </p>
                        </Col>

                        <Col md="4" className=" text-muted">
                          <small>Last Rent amount</small>{" "}
                          <p className="text-blue">
                            N{appl.rent_info.last_rent_amount}
                          </p>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              <Card className="profile-cards profile-cards-large mb-sm-4">
                <Card.Body>
                  <Card.Title>Employement info</Card.Title>
                  <hr />
                  <Row>
                    <Col md="4">
                      <small className="text-muted">Job Title</small>
                      <p className="text-blue">{appl.employment.job_role}</p>
                    </Col>
                    <Col md="4">
                      {" "}
                      <small className="text-muted">Salary</small>
                      <p className="text-blue">N{appl.employment.salary}</p>
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
                      <p className="text-blue">
                        {appl.employment.company_name}
                      </p>
                    </Col>
                    <Col md="4">
                      <small className="text-muted">Phone number</small>
                      <p className="text-blue">
                        {appl.employment.employer_phone}
                      </p>
                    </Col>
                    <Col md="4">
                      <small className="text-muted">Email address</small>
                      <p className="text-blue">
                        {appl.employment.employer_email}
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            <Col md="4" className=" mb-4  ">
              <Card
                className="mb-4"
                className="profile-cards-right"
                style={{ backgroundColor: "#00204F", height: "170px" }}
              >
                <Card.Body>
                  {/* <ProfilePicWrap> */}
                  <Container>
                    <p
                      className="text-center  mb-1"
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
                    <div className="text-center text-white" style={{}}>
                      {/* <FontAwesomeIcon
                        className="text-white"
                        icon={["fas", "minus"]}
                      /> */}
                      <h4 className="line-height-5 text-white  mt-3">
                        <strong>920</strong>
                      </h4>
                      <p>
                        <strong>1000</strong>
                      </p>
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

export default Profile;
