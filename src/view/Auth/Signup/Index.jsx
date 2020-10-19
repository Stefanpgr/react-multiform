import React, { useState } from "react";
import "../Auth.scss";
import TopNav from "../../TopNav";
import SignupForm from "./SignupForm";
import { connect, useDispatch } from "react-redux";
import SignupSuccess from "../../Dashboard/pages/SignupSuccess";
import { requestSignup } from "../../../actions/auth";

const Signup = ({ requestSignup, history }) => {
  const [finish, setFinish] = useState(false);
  const dispatch = useDispatch()
  const onFinish = (values) => {
    // setFinish(true);
    dispatch({
      type: 'LOADING_USER'
    })
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
