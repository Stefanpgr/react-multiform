const initialState = {
};

const paystack = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_BANKS':
			return { ...state, banks: action.payload};
		default:
			return state;
	}
};

export default paystack;
