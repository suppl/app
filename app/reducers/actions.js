import * as types from '../constants/action-types.constants';

const initialState = {
    nathans: 1
};

const returnPrint = (state, action) => {
    console.info('NEW STATE:', action.type, state);
    return state
};

const actions = (state = initialState, action) => {
    switch (action.type) {

        case types.ADD:
            state = Object.assign({}, state, {
                nathans: state.nathans + 1
            });

            break;

        case types.MINUS:
            state = Object.assign({}, state, {
                nathans: state.nathans - 1
            });

            break;
    }

    return returnPrint(state, action);
};

export default actions;