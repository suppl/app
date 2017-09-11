import * as _ from 'lodash';

import {Dispatch, State} from './../services/dispatch.service';
import SESSIONS from './../constants/sessions.constants';
import ONBOARDING from './../constants/onboarding.constants';

export const SessionList    = SESSIONS;
export const OnboardingList = ONBOARDING;

export const isSessionAvailable = (session) => {
    let flag = true;

    session.awardsNeeded.forEach(award => {

    });

    // if (State().user.customData.points < session.pointLimit) {
    //     flag = false;
    // }

    return flag;
};

export const getAudioById = sessionId => {
    for (let session in SessionList) {
        if (_.find(session.audios, {id: sessionId})) {
            return _.find(session.audios, {id: sessionId});
        }
    }

    return undefined;
};

export const getSessionTime = session => {
    // return _.reduce(session.audios, audio);
    return 25;
};

export const getCategoryAudioCount = category => {
    let count = 0;

    _.each(_.filter(SessionList, {category}), session => {
        count += session.days > 1 ? session.days : session.audios.length;
    });

    return count;
};

export const isAudioDone = (audio) => {
    let flag = false;

    if (_.some(State().user.customData.done, {audioId: audio.id})) {
        flag = true;
    }

    return flag;
};


export const isOnboardingAvailable = (audio) => {
    return !!_.find(ONBOARDING, {audioId: audio.id})
};

export const getOnboarding = (audio) => {
    return _.find(ONBOARDING, {audioId: audio.id})
};

export const isAudioAvailable = (audio) => {
    console.log('audio', audio);
    let flag = true;

    // audio.awardsNeeded.forEach(awardId => {
    //     if (!_.some(State().user.customData.awards, {awardId})) {
    //         flag = false;
    //     }
    // });

    audio.audiosNeeded.forEach(audioId => {
        if (!_.some(State().user.customData.done, {audioId})) {
            flag = false;
        }
    });

    // if (State().user.customData.points < audio.pointLimit) {
    //     flag = false;
    // }

    return flag;
};

export default SessionList;