const INITIAL_STATE = {
	data: null,
	loading: true,
	progress: 17,
	currPage: 0
};

const application = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'ADD_APPL':
			return {
				...state,
				...action.data,
					loading: false,
					progress: state.progress + 17
			};

		case 'PAGE_CHANGE':
			return {
				...state,
				currPage: action.data
			};
		case 'GET_APPL':
			return {
				...state, ...action.data
			};
		case 'CLEAR_APPL':
			return {};
		default:
			return state;
	}
};

export default application;