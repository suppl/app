import * as Request from 'superagent';

import * as ACTIONS from '../constants/actions.constants';
import {store} from './../app';
import {Dispatch, State} from './../services/dispatch.service';

const initialState = {
    visible: false,
    content: "Hello",
    popupType: 'reset-password',
    resetEmail: ""
};

const performAction = {
    [ACTIONS.UPDATE_RESET_PASSWORD_EMAIL]: (data) => ({resetEmail: data.email}),

    [ACTIONS.SEND_RESET_PASSWORD_EMAIL]: (data, state) => sendResetPasswordEmail(),

    [ACTIONS.HIDE_POPUP]: (data) => ({visible: false}),

    [ACTIONS.SHOW_POPUP]: (data) => ({visible: true,}),
};

const sendResetPasswordEmail = async () => {
    try {
        await firebase.auth().sendPasswordResetEmail(state.resetEmail)
    } catch (error) {
        Dispatch({type: ACTIONS.SHOW_NOTIFICATION, message: error.message, theme: 'error'});
        return;
    }

    Dispatch({type: ACTIONS.SHOW_NOTIFICATION, message: 'Email reset sent.'});
    Dispatch(ACTIONS.HIDE_POPUP)

};

const popup = (state = initialState, action) => {
    if (!performAction[action.type]) return state;

    const newState = Object.assign({}, state, performAction[action.type](action, state));
    console.info('NEW POPUP STATE:', action.type, newState);

    return newState;
};

export default popup;