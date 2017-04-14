import * as ACTIONS from '../constants/actions.constants';
import * as Request from 'superagent';
import {Dispatch, State} from './../services/dispatch.service';
import AudioList from './../services/audio.service';

const initialState = {
    loaderVisible: true,
    settingsVisible: false,
    session: AudioList[0],
    sessionVisible: false,
};

const performAction = {
    [ACTIONS.HIDE_SESSION]: data => ({
        sessionVisible: false,
    }),

    [ACTIONS.SHOW_SESSION]: data => ({
        sessionVisible: true,
    }),

    [ACTIONS.TOGGLE_SETTINGS]: data => ({
        settingsVisible: !State().settings.settingsVisible,
    }),

    [ACTIONS.START_LOADING]: data => ({
        loaderVisible: true,
    }),

    [ACTIONS.DONE_LOADING]: data => ({
        loaderVisible: false,
    }),

    [ACTIONS.SET_SESSION]: data => ({
        session: data.session,
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