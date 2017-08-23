import * as ACTIONS from '../constants/actions.constants';
import * as Request from 'superagent';
import {Dispatch, State} from './../services/dispatch.service';
import SessionList from './../services/session.service';
import {isOnboardingAvailable} from "../services/session.service";

// let timeLoop;

const initialState = {
    loaderVisible  : true,
    settingsVisible: false,
    session        : SessionList[0],
    audio          : SessionList[0].audios[0],
    audioVisible   : false,
    playing        : false,
    sound          : undefined,
    completeVisible: false,
};

const performAction = {
    [ACTIONS.HIDE_AUDIO]     : (action, state) => hideAudio(action, state),
    [ACTIONS.SHOW_AUDIO]     : (action, state) => showAudio(action, state),
    [ACTIONS.TOGGLE_SETTINGS]: (action, state) => ({settingsVisible: !state.settingsVisible,}),
    [ACTIONS.SHOW_COMPLETE]  : (action, state) => ({completeVisible: true}),
    [ACTIONS.HIDE_COMPLETE]  : (action, state) => ({completeVisible: false}),
    [ACTIONS.START_LOADING]  : (action, state) => ({loaderVisible: true,}),
    [ACTIONS.DONE_LOADING]   : (action, state) => ({loaderVisible: false,}),
    [ACTIONS.SET_SESSION]    : (action, state) => ({session: action.session,}),
    [ACTIONS.SET_AWARDS]     : (action, state) => ({awards: action.awards,}),
    // [ACTIONS.LOAD_AUDIO]     : (action, state) => loadAudio(action, state),
    [ACTIONS.PLAY_AUDIO]     : (action, state) => playAudio(action, state),
    [ACTIONS.PAUSE_AUDIO]    : (action, state) => pauseAudio(action, state),
};

const hideAudio = (action, state) => {
    state.sound.stop();
    // state.sound.once('load', () => {
    //     setTimeout(() => state.sound.stop(), 1);
    // });

    return {
        audioVisible: false,
        playing     : false,
    }
};

const pauseAudio = (action, state) => {
    state.sound.pause();
    // state.sound.once('load', () => {
    //     setTimeout(() => state.sound.pause(), 1);
    // });

    return {playing: false,}
};

const playAudio = (action, state) => {
    state.sound.play();
    Dispatch({type: ACTIONS.GIVE_STREAK, audioId: state.audio.id});
    // state.sound.once('load', () => {
    // if (!state.sound.)
    // state.sound.play();
    // });

    return {
        playing: true,
    }
};

const showAudio = (action, state) => {

    if (isOnboardingAvailable(action.audio)) {
        Dispatch({type: ACTIONS.SHOW_ONBOARDING})
    }

    let sound = new Howl({
        src  : [action.audio.file],
        html5: true,
    });

    sound.on('end', () => {
        console.log('audio end!');
        Dispatch(ACTIONS.PAUSE_AUDIO);
        Dispatch(ACTIONS.SHOW_COMPLETE);

        state.audio.awardsGiven.forEach(awardId => Dispatch({type: ACTIONS.GIVE_AWARD, awardId}));
        Dispatch({type: ACTIONS.GIVE_DONE, audioId: action.audio.id});
    });

    return {
        sound       : sound,
        session     : action.session,
        audio       : action.audio,
        audioVisible: true,
    }
};

const init = () => {
    firebase.auth().onAuthStateChanged(user => {
        if (!user) return;

        firebase.database().ref('awards').on('value', snapshot => {
            console.info('get awards', snapshot.val());
            Dispatch({type: ACTIONS.SET_AWARDS, awards: snapshot.val()});
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