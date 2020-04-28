const initialState = {
  loading: false
};

const loading = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state.loading, loading: true };
  }
};

export default user;
