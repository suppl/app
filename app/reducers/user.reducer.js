import * as ACTIONS from '../constants/actions.constants';
import * as Request from 'superagent';
import {Dispatch, State, Store} from './../services/dispatch.service';

const initialState = {
    isLoggedIn: false,
    email: "hello@suppl.co",
    password: "password123",
    user: {}
};

const performAction = {
    [ACTIONS.UPDATE_LOGIN_EMAIL]: data => ({email: data.email}),

    [ACTIONS.UPDATE_LOGIN_PASSWORD]: data => ({password: data.password}),

    [ACTIONS.UPDATE_NAME]: (data, state) => ({
        user: {
            ...state.user,
            displayName: data.displayName
        }
    }),

    [ACTIONS.LOAD_PROFILE]: (data, state) => ({
        user: firebase.auth().currentUser
    }),

    [ACTIONS.SAVE_PROFILE]: (data, state) => {
        firebase.auth().currentUser.updateProfile({
            displayName: state.user.displayName,
        }).then(() => {
            Dispatch({
                type:ACTIONS.SHOW_NOTIFICATION,
                message:"Updated profile details"
            })
        });
    },

    [ACTIONS.SET_USER]: data => {
        Dispatch({type: ACTIONS.SHOW_NOTIFICATION, message: "Signed in successfully"});
        return {isLoggedIn: true, user: data.user}
    },

    [ACTIONS.UNSET_USER]: data => {
        Dispatch({type: ACTIONS.SHOW_NOTIFICATION, message: "Signed out successfully"});
        return {isLoggedIn: false, user: {}}
    },
};

const user = (state = initialState, action) => {
    console.info('USER ACTION', action);

    if (!performAction[action.type]) return state;

    state = Object.assign({}, state, performAction[action.type](action, state));

    console.info('NEW USER STATE:', action.type, state);
    return state
};

const checkAuth = () => {
    firebase.auth().onAuthStateChanged(function (user) {
        Dispatch(ACTIONS.DONE_LOADING, 500);

        if (!user) return;

        Dispatch({type: ACTIONS.SET_USER, user: user});
    });
};

const init = () => {
    checkAuth();
};

init();

export default user;