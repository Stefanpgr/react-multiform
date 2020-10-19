const INITIAL_STATE = {
    bank_statement: [],
    passport: [],
    gov_id: [],
    employment_letter: [],
    work_identity: [],
    utility_bill: []
};

const documents = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "BANK_STATEMENT":
            return {
                ...state, bank_statement: [action.payload, ...state.bank_statement]
            };
        default:
            return state;
    }
};

export default documents;