// import React from "react";
import axios from "axios";
import { toastr } from "react-redux-toastr";
// import { Redirect } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// export const INVESTMENT = `INVESTMENT`;

// const url = "https://rentcrowdyapi.herokuapp.com";
const url = "https://kwaba.com.ng";
// const url = "http://localhost:8888";

const pay = (val, history) => async dispatch => {
  // console.log("jygfgdfgdf");
  // const history = useHistory();
  try {
    const data = await axios.post(`${url}/api/invest`, val);
    // console.log(data, "data");
    if (data.status === 200) {
      dispatch({
        type: "PAY_SUCCESS",
        data: data.data
      });
      toastr.success("Success", "Payment Success");
      history.push("/dashboard/investments");
    } else {
      throw new Error();
    }
    // console.log(data, "raw");
  } catch (e) {
    return toastr.error(
      "Error",
      "Something went wrong, check your network connectivity"
    );
    // if (e.response) {
    //   return toastr.error("Error", e.response.data);
    // } else {
    //   return console.log(e, "error");
    // return toastr.error(
    //   "Error",
    //   "Something went wrong, check your network connectivity"
    // );
    // }
  }
};

export default pay;
