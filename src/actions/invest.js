import axios from "axios";
import { toastr } from "react-redux-toastr";
export const INVESTMENT = `INVESTMENT`;

// const url = "https://rentcrowdyapi.herokuapp.com";
const url = "https://kwaba.com.ng";
// const url = "http://localhost:8888";
// const token =sessionStorage.getItem("token")

const getInvestment = id => async dispatch => {
  // console.log(token, "token");
  try {
    const { data, status } = await axios.get(`${url}/api/invest/${id}`, {
      headers: {
        "x-auth-token": sessionStorage.getItem("token")
      }
    });
    // if (!data) throw new Error();
    if (status === 200) {
      dispatch({
        type: "INVESTMENT",
        data
      });
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

    // console.log(e.response.data);
  }
};

// export function getInvestment(id) {
//   return function(dispatch) {
//       return axios.post(`${url}/api/invest/${id}`).then(data => {
//           // dispatch
//           dispatch({
//               type: "INVESTMENT",
//              data
//           });
//       });
//   };
// }

export default getInvestment;
