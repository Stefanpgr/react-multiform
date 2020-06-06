const INITIAL_STATE = {

};

const appl = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "APPL-DATA":
            return {
                ...state, ...action.data
            };
        default:
            return state;
    }
};

export default appl;