const INITIAL_STATE = {
  completed:false,
  last_filled: 0,
  loading: true
};

const application = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_APPL":
      return { ...state, ...action.data, loading: false, last_filled: action.data.page };
    case "LOGOUT_USER":
      return { };
    default:
      return state;
  }
};

export default application;
