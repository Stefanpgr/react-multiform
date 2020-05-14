import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Progress } from "antd";
const Dashboard = () => {
  return (
    <div style={{ backgroundColor: "#F8F8F8", minHeight: "100vh" }}>
      <h1>TEST</h1>
      <Container>
        <Row>
          <Col md="5">
            <Card
              className="bg-primary"
              style={{
                width: "100%",
                margin: "auto",
                height: "27vh",
                boxShadow: "0px 3px 20px #5B55FF26",
                border: "1px solid #C9C7FF",
                // opacity: "0.07",
              }}
            >
              <div className="card-body">
                <Row className="justify-content-md-center">
                  <Col className="offset-md-1" md="5">
                    <div className="text-center text-white">
                      <small className="text-center text-muted">
                        Next payment amount
                      </small>
                      <h5 className="text-center text-white">N83,333</h5>
                    </div>
                  </Col>
                  <Col md="">
                    <div
                      className="bg-white"
                      style={{
                        height: "5rem",
                        width: "1px",
                        marginLeft: "-15px",
                      }}
                    ></div>
                  </Col>
                  <Col md="5">
                    <div>
                      <small className="text-center text-muted">
                        Next payment due date
                      </small>
                      <h5 className="text-center text-white">4, May 2020</h5>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card>

            <Card
              style={{
                width: "75%",
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
                    <div className="">
                      <div className="">21 days</div>
                      <small className="text-muted">Next payment amount</small>
                    </div>
                  </Col>

                  <Col md="6">
                    <div>
                      <h6
                        className="pb-0"
                        stlye={{ fontWeight: "3rem", fontSize: "10rem" }}
                      >
                        N750,001
                      </h6>
                      <small className="text-muted">
                        Next payment due date
                      </small>
                    </div>
                  </Col>
                </Row>
                <p className="mb-1  mt-4 pb-1">
                  15%{" "}
                  <span className="text-muted">
                    <small>Percent complete</small>
                  </span>
                  <Progress percent={15} />
                </p>
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
                    height: "47px",
                    boxShadow: " 0px 3px 15px #0000001A",
                    borderRadius: "10px",
                    border: "none",
                  }}
                  className="mb-3"
                ></Card>
                <Card
                  style={{
                    height: "47px",
                    boxShadow: " 0px 3px 15px #0000001A",
                    borderRadius: "10px",
                    border: "none",
                  }}
                ></Card>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
