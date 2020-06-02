import axios from 'axios';
import { toastr } from 'react-redux-toastr';

// const url = "https://rentcrowdyapi.herokuapp.com";
// const url = "https://kwaba.com.ng";
const url = 'http://localhost:8888';
// const token =sessionStorage.getItem("token")

export const sendApplication = (val) => async (dispatch) => {
	try {
		const { data, status } = await axios.post(`${url}/api/renter/rnpl/apply`, val);
		// if (!data) throw new Error();
		if (status === 200) {
			// dispatch({
			// 	type: 'ADD_APPL',
			// 	payload: data
			// });
			console.log(data);
		} else {
			throw new Error();
		}

		// console.log(Object.values(data));
	} catch (e) {
		if (e.response) {
			console.log(e.response);
			// return toastr.info("Error", e.response.data);
		} else {
			console.log(e, 'error');
			// return toastr.error(
			//   "Error",
			//   "Something went wrong, check your network connectivity"
			// );
		}
	}
};

export const getApplication = (id) => async (dispatch) => {
	try {
		const { data, status } = await axios.post(`${url}/api/renter/rnpl/get/${id}`);
		// if (!data) throw new Error();
		if (status === 200) {
			dispatch({
				type: 'ADD_APPL',
				payload: data.application
			});
			console.log(data);
		} else {
			throw new Error();
		}

		// console.log(Object.values(data));
	} catch (e) {
		if (e.response) {
			console.log(e.response);
			// return toastr.info("Error", e.response.data);
		} else {
			console.log(e, 'error');
			// return toastr.error(
			//   "Error",
			//   "Something went wrong, check your network connectivity"
			// );
		}
	}
};
