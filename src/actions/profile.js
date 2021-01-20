import axios from "axios";
import { toastr } from "react-redux-toastr";

// const url = "https://rentcrowdyapi.herokuapp.com";
const url = "https://kwaba-svr.herokuapp.com";
// const url = "http://localhost:8888";

export const updateProfile = val => async dispatch => {
  // console.log(token, "token");
  try {
    const response = await axios.post(`${url}/api/investor/profile`, val);
    // if (!data) throw new Error();
    if (response.status === 200) {
      // console.log(response, "data");

      dispatch({
        type: "UPDATE_PROFILE",
        data: response.data
      });

      toastr.success("Success", "Profile updated successfully.");
    }
  } catch (e) {
    if (e.response) {
      console.log(e.response);
      return toastr.error("Error", e.response.data);
    } else {
      console.log(e, "error");
      return toastr.error(
        "Error",
        "Something went wrong, check your network connectivity"
      );
    }

    // console.log(e.response.data);
  }
};

export const updatePassword = val => async dispatch => {
  // console.log(token, "token");
  try {
    const response = await axios.put(`${url}/api/investor/change`, val, {
      headers: {
        "x-auth-token": sessionStorage.getItem("token")
      }
    });
    // if (!data) throw new Error();
    if (response.status === 200) {
      // console.log(response, "data");

      // dispatch({
      //   type: "UPDATE_PROFILE",
      //   data: response.data
      // });

      toastr.success("Success", "Password changed successfully.");
    }
  } catch (e) {
    if (e.response) {
      console.log(e.response);
      return toastr.error("Error", e.response.data);
    } else {
      console.log(e, "error");
      return toastr.error(
        "Error",
        "Something went wrong, check your network connectivity"
      );
    }

    // console.log(e.response.data);
  }
};

export const getProfile = () => async dispatch => {
  // console.log(token, "token");
  try {
    const response = await axios.get(`${url}/api/investor/profile`, {
      headers: {
        "x-auth-token": sessionStorage.getItem("token")
      }
    });
    // if (!data) throw new Error();
    if (response.status === 200) {
      // console.log(response, "data");
      sessionStorage.setItem("dob", response.data.dob);
      dispatch({
        type: "UPDATE_PROFILE",
        data: response.data
      });

      // toastr.success("Success", "Profile updated successfully.");
    }
  } catch (e) {
    if (e.response) {
      console.log(e.response.data);
      // return toastr.error("Error", e.response.data);
    } else {
      console.log(e, "error");
      return toastr.error(
        "Error",
        "Something went wrong, check your network connectivity"
      );
    }

    // console.log(e.response.data);
  }
};
