import * as ACTIONS from '../constants/actions.constants';
import * as Request from 'superagent';
import {Dispatch, State} from './../services/dispatch.service';
import SessionList from './../services/session.service';

// let timeLoop;

const initialState = {
    loaderVisible  : true,
    settingsVisible: false,
    session        : SessionList[0],
    audio          : SessionList[0].audios[0],
    audioVisible   : false,
    playing        : false,
    sound          : undefined
};

const performAction = {
    [ACTIONS.HIDE_AUDIO]     : (data, state) => hideAudio(data, state),
    [ACTIONS.SHOW_AUDIO]     : (data, state) => showAudio(data, state),
    [ACTIONS.TOGGLE_SETTINGS]: (data, state) => ({settingsVisible: !state.settingsVisible,}),
    [ACTIONS.START_LOADING]  : (data, state) => ({loaderVisible: true,}),
    [ACTIONS.DONE_LOADING]   : (data, state) => ({loaderVisible: false,}),
    [ACTIONS.SET_SESSION]    : (data, state) => ({session: data.session,}),
    [ACTIONS.SET_AWARDS]     : (data, state) => ({awards: data.awards,}),
    // [ACTIONS.LOAD_AUDIO]     : (data, state) => loadAudio(data, state),
    [ACTIONS.PLAY_AUDIO]     : (data, state) => playAudio(data, state),
    [ACTIONS.PAUSE_AUDIO]    : (data, state) => pauseAudio(data, state),
};

const hideAudio = (data, state) => {
    state.sound.stop();
    state.sound.once('load', () => {
        setTimeout(() => state.sound.stop(), 1);
    });

    return {
        audioVisible: false,
        playing     : false,
    }
};

const pauseAudio = (data, state) => {
    state.sound.pause();
    state.sound.once('load', () => {
        setTimeout(() => state.sound.pause(), 1);
    });

    return {playing: false,}
};

const playAudio = (data, state) => {
    state.sound.play();
    state.sound.once('load', () => {
        state.sound.play();
    });

    return {
        playing: true,
    }
};

const showAudio = (data, state) => {
    let sound = new Howl({src: [data.audio.file]});

    sound.on('end', () => {
        console.log('audio end!');
        Dispatch(ACTIONS.PAUSE_AUDIO);

        state.audio.awardsGiven.forEach(awardId => Dispatch({type: ACTIONS.GIVE_AWARD, awardId}));
        Dispatch({type: ACTIONS.GIVE_DONE, audioId: data.audio.id});
    });

    return {
        sound       : sound,
        audio       : data.audio,
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