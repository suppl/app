import * as ACTIONS from '../constants/actions.constants';
import * as Request from 'superagent';
import Dispatch from './../services/dispatch.service';

const initialState = {
    loaderVisible: true
};

const performAction = {
    [ACTIONS.START_LOADING]: data => ({
        loaderVisible: true
    }),

    [ACTIONS.DONE_LOADING]: data => ({
        loaderVisible: false
    }),
};

const settings = (state = initialState, action) => {
    console.info('USER ACTION', action);

    if (!performAction[action.type]) return state;

    state = Object.assign({}, state, performAction[action.type](action));

    console.info('NEW USER STATE:', action.type, state);
    return state
};

export default settings;