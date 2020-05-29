const initialState = {

	isAuth: false,
	loading: false
};

const user = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN_USER':
			return {
				...state, ...action.payload, isAuth: true, loading: false
			};
		case 'LOGIN_ERROR':
			return {
				...state.user,
					isAuth: false,
					loading: false
			};

		case 'LOGOUT_USER':
			return {};
		case 'LOADING':
			return {
				...state.user, loading: true
			};
		default:
			return state;
	}
};

export default user;