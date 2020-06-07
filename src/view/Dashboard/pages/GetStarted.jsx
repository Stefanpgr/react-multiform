import React from "react";
import { Button, Container } from "react-bootstrap";
import TopNav from "../../TopNav";
import { Link } from "react-router-dom";
import "./Pages.scss";
const GetStarted = () => {
  return (
    <div className="get-started">
      <TopNav />
      <Container className="text-center get-started">
        <img
          src="https://res.cloudinary.com/kwaba/image/upload/v1591446192/Group_1743_ftfwbd.svg"
          alt="get started"
          className="img-res"
          //   srcset="https://res.cloudinary.com/kwaba/image/upload/v1591446192/Group_1743_ftfwbd.svg 480w,
          //     https://res.cloudinary.com/kwaba/image/upload/v1591446192/Group_1743_ftfwbd.svg"
          //   sizes="(max-width: 600px) 480px,
          //       800px"
          width="680"
        />
        <div
          style={{ width: "500px", margin: "auto" }}
          className="text-center text-cont"
        >
          {" "}
          <h3
            style={{ color: "#00204F", fontWeight: "bold", fontSize: "1.5rem" }}
            className="text-res"
          >
            Pay your rent monthly with Kwaba and enjoy flexible rent payments.
          </h3>
          <h3
            style={{ color: "#585858", fontSize: "1.5rem" }}
            className="text-res"
          >
            No more need to pay rent in bulk
          </h3>
        </div>

        <Link to="/apply">
          <Button style={{ width: "30%" }} className="btn-res">
            Get Started
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default GetStarted;
