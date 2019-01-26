const INITAL_STATE = {
    working: 'of course it works'
};

export default (state = INITAL_STATE, action) => {
    switch (action.type) {
        case 'BASE_ACTION':
            return {
                state
            };
        default:
            return state;
    }
};
