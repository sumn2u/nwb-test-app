export const simpleAction = () => dispatch => {
    dispatch({
        type: 'BASE_ACTION',
        payload: 'result_of_base_action'
    });
};
