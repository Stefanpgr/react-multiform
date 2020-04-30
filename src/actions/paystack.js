// import React from "react";
import axios from "axios";
import { toastr } from "react-redux-toastr";
// import { Redirect } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// export const INVESTMENT = `INVESTMENT`;

// const url = "https://rentcrowdyapi.herokuapp.com";
const url = "https://api.paystack.co";
// const url = "http://localhost:8888";

export const getBanks = () => async dispatch => {
  // console.log("jygfgdfgdf");
  // const history = useHistory();
  try {
    const {data} = await axios.get(`${url}/bank`);
    console.log(data.status, "data");
    if (!data.status)  throw new Error();
    
    dispatch({
      type: "GET_BANKS",
      payload: data.data
    });
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


