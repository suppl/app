import {Dispatch, State} from './../services/dispatch.service';

export const SessionList = [
    {
        slug: "take-3",
        name: "Take 3",
        level: 1,
        icon: "icon-loudspeaker",
        description: `Take 3 minutes to improve your posture.`,
        caption: "Level 1",
        rewardsNeeded: [],
        pointLimit: 0,
        audios: [
            {
                name: 'Begin Fresh',
                file: '',
                rewardsNeeded: [],
                pointLimit: 0,
            },
            {
                name: 'Howdy',
                file: '',
                rewardsNeeded: [],
                pointLimit: 0,
            },
            {
                name: 'Howdy',
                file: '',
                rewardsNeeded: [],
                pointLimit: 100,
            },
            {
                name: 'Howdy',
                file: '',
                rewardsNeeded: [],
                pointLimit: 100,
            },
            {
                name: 'Howdy',
                file: '',
                rewardsNeeded: [],
                pointLimit: 100,
            }
        ]
    },
    {
        slug: "work-wellness",
        name: "Work Wellness",
        level: 2,
        icon: "icon-city",
        description: `Dolorem doloribus facere quaerat tenetur!`,
        caption: "Level 1",
        rewardsNeeded: [],
        pointLimit: 0,
        audios: [
            {
                name: 'Howdy',
                file: '',
                rewardsNeeded: [],
                pointLimit: 1000,
            },
            {
                name: 'Howdy',
                file: '',
                rewardsNeeded: [],
                pointLimit: 1000,
            },
            {
                name: 'Howdy',
                file: '',
                rewardsNeeded: [],
                pointLimit: 1000,
            },
            {
                name: 'Howdy',
                file: '',
                rewardsNeeded: [],
                pointLimit: 1000,
            },
        ]
    },
    {
        slug: "true-posture",
        name: "True Posture",
        level: 3,
        icon: "icon-height",
        description: `Dolorem doloribus facere quaerat tenetur!`,
        caption: "Level 1",
        rewardsNeeded: [],
        pointLimit: 0,
        audios: [
            {
                name: 'Howdy',
                file: '',
                rewardsNeeded: [],
                pointLimit: 1000,
            },{
                name: 'Howdy',
                file: '',
                rewardsNeeded: [],
                pointLimit: 1000,
            },{
                name: 'Howdy',
                file: '',
                rewardsNeeded: [],
                pointLimit: 1000,
            },{
                name: 'Howdy',
                file: '',
                rewardsNeeded: [],
                pointLimit: 1000,
            },{
                name: 'Howdy',
                file: '',
                rewardsNeeded: [],
                pointLimit: 1000,
            },{
                name: 'Howdy',
                file: '',
                rewardsNeeded: [],
                pointLimit: 1000,
            },{
                name: 'Howdy',
                file: '',
                rewardsNeeded: [],
                pointLimit: 1000,
            },{
                name: 'Howdy',
                file: '',
                rewardsNeeded: [],
                pointLimit: 1000,
            },{
                name: 'Howdy',
                file: '',
                rewardsNeeded: [],
                pointLimit: 1000,
            },{
                name: 'Howdy',
                file: '',
                rewardsNeeded: [],
                pointLimit: 1000,
            },
        ]
    }
];

export const isSessionAvailable = (session) => {
    let flag = true;

    session.rewardsNeeded.forEach(reward => {

    });

    if (State().user.customData.points < session.pointLimit) {
        flag = false;
    }

    return flag;
};


export const isAudioAvailable = (audio) => {
    // console.log('audio', audio);
    let flag = true;

    audio.rewardsNeeded.forEach(reward => {

    });

    if (State().user.customData.points < audio.pointLimit) {
        flag = false;
    }

    return flag;
};

export default SessionList;