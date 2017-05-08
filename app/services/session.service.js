import {Dispatch, State} from './../services/dispatch.service';

export const SessionList = [
    {
        slug        : "take-3",
        name        : "Take 3",
        level       : 1,
        icon        : "icon-loudspeaker",
        description : `Take 3 minutes to improve your posture.`,
        caption     : "Level 1",
        awardsNeeded: [],
        pointLimit  : 0,
        audios      : [
            {
                id          : '',
                name        : 'Session 1/10',
                file        : '/statics/audio/jwc-10.mp3',
                awardsNeeded: [],
                audiosNeeded: [],
                pointLimit  : 0,
                index       : 0,
            },
            {
                name        : 'Session 2/10',
                file        : 'https://ascension101.com//media/audio/5min/5%20Minute%20relaxation%20by%20Inelia%20Benz.mp3',
                awardsNeeded: [],
                audiosNeeded: [],
                pointLimit  : 0,
                index       : 1,
            },
            {
                name        : 'Howdy',
                file        : '',
                awardsNeeded: [],
                pointLimit  : 100,
                index       : 2,
            },
            {
                name        : 'Howdy',
                file        : '',
                awardsNeeded: [],
                pointLimit  : 100,
                index       : 3,
            },
            {
                name        : 'Howdy',
                file        : '',
                awardsNeeded: [],
                pointLimit  : 100,
                index       : 4,
            }
        ]
    },
    {
        slug        : "work-wellness",
        name        : "Work Wellness",
        level       : 2,
        icon        : "icon-city",
        description : `Dolorem doloribus facere quaerat tenetur!`,
        caption     : "Level 1",
        awardsNeeded: [],
        pointLimit  : 0,
        audios      : [
            {
                name        : 'Howdy',
                file        : '',
                awardsNeeded: [],
                pointLimit  : 1000,
            },
            {
                name        : 'Howdy',
                file        : '',
                awardsNeeded: [],
                pointLimit  : 1000,
            },
            {
                name        : 'Howdy',
                file        : '',
                awardsNeeded: [],
                pointLimit  : 1000,
            },
            {
                name        : 'Howdy',
                file        : '',
                awardsNeeded: [],
                pointLimit  : 1000,
            },
        ]
    },
    {
        slug        : "true-posture",
        name        : "True Posture",
        level       : 3,
        icon        : "icon-height",
        description : `Dolorem doloribus facere quaerat tenetur!`,
        caption     : "Level 1",
        awardsNeeded: [],
        pointLimit  : 0,
        audios      : [
            {
                name        : 'Howdy',
                file        : '',
                awardsNeeded: [],
                pointLimit  : 1000,
            }, {
                name        : 'Howdy',
                file        : '',
                awardsNeeded: [],
                pointLimit  : 1000,
            }, {
                name        : 'Howdy',
                file        : '',
                awardsNeeded: [],
                pointLimit  : 1000,
            }, {
                name        : 'Howdy',
                file        : '',
                awardsNeeded: [],
                pointLimit  : 1000,
            }, {
                name        : 'Howdy',
                file        : '',
                awardsNeeded: [],
                pointLimit  : 1000,
            }, {
                name        : 'Howdy',
                file        : '',
                awardsNeeded: [],
                pointLimit  : 1000,
            }, {
                name        : 'Howdy',
                file        : '',
                awardsNeeded: [],
                pointLimit  : 1000,
            }, {
                name        : 'Howdy',
                file        : '',
                awardsNeeded: [],
                pointLimit  : 1000,
            }, {
                name        : 'Howdy',
                file        : '',
                awardsNeeded: [],
                pointLimit  : 1000,
            }, {
                name        : 'Howdy',
                file        : '',
                awardsNeeded: [],
                pointLimit  : 1000,
            },
        ]
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


export const isAudioAvailable = (audio) => {
    // console.log('audio', audio);
    let flag = true;

    audio.awardsNeeded.forEach(award => {

    });

    if (State().user.customData.points < audio.pointLimit) {
        flag = false;
    }

    return flag;
};

export default SessionList;