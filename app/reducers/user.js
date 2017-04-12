import * as types from '../constants/action-types.constants';

const initialState = {
    isLoggedIn: false
};

const returnPrint = (state, action) => {
    console.info('NEW USER STATE:', action.type, state);
    return state
};

const user = (state = initialState, action) => {
    switch (action.type) {

        case types.LOGIN:
            state = Object.assign({}, state, {
                isLoggedIn: true
            });

            break;
    }

    return returnPrint(state, action);
};

export default user;