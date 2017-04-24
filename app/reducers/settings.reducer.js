import * as ACTIONS from '../constants/actions.constants';
import * as Request from 'superagent';
import {Dispatch, State} from './../services/dispatch.service';
import SessionList from './../services/session.service';

const initialState = {
    loaderVisible: true,
    settingsVisible: false,
    session: SessionList[0],
    audio: SessionList[0].audios[0],
    audioVisible: false
};

const performAction = {
    [ACTIONS.HIDE_AUDIO]: data => ({
        audioVisible: false,
    }),

    [ACTIONS.SHOW_AUDIO]: data => ({
        audio: data.audio,
        audioVisible: true,
    }),

    [ACTIONS.TOGGLE_SETTINGS]: (data, state) => ({
        settingsVisible: !state.settingsVisible,
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

    [ACTIONS.UPDATE_AWARDS]: data => ({
        awards: data.awards,
    }),
};

const init = () => {
    firebase.auth().onAuthStateChanged(user => {
        if (!user) return;

        firebase.database().ref('awards').on('value', (snapshot) => {
            console.info('get awards', snapshot.val());

            Dispatch({
                type: ACTIONS.UPDATE_AWARDS,
                awards: snapshot.val()
            });
        });
    });
};

init();

const settings = (state = initialState, action) => {
    if (!performAction[action.type]) return state;

    const newState = Object.assign({}, state, performAction[action.type](action, state));
    console.info('NEW SETTINGS STATE:', action.type, newState);

    return newState;
};

export default settings;