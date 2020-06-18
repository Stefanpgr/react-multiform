import React from "react";
import { Container } from "react-bootstrap";

const ProcessAppl = ({ next }) => {
  return (
    <div className="row">
      <div className="text-center col  mt-2 pt-5">
        <h6 style={{ color: "#51A4FB", fontWeight: "bold", fontSize: "25px" }}>
          Processing application
        </h6>
        {/* <div style={{ width: "170px" }}> */}
        <h6 style={{ color: "#00204F", fontSize: "12px" }}>
          <strong>Your application is currently being processed.</strong>
        </h6>
        <h6
          style={{
            color: "#00204F",
            fontSize: "12px",
            width: "300px",
            margin: "auto",
          }}
        >
          We will get back to you shortly. Check back here or look out for an
          email from us in your inbox or spam.
        </h6>
        {/* </div> */}

        {/* <h6 style={{ color: "#00204F", fontSize: "12px" }}>
          {" "}
          We will get back to you shortly. Check back here or look out for an
          email from us in your inbox or spam.
        </h6> */}
        <img
          src={require("../../../assets/img/dashboard/app-process.svg")}
          width="180"
          className="mt-4"
        />

        {/* <button onClick={() => next()}>next</button> */}
      </div>
    </div>
  );
};

export default ProcessAppl;
