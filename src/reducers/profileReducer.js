const profile = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_PROFILE":
      // return [...action.data];
      return { ...state, ...action.data, loading: false };
    case "LOGOUT_USER":
      return {};
    default:
      return state;
  }
};

export default profile;
