import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Progress } from "antd";
import { getApplication } from "../../actions/application";
import UserTopNav from "../UserTopNav";
import "./Dashboard.scss";
const Dashboard = ({ appl, history }) => {
  useEffect(() => {
    if (!appl.isComplete) {
      history.push("/apply");
    } else if (!appl.isProcessed) {
      history.push("/application-process");
    }
  }, []);

  return (
    <div style={{ backgroundColor: "#F8F8F8", minHeight: "100vh" }}>
      <UserTopNav />

      <Container className="dashboard">
        <Row>
          <Col md="5">
            <Card
              className="bg-img"
              style={{
                width: "100%",
                margin: "auto",
                height: "27vh",
                boxShadow: "0px 3px 20px #5B55FF26",
                border: "none",
                backgroundColor: "#5b54ff",
                // opacity: "0.07",
              }}
            >
              <div className="card-body">
                <Row className="justify-content-md-center ">
                  <Col className="offset-md-1" md="5" sm="4">
                    <div className="text-center text-white mt-3">
                      <small
                        style={{ color: "#C2BFFF" }}
                        className="text-center"
                      >
                        Next payment amount
                      </small>
                      <h5 className="text-center text-white">
                        <strong>N83,333</strong>
                      </h5>
                    </div>
                  </Col>
                  <Col md="">
                    <div
                      className="bg-white hide"
                      style={{
                        height: "5rem",
                        width: "1px",
                        marginLeft: "-10px",
                      }}
                    />
                  </Col>
                  <Col md="6" sm="3">
                    <div className="mt-md-3">
                      <small
                        style={{ color: "#C2BFFF" }}
                        className="text-center "
                      >
                        Next payment due date
                      </small>
                      <h5 className="text-center text-white">
                        <strong>4, May 2020</strong>
                      </h5>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card>

            <Card
              style={{
                width: "81%",
                margin: "auto",
                position: "relative",
                top: "-3rem",
                boxShadow: "0px 3px 20px #5B55FF26",
                border: "1px solid #C9C7FF",
              }}
            >
              <div className="card-body">
                <Row className="justify-content-md-center">
                  <Col className="" md="6">
                    <div className="" style={{ lineHeight: "50%" }}>
                      <div className="text-blue">
                        <h6>
                          <strong>21 days</strong>
                        </h6>
                      </div>
                      <small className="text-muted">Next Loan payment</small>
                    </div>
                  </Col>

                  <Col md="6">
                    <div style={{ lineHeight: "50%" }}>
                      <h6
                        className="pb-0 text-blue"
                        stlye={{ fontWeight: "3rem", fontSize: "10rem" }}
                      >
                        <strong>N750,001</strong>
                      </h6>
                      <small
                        style={{ fontSize: "10px" }}
                        className="text-muted"
                      >
                        Remaining payment balance
                      </small>
                    </div>
                  </Col>
                </Row>
                <div className="mb-1  mt-4 pb-1 text-blue">
                  <strong>15%</strong>
                  <span className="text-muted ml-1">
                    <small>Percent complete</small>
                  </span>
                  <Progress percent={15} />
                </div>
              </div>
            </Card>
          </Col>
          <Col md="6">
            <Card
              style={{
                width: "100%",
                margin: "auto",
                height: "80vh",
                boxShadow: "0px 3px 20px #5B55FF26",
                border: "none",
              }}
            >
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    color: "#00204F",
                    fontSize: "30px/36px",
                    fontWeight: "Bold ",
                  }}
                >
                  Payment History
                </h5>
                <hr />
                <Card
                  style={{
                    height: "69px",
                    boxShadow: " 0px 3px 15px #0000001A",
                    borderRadius: "10px",
                    border: "none",
                  }}
                  className="mb-3"
                >
                  <Card.Body>
                    {/* <Row> */}
                    {/* <Col md="4"> */}
                    <div className="d-flex bd-highlight">
                      <div
                        // style={{ lineHeight: "83%" }}
                        className="bd-highlight"
                      >
                        <p className="text-blue" stlye={{ fontSize: "12px" }}>
                          April Payment <br />{" "}
                          <span>
                            <small className="text-muted">3 - 03 -2020</small>
                          </span>
                        </p>
                      </div>
                      {/* </Col> */}
                      {/* <Col md="2"> */}
                      <div className="tag tag-fail  bd-highlight ml-5">
                        <p className="text-blue">failed</p>
                      </div>
                      {/* </Col> */}
                      {/* <Col md="2"> */}
                      <div className="ml-auto  bd-highlight">
                        <p
                          style={{ fontSize: "12px" }}
                          className="text-blue align-self-md-end"
                        >
                          <strong>N83,333</strong>
                        </p>
                      </div>
                    </div>
                    {/* </Col> */}
                    {/* </Row> */}
                  </Card.Body>
                </Card>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  appl: state.application,
});

export default connect(mapStateToProps, { getApplication })(Dashboard);
