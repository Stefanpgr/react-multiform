import React from "react";
import { Card, Container } from "react-bootstrap";
import UploadDoc from "./UploadDoc";
import UserTopNav from "../UserTopNav";

const Documents = () => {
  const docs = [
    { title: "Employment letter", action: "EMPLOYMENT_LETTER" },
    { title: "Bank Statement", action: "BANK_STATEMENT" },
  ];
  return (
    <div style={{ backgroundColor: "#F8F8F8", minHeight: "100vh" }}>
      <UserTopNav />

      <div style={{ minWidth: "50%", margin: "auto", left: "50%" }}>
        <Container>
          <Card style={{ border: "none" }}>
            <Card.Body>
              <Card.Title className="text-blue">
                <strong>All Documents</strong>
              </Card.Title>
              <hr />
              {docs.map((el, index) => (
                <div key={index}>
                  {" "}
                  <UploadDoc title={el.title} action={el.action} />
                </div>
              ))}
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default Documents;
