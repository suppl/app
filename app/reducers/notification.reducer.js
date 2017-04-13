import * as ACTIONS from '../constants/actions.constants';
import * as Request from 'superagent';
import {store} from './../app';

const initialState = {
    visible: false,
    message: "hello"
};

let timeout;

const performAction = {

    [ACTIONS.HIDE_NOTIFICATION]: (data) => {
        clearTimeout(timeout);

        return {
            visible: false
        }
    },

    [ACTIONS.SHOW_NOTIFICATION]: (data) => {
        timeout = setTimeout(() => {
            store.dispatch({
                type: ACTIONS.HIDE_NOTIFICATION,
            })
        }, 3000);

        return {
            type: ACTIONS.SET_USER,
            theme: data.theme,
            message: data.message,
            visible: true,
        }
    },
};

const notification = (state = initialState, action) => {
    console.info('NOTIFICATION ACTION', action);

    if (!performAction[action.type]) return state;

    state = Object.assign({}, state, performAction[action.type](action));

    console.info('NEW NOTIFICATION STATE:', action.type, state);
    return state
};

export default notification;