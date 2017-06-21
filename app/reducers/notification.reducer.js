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
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            store.dispatch({
                type: ACTIONS.HIDE_NOTIFICATION,
            })
        }, 3000);

        return {
            theme: data.theme,
            message: data.message,
            visible: true,
        }
    },
};

const notification = (state = initialState, action) => {
    if (!performAction[action.type]) return state;

    console.info('NEW NOTIFICATION STATE:', action.type, state);
    return Object.assign({}, state, performAction[action.type](action, state));
};

export default notification;