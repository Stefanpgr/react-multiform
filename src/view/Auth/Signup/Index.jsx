import React, { useState } from "react";
import "../Auth.scss";
import TopNav from "../../TopNav";
import SignupForm from "./SignupForm";
import { connect } from "react-redux";
import SignupSuccess from "../../Dashboard/pages/SignupSuccess";
import { requestSignup } from "../../../actions/auth";

const Signup = ({ requestSignup, history }) => {
  const [finish, setFinish] = useState(false);

  const onFinish = (values) => {
    // setFinish(true);
    requestSignup(values, history);
    console.log("Received values of form: ", values);
  };

  return (
    <div className="auth">
      <TopNav />

      <SignupForm finish={onFinish} />
    </div>
  );
};

export default connect(null, { requestSignup })(Signup);
