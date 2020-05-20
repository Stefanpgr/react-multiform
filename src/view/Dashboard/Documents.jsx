import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Row, Col, Card, Container } from "react-bootstrap";

const Documents = () => {
  return (
    <div style={{ backgroundColor: "#F8F8F8", minHeight: "100vh" }}>
      <h1>TEST</h1>
      <div style={{ width: "97%", margin: "auto" }}>
        <Container fluid>
          <Row>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Body>
                  <Card.Title className="text-blue">
                    <strong>All Documents</strong>
                  </Card.Title>
                  <hr />
                  <Card
                    style={{
                      minHeight: "59px",
                      boxShadow: " 0px 3px 15px #0000001A",
                      borderRadius: "10px",
                      border: "none",
                    }}
                    className="mb-3"
                  >
                    <Card.Body>
                      <Row>
                        <Col md="1">
                          <FontAwesomeIcon
                            style={{ color: "#51A4FB", fontSize: "25px" }}
                            icon={["far", "file-alt"]}
                          />
                        </Col>
                        <Col md="7">
                          <div
                            className="line-height-sm"
                            style={{ lineHeight: "40%" }}
                          >
                            <span></span>
                            <p stlye={{ fontSize: "12px" }}>
                              Employment letter.pdf
                            </p>
                            <small className="text-muted">
                              Uploaded: 3 - 03 -2020
                            </small>
                          </div>
                        </Col>

                        <Col md="2">
                          <small style={{ fontSize: "10px" }}>Delete</small>
                        </Col>
                        <Col md="2">
                          <small style={{ fontSize: "10px" }}>Download</small>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Card.Body>
              </Card>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Documents;
