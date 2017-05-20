import * as _ from 'lodash';

import {Dispatch, State} from './../services/dispatch.service';

export const SessionList = [
    {
        slug        : "seated-at-work",
        name        : "Take a seat",
        category    : "Work Series",
        level       : 1,
        icon        : "flaticon-desk-chair",
        description : `Integrate active movement whilst sat at your desk, reducing stress and boosting your posture, focus, productivity and happiness.`,
        caption     : "",
        color       : "#70c4ee",
        awardsNeeded: [],
        audiosNeeded: [],
        audios      : [
            {
                id          : 'sat-at-work-01-01',
                file        : '/statics/audio/take-a-seat-lv01-s01.mp3',
                awardsNeeded: [],
                awardsGiven : ['first-timer'],
                audiosNeeded: [],
                lungLove    : 100,
                brainBoost  : 100,
                CalsCrushed : 100,
                alignAce    : 100,
            },
            {
                id          : 'sat-at-work-01-02',
                file        : '/statics/audio/jwc-10.mp3',
                awardsNeeded: [],
                awardsGiven : [],
                audiosNeeded: ['sat-at-work-01-01'],
                lungLove    : 100,
                brainBoost  : 100,
                CalsCrushed : 100,
                alignAce    : 100,
            },
            {
                id          : 'sat-at-work-01-03',
                file        : '/statics/audio/jwc-10.mp3',
                awardsNeeded: [],
                awardsGiven : ['threedom'],
                audiosNeeded: ['sat-at-work-01-02'],
                lungLove    : 100,
                brainBoost  : 100,
                CalsCrushed : 100,
                alignAce    : 100,
            },
            {
                id          : 'sat-at-work-01-04',
                file        : '/statics/audio/jwc-10.mp3',
                awardsNeeded: [],
                awardsGiven : [],
                audiosNeeded: ['sat-at-work-01-03'],
                lungLove    : 100,
                brainBoost  : 100,
                CalsCrushed : 100,
                alignAce    : 100,
            },
            {
                id          : 'sat-at-work-01-05',
                file        : '/statics/audio/jwc-10.mp3',
                awardsNeeded: [],
                awardsGiven : ['level-up'],
                audiosNeeded: ['sat-at-work-01-04'],
                lungLove    : 100,
                brainBoost  : 100,
                CalsCrushed : 100,
                alignAce    : 100,
            },
        ],
    },
    {
        slug        : "stand-up-desk",
        name        : "Stand up desk",
        category    : "Work Series",
        level       : 1,
        icon        : "flaticon-athlete-5",
        description : `Get up, stand up. Introduce active movement to boost your balance and blood flow, strengthening your core and improving your awareness and focus.`,
        caption     : "",
        color       : "#70c4ee",
        awardsNeeded: [],
        audiosNeeded: [],
        audios      : [
            {
                id          : 'stand-at-work-01-01',
                file        : '/statics/audio/jwc-10.mp3',
                awardsNeeded: [],
                awardsGiven : ['first-timer'],
                audiosNeeded: [],
                lungLove    : 100,
                brainBoost  : 100,
                CalsCrushed : 100,
                alignAce    : 100,
            },
            {
                id          : 'stand-at-work-01-02',
                file        : '/statics/audio/jwc-10.mp3',
                awardsNeeded: [],
                awardsGiven : [],
                audiosNeeded: ['stand-at-work-01-01'],
                lungLove    : 100,
                brainBoost  : 100,
                CalsCrushed : 100,
                alignAce    : 100,
            },
            {
                id          : 'stand-at-work-01-03',
                file        : '/statics/audio/jwc-10.mp3',
                awardsNeeded: [],
                awardsGiven : ['threedom'],
                audiosNeeded: ['stand-at-work-01-02'],
                lungLove    : 100,
                brainBoost  : 100,
                CalsCrushed : 100,
                alignAce    : 100,
            },
            {
                id          : 'stand-at-work-01-04',
                file        : '/statics/audio/jwc-10.mp3',
                awardsNeeded: [],
                awardsGiven : [],
                audiosNeeded: ['stand-at-work-01-03'],
                lungLove    : 100,
                brainBoost  : 100,
                CalsCrushed : 100,
                alignAce    : 100,
            },
            {
                id          : 'stand-at-work-01-05',
                file        : '/statics/audio/jwc-10.mp3',
                awardsNeeded: [],
                awardsGiven : ['level-up'],
                audiosNeeded: ['stand-at-work-01-04'],
                lungLove    : 100,
                brainBoost  : 100,
                CalsCrushed : 100,
                alignAce    : 100,
            },
        ],
    },
    {
        slug        : "hot-desking",
        name        : "Hot desking",
        category    : "Work Series",
        level       : 1,
        icon        : "flaticon-desk",
        description : `Flexi-desk, flexi-you. Learn how to align yourself whilst working on the fly.`,
        caption     : "",
        color       : "#70c4ee",
        awardsNeeded: [],
        audiosNeeded: [],
        audios      : [
            {
                id          : 'hot-desking-01-01',
                file        : '/statics/audio/take-a-seat-lv01-s01.mp3',
                awardsNeeded: [],
                awardsGiven : ['first-timer'],
                audiosNeeded: [],
                lungLove    : 100,
                brainBoost  : 100,
                CalsCrushed : 100,
                alignAce    : 100,
            },
            {
                id          : 'hot-desking-01-02',
                file        : '/statics/audio/jwc-10.mp3',
                awardsNeeded: [],
                awardsGiven : [],
                audiosNeeded: ['hot-desking-01-01'],
                lungLove    : 100,
                brainBoost  : 100,
                CalsCrushed : 100,
                alignAce    : 100,
            },
            {
                id          : 'hot-desking-01-03',
                file        : '/statics/audio/jwc-10.mp3',
                awardsNeeded: [],
                awardsGiven : ['threedom'],
                audiosNeeded: ['hot-desking-01-02'],
                lungLove    : 100,
                brainBoost  : 100,
                CalsCrushed : 100,
                alignAce    : 100,
            },
            {
                id          : 'hot-desking-01-04',
                file        : '/statics/audio/jwc-10.mp3',
                awardsNeeded: [],
                awardsGiven : [],
                audiosNeeded: ['hot-desking-01-03'],
                lungLove    : 100,
                brainBoost  : 100,
                CalsCrushed : 100,
                alignAce    : 100,
            },
            {
                id          : 'hot-desking-01-05',
                file        : '/statics/audio/jwc-10.mp3',
                awardsNeeded: [],
                awardsGiven : ['level-up'],
                audiosNeeded: ['hot-desking-01-04'],
                lungLove    : 100,
                brainBoost  : 100,
                CalsCrushed : 100,
                alignAce    : 100,
            },
        ],
    },
    {
        slug        : "wake-up-brighter",
        name        : "Wake up brighter",
        category    : "Sleep Series",
        level       : 1,
        icon        : "flaticon-waking-up",
        description : `Rise and shine. Wake up feeling lighter, brighter and full of energy with our morning special.`,
        color       : "#ffb6a9",
        caption     : "",
        awardsNeeded: [],
        audiosNeeded: [],
        audios      : [
            {
                id          : 'wake-up-brighter-01-01',
                file        : '/statics/audio/jwc-10.mp3',
                awardsNeeded: [],
                awardsGiven : ['first-timer'],
                audiosNeeded: [],
                lungLove    : 100,
                brainBoost  : 100,
                CalsCrushed : 100,
                alignAce    : 100,
            },
            {
                id          : 'wake-up-brighter-01-02',
                file        : '/statics/audio/jwc-10.mp3',
                awardsNeeded: [],
                awardsGiven : [],
                audiosNeeded: ['wake-up-brighter-01-01'],
                lungLove    : 100,
                brainBoost  : 100,
                CalsCrushed : 100,
                alignAce    : 100,
            },
            {
                id          : 'wake-up-brighter-01-03',
                file        : '/statics/audio/jwc-10.mp3',
                awardsNeeded: [],
                awardsGiven : ['threedom'],
                audiosNeeded: ['wake-up-brighter-01-02'],
                lungLove    : 100,
                brainBoost  : 100,
                CalsCrushed : 100,
                alignAce    : 100,
            },
            {
                id          : 'wake-up-brighter-01-04',
                file        : '/statics/audio/jwc-10.mp3',
                awardsNeeded: [],
                awardsGiven : [],
                audiosNeeded: ['wake-up-brighter-01-03'],
                lungLove    : 100,
                brainBoost  : 100,
                CalsCrushed : 100,
                alignAce    : 100,
            },
            {
                id          : 'wake-up-brighter-01-05',
                file        : '/statics/audio/jwc-10.mp3',
                awardsNeeded: [],
                awardsGiven : ['level-up'],
                audiosNeeded: ['wake-up-brighter-01-04'],
                lungLove    : 100,
                brainBoost  : 100,
                CalsCrushed : 100,
                alignAce    : 100,
            },
        ],
    },
    {
        slug        : "i-cant-sleep",
        name        : "I can't sleep",
        category    : "Sleep Series",
        level       : 1,
        icon        : "flaticon-emoticon",
        description : `Don't stress. ease back into a sleep with our calming approach to getting some zzz's.`,
        color       : "#ffb6a9",
        caption     : "",
        awardsNeeded: [],
        audiosNeeded: [],
        audios      : [
            {
                id          : 'i-cant-sleep-01-01',
                file        : '/statics/audio/jwc-10.mp3',
                awardsNeeded: [],
                awardsGiven : ['power-pillow'],
                audiosNeeded: [],
                lungLove    : 100,
                brainBoost  : 100,
                CalsCrushed : 100,
                alignAce    : 100,
            },
            {
                id          : 'i-cant-sleep-01-02',
                file        : '/statics/audio/jwc-10.mp3',
                awardsNeeded: [],
                awardsGiven : ['power-pillow'],
                audiosNeeded: [],
                lungLove    : 100,
                brainBoost  : 100,
                CalsCrushed : 100,
                alignAce    : 100,
            },
        ],
    },
    {
        slug        : "fall-sleep",
        name        : "Fall sleep",
        category    : "Sleep Series",
        level       : 1,
        icon        : "flaticon-people-2",
        description : `Long day? Get comfortable, align your body and mind to calmly fall asleep earning yourself some crucial zzz's.`,
        color       : "#ffb6a9",
        caption     : "",
        awardsNeeded: [],
        audiosNeeded: [],
        audios      : [
            {
                id          : 'fall-sleep-01-01',
                file        : '/statics/audio/jwc-10.mp3',
                awardsNeeded: [],
                awardsGiven : ['knight-night'],
                audiosNeeded: [],
                lungLove    : 100,
                brainBoost  : 100,
                CalsCrushed : 100,
                alignAce    : 100,
            },
            {
                id          : 'fall-sleep-01-02',
                file        : '/statics/audio/jwc-10.mp3',
                awardsNeeded: [],
                awardsGiven : ['knight-night'],
                audiosNeeded: [],
                lungLove    : 100,
                brainBoost  : 100,
                CalsCrushed : 100,
                alignAce    : 100,
            },
        ],
    },
];

export const isSessionAvailable = (session) => {
    let flag = true;

    session.awardsNeeded.forEach(award => {

    });

    // if (State().user.customData.points < session.pointLimit) {
    //     flag = false;
    // }

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

    // if (State().user.customData.points < audio.pointLimit) {
    //     flag = false;
    // }

    return flag;
};

export default SessionList;