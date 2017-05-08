import {Dispatch, State} from './../services/dispatch.service';
import * as _ from 'lodash';

export const SessionList = [
    {
        slug        : "seated-at-work",
        name        : "Seated at work",
        level       : 1,
        icon        : "flaticon-desk-chair",
        description : `Exercises to help you improve your posture while seated at work.`,
        caption     : "Level 1",
        awardsNeeded: [],
        pointLimit  : 0,
        audios      : [
            {
                id          : 'seated-at-work-1',
                name        : 'Session 1/10',
                file        : '/statics/audio/jwc-10.mp3',
                awardsNeeded: [],
                awardsGiven : ['first-base'],
                audiosNeeded: [],
                pointLimit  : 0,
                index       : 0,
            },
            {
                id          : 'seated-at-work-2',
                name        : 'Session 2/10',
                file        : 'https://ascension101.com//media/audio/5min/5%20Minute%20relaxation%20by%20Inelia%20Benz.mp3',
                awardsNeeded: [],
                awardsGiven : [],
                audiosNeeded: ['seated-at-work-1'],
                pointLimit  : 0,
                index       : 1,
            },
            {
                id          : 'seated-at-work-3',
                name        : 'Session 2/10',
                file        : 'https://ascension101.com//media/audio/5min/5%20Minute%20relaxation%20by%20Inelia%20Benz.mp3',
                awardsNeeded: [],
                awardsGiven : [],
                audiosNeeded: ['seated-at-work-2'],
                pointLimit  : 0,
                index       : 1,
            },
        ]
    },
    {
        slug        : "standing-at-work",
        name        : "Standing at work",
        level       : 2,
        icon        : "flaticon-athlete",
        description : `Exercises to help you improve your posture while standing at work.`,
        caption     : "Level 1",
        awardsNeeded: [],
        pointLimit  : 0,
        audios      : []
    },
    {
        slug        : "morning-stretch",
        name        : "Morning Stretch",
        level       : 3,
        icon        : "flaticon-sunrise",
        description : `Start everyday with a quick nimble session`,
        caption     : "Level 1",
        awardsNeeded: ['at work'],
        pointLimit  : 0,
        audios      : []
    }
];

export const isSessionAvailable = (session) => {
    let flag = true;

    session.awardsNeeded.forEach(award => {

    });

    if (State().user.customData.points < session.pointLimit) {
        flag = false;
    }

    return flag;
};


export const isAudioDone = (audio) => {
    let flag = false;

    if (_.some(State().user.customData.done, {audioId: audio.id})) {
        flag = true;
    }

    return flag;
};


export const isAudioAvailable = (audio) => {
    // console.log('audio', audio);
    let flag = true;

    audio.awardsNeeded.forEach(awardId => {
        if (!_.some(State().user.customData.awards, {awardId})) {
            flag = false;
        }
    });

    audio.audiosNeeded.forEach(audioId => {
        if (!_.some(State().user.customData.done, {audioId})) {
            flag = false;
        }
    });

    if (State().user.customData.points < audio.pointLimit) {
        flag = false;
    }

    return flag;
};

export default SessionList;