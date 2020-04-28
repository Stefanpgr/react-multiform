import React from 'react';
import axios from 'axios';
import { setUserSession } from '../Utils/Common';
import { toastr } from 'react-redux-toastr';

// const url = "https://rentcrowdyapi.herokuapp.com";
const url = 'https://kwaba.com.ng';
// const url = "http://localhost:8888";

export const requestSignup = (val, history) => async (dispatch) => {
	try {
		const { data } = await axios.post(`${url}/api/investor/signup`, val);
		if (!data) throw new Error();
		// console.log(data._id, "id");
		const session = {
			id: data._id,
			firstname: data.firstname,
			lastname: data.lastname,
			email: data.email,
			phone: data.phone
		};
		if (data.token) setUserSession(data.token, JSON.stringify(session));

		dispatch({
			type: 'LOGIN_USER',
			payload: { ...data }
		});
		toastr.success('Success', 'Account Created Successfully');
		history.push('/dashboard');
	} catch (e) {
		//console.log(e.response);
		if (e.response) {
			// console.log(e.response);
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
		const { data, status } = await axios.post(`${url}/api/investor/login`, val);

		if (status === 200) {
			// console.log(data, "data");
			const session = {
				id: data._id,
				firstname: data.firstname,
				lastname: data.lastname,
				email: data.email,
				phone: data.phone
			};
			if (data.token) setUserSession(data.token, JSON.stringify(session));

			dispatch({
				type: 'LOGIN_USER',
				payload: { ...data }
			});
			toastr.success('Success', 'Login Success');
			history.push('/dashboard');
		} else {
			throw new Error();
		}
	} catch (e) {
		// return toastr.error(
		//   "Error",
		//   "Something went wrong, check your Internet connectivity"
		// );
		if (e.response) {
			dispatch({
				type: 'LOGIN_ERROR'
			});
			sessionStorage.removeItem('token');
			return toastr.error('Error', e.response.data);
		} else {
			dispatch({
				type: 'LOGIN_ERROR'
			});
			return toastr.error('Error', 'Something went wrong, check your Internet connectivity');
		}

		// return <Alert message={"error"} type={"error"} />;
		// addToast("error.message", { appearance: "error" });
	}
};
export const requestLogout = (history) => async (dispatch) => {
	dispatch({
		type: 'LOGOUT_USER'
	});
	sessionStorage.clear();
	history.push('/login');
};