import * as ACTIONS from '../constants/actions.constants';
import * as Request from 'superagent';
import {store} from './../app';

const initialState = {
    isLoggedIn: false,
    email: "hello@suppl.co",
    password: "password123",
};

const performAction = {
    [ACTIONS.UPDATE_LOGIN_EMAIL]: data => ({
        email: data.email
    }),

    [ACTIONS.UPDATE_LOGIN_PASSWORD]: data => ({
        password: data.password
    }),

    [ACTIONS.SET_USER]: data => {
        window.location.hash = '/dashboard';

        setTimeout(() => store.dispatch({
            type: ACTIONS.SHOW_NOTIFICATION,
            message: "Signed in successfully"
        }),1);


        return {
            isLoggedIn: true,
            user: data.user
        }
    },
};

const user = (state = initialState, action) => {
    console.info('USER ACTION', action);

    if (!performAction[action.type]) return state;

    state = Object.assign({}, state, performAction[action.type](action));

    console.info('NEW USER STATE:', action.type, state);
    return state
};

export default user;