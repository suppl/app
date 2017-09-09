import * as ACTIONS from '../constants/actions.constants';
import * as Request from 'superagent';
import * as _ from 'lodash';
import moment from 'moment';

import {store} from './../app';
import {Dispatch, State} from './../services/dispatch.service';

const initialState = {
    visible: false,
    message: "hello",
    award  : {},
};

const performAction = {
    [ACTIONS.SET_AWARDS]  : (data, state) => ({awards: data.awards}),
    [ACTIONS.HIDE_AWARD]  : (data, state) => ({visible: false}),
    [ACTIONS.GIVE_AWARD]  : (data, state) => giveAward(data, state),
    [ACTIONS.SHOW_AWARD]  : (data, state) => showAward(data, state),
    [ACTIONS.GIVE_DONE]   : (data, state) => giveDone(data, state),
    [ACTIONS.GIVE_HISTORY]: (data, state) => giveHistory(data, state),
    // [ACTIONS.GIVE_DONE]  : (data, state) => giveStreak(data, state),
    [ACTIONS.GIVE_STREAK] : (data, state) => giveStreak(data, state),
};

const showAward = (data, state) => ({
    award  : state.awards[data.awardId],
    theme  : data.theme,
    message: data.message,
    visible: true,
});

const giveAward = async (data, state) => {
    const user = firebase.auth().currentUser;

    if (_.some(State().user.customData.awards, {awardId: data.awardId})) return;

    await firebase.database().ref('users/' + user.uid + '/awards/' + data.awardId).set({
        awardId: data.awardId,
        date   : moment().format(),
    });

    Dispatch({type: ACTIONS.SHOW_AWARD, awardId: data.awardId});
};

const giveDone = async (data, state) => {
    const user = firebase.auth().currentUser;

    await firebase.database().ref('users/' + user.uid + '/done/' + data.audioId).set({
        audioId: data.audioId,
        date   : moment().format(),
    });
};

const giveHistory = async (data, state) => {
    const user = firebase.auth().currentUser;

    await firebase.database().ref('users/' + user.uid + '/history').push({
        color          : data.session.color,
        sessionName    : data.session.name,
        sessionId      : data.session.id,
        audioName      : data.audio.name,
        audioId        : data.audio.id,
        NEPA           : data.audio.NEPA,
        duration       : data.audio.duration,
        durationSeconds: data.audio.durationSeconds,
        date           : moment().format(),
    });
};

const giveStreak = async (data, state) => {
    console.log('streak');
    const user = firebase.auth().currentUser;
    const date = moment().format('YYYYMMDD');

    await firebase.database().ref('users/' + user.uid + '/streak/' + date).push({
        audioId: data.audioId,
        date   : moment().format(),
    });
};

const init = () => {
    firebase.auth().onAuthStateChanged(user => {
        if (!user) return;

        firebase.database().ref('awards').on('value', (snapshot) => {
            console.info('get awards', snapshot.val());

            Dispatch({type: ACTIONS.SET_AWARDS, awards: snapshot.val()});
            Dispatch({type: ACTIONS.GIVE_AWARD, awardId: 'howdy'});
        });
    });
};

init();

const award = (state = initialState, action) => {
    if (!performAction[action.type]) return state;

    const newState = Object.assign({}, state, performAction[action.type](action, state));
    console.info('NEW AWARD STATE:', action.type, newState);

    return newState;
};


export default award;

