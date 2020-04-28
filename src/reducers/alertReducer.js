const INITIAL_STATE = {
  error: null,
  success: null,
  warning: null,
  info: null
};

const alert = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGNUP_ERROR":
      return { ...state, error: action.data };
    default:
      return state;
  }
};

export default alert;
