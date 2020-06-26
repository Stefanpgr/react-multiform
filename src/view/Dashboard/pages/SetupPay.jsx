import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  usePaystackPayment,
  PaystackButton,
  PaystackConsumer,
} from "react-paystack";

const Btn = styled.button`
  width: 146px;
  height: 44px;
  background: #51a4fb 0% 0% no-repeat padding-box;
  border: none;
  color: white;
  border-radius: 5px;
  margin-top: 4px;
  opacity: 1;
`;

const SetupPay = ({ next, history }) => {
  const { user } = useSelector((state) => ({
    user: state.user,
  }));

  const config = {
    reference: new Date().getTime(),
    email: user.email,
    amount: 50000,
    publicKey: "pk_test_d9b7834d230d82d7684583c472b8491dd50edc5f",
  };

  const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <div>
        <button
          onClick={() => {
            initializePayment();
          }}
        >
          Paystack Hooks Implementation
        </button>
      </div>
    );
  };
  function test() {
    return history.push("/dashboard");
  }
  const componentProps = {
    ...config,
    text: "Paystack Button Implementation",
    onSuccess: () => test(),
    onClose: () => <Redirect to="/dashboard" />,
  };
  return (
    <div className="text-center mt-4">
      <h6 style={{ color: "#51A4FB", fontWeight: "bold", fontSize: "25px" }}>
        Set-up your payment plan
      </h6>
      <h6 style={{ color: "#00204F", fontSize: "13px" }}>
        <strong>
          You will be charged only {"(1.5% of principal)"} for your{" "}
        </strong>
      </h6>
      <h6 style={{ color: "#00204F", fontSize: "13px" }}>
        <strong>credit life insurance cover.</strong>
      </h6>

      <Col md="12">
        <img
          src={require("../../../assets/img/dashboard/setup-pay.svg")}
          width="280"
          className="mt-2 mb-4"
        />
      </Col>
      <Col md="12">
        {/* <Btn onClick={()=>next()}>Set-up payment</Btn> */}
        {/* <PaystackHookExample />
        <PaystackButton {...componentProps} /> */}
        <PaystackConsumer {...componentProps}>
          {({ initializePayment }) => (
            <Btn onClick={() => initializePayment()}>Set-up payment</Btn>
          )}
        </PaystackConsumer>
      </Col>
    </div>
  );
};

export default SetupPay;
