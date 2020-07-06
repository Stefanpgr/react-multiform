const initialState = {
error: false,
errorMsg: '',
	isAuth: false,
	loading: false
};

const user = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN_USER':
			return {
				...state, ...action.payload, isAuth: true, loading: false, error: false
			};
		case 'LOGIN_ERROR':
			return {
				...state.user,
				errorMsg:action.payload,
					isAuth: false,
					loading: false,
					error: true
			};

		case 'LOGOUT_USER':
			return {};
		case 'LOADING_USER':
			return {
				...state.user, loading: true, error: false
			};
		default:
			return state;
	}
};

export default user;