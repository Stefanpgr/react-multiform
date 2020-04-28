import axios from "axios";
import { toastr } from "react-redux-toastr";

// const url = "https://rentcrowdyapi.herokuapp.com";
const url = "https://kwaba.com.ng";
// const url = "http://localhost:8888";
// const token =sessionStorage.getItem("token")

const withdraw = id => async dispatch => {
  console.log(sessionStorage.getItem("token"), "token");
  try {
    const { data, status } = await axios.get(
      `${url}/api/investor/withdraw/${id}`,
      {
        headers: {
          "x-auth-token": sessionStorage.getItem("token")
        }
      }
    );
    // if (!data) throw new Error();
    if (status === 200) {
      toastr.success("Request Sent Succesfully, please check your mail.");
    } else {
      throw new Error();
    }

    // console.log(Object.values(data));
  } catch (e) {
    if (e.response) {
      // console.log(e.response);
      return toastr.info("Error", e.response.data);
    } else {
      // console.log(e, "error");
      return toastr.error(
        "Error",
        "Something went wrong, check your network connectivity"
      );
    }
  }
};

export default withdraw;
