import React from 'react';
import axios from 'axios';
// import { setUserSession } from "../Utils/Common";
import {
  toastr
} from 'react-redux-toastr';
import application from '../reducers/applyReducer';

const url = "https://rentcrowdyapi.herokuapp.com";
// const url = 'https://kwaba.com.ng';
// const url = 'http://localhost:8888';

export const requestSignup = (val, history) => async (dispatch) => {
  try {
    const {
      data
    } = await axios.post(`${url}/api/renter/auth/register`, val);
    if (!data) throw new Error();
    console.log(data);

    if (data.token) localStorage.setItem('token', data.token);
    localStorage.setItem('email', data.user.email);
    dispatch({
      type: 'LOGIN_USER',
      payload: {
        ...data.user,
        application: data.application
      }
    });
    // toastr.success("Success", "Account Created Successfully");
    history.push('/success');
  } catch (e) {
    //console.log(e.response);
    if (e.response) {
      console.log(e.response.data);
      dispatch({
        type: 'LOGIN_ERROR'
      });
      return toastr.error('Error', e.response.data);
    } else {
      // console.log(e, "error");
      dispatch({
        type: 'LOGIN_ERROR'
      });
      return toastr.error('Error', 'Something went wrong, check your network connectivity');
    }
  }
};

export const requestLogin = (val, history) => async (dispatch) => {
  try {
    const {
      data,
      status
    } = await axios.post(`${url}/api/renter/auth/login`, val);
    console.log(data, 'STATUS');
    if (status === 200) {
      // console.log(data, "data");
      if (data.token) localStorage.setItem('token', data.token);
      localStorage.setItem('email', data.user.email);
      dispatch({
        type: 'LOGIN_USER',
        payload: {
          ...data.user,
          application: data.application
        }
      });
      const {
        application
      } = data;

      // dispatch({
      //   type: "ADD_APPL",
      //   payload: {
      //     ...data.user,
      //     application: data.application
      //   },
      // });
      // toastr.success("Success", "Account Created Successfully");
      //   toastr.success("Success", "Login Success");
      console.log(application, 'CHECK APPL');
      if (!application || !application.isComplete) {
        history.push('/apply');
      } else if (!application.isProcessed) {
        history.push('/application-process');
      }
    } else {
      throw new Error();
    }
  } catch (e) {
    // return toastr.error(
    //   "Error",
    //   "Something went wrong, check your Internet connectivity"
    // );
    console.log(e);
    if (e) {
      dispatch({
        type: 'LOGIN_ERROR'
      });
      localStorage.removeItem('token');
      //   return toastr.error("Error", e.response.data);
    } else {
      dispatch({
        type: 'LOGIN_ERROR'
      });
      //   return toastr.error(
      //     "Error",
      //     "Something went wrong, check your Internet connectivity"
      //   );
    }

    // return <Alert message={"error"} type={"error"} />;
    // addToast("error.message", { appearance: "error" });
  }
};
// export const requestLogout = (history) => async (dispatch) => {
//   dispatch({
//     type: "LOGOUT_USER",
//   });
//   sessionStorage.clear();
//   history.push("/login");
// };