import React from "react";

import styled from "styled-components";

const Th = styled.th`
  color: #a7a7a7;
  letter-spacing: 0px;
  font-weight: regular;
`;
const Td = styled.td`
  letter-spacing: 0px;
  color: #585858;
  font-weight: bold;
`;

const Offer = ({ next }) => {
  return (
    <div style={{ overflow: "hidden" }} className="text-left mt-3">
      <h4 style={{ color: "#00204F", fontWeight: "bold", fontSize: "20px" }}>
        Rent payment offer
      </h4>
      <div className="line" style={{ width: "90%" }}></div>

      <div style={{ paddingLeft: 40, paddingRight: 40 }} className="mb-3 mt-3">
        <p style={{ color: "#51A4FB", fontSize: "21px" }}>
          Below is your rent offer
        </p>

        {/* <Row>
           <Col md='6'><p lstyle={{lineHeight: '1rem'}}>Rent request amount</p><p>N1,000,000</p></Col>
           <Col md='6'>skkss</Col>
            </Row> */}
        <table width="600">
          <tr>
            <Th>Rent request amount</Th>
            <Th>Approved amount</Th>
          </tr>

          <tr>
            <Td>N1,000,000</Td>
            <Td>N1,000,000</Td>
          </tr>
          <tr>
            <Th>Monthly payment</Th>
            <Th>Duration</Th>
          </tr>

          <tr>
            <Td>N83,333</Td>
            <Td>12 Months</Td>
          </tr>
          <tr>
            <Th>Deposit</Th>
          </tr>
          <tr>
            <Td>N1,000,000</Td>
          </tr>
        </table>
      </div>

      <div className="line" style={{ width: "90%" }}></div>
      <div
        className="text-center d-flex mt-4"
        style={{ justifyContent: "center" }}
      >
        <button type="button" className="btn-norm mr-3">
          Reject Offer
        </button>

        <button onClick={() => next()} type="button" className="btn-pry">
          Accept Offer
        </button>
      </div>
    </div>
  );
};

export default Offer;
