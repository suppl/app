import React from 'react';

const SESSIONS = [
    {
        id          : "sitting",
        slug        : "sitting",
        name        : "Sitting",
        category    : "Foundation",
        level       : 1,
        days        : 5,
        // svgSmall    : "/statics/svg/work series/small/sm-desk-flex.svg",
        // svgLarge    : "/statics/svg/work series/large/lg-sat-down.svg",a
        // icon        : "flaticon-desk-chair",
        description : `Tired or hunching in your chair? Learn the basics of good posture whilst seated and start to sit like a superstar.`,
        caption     : "",
        color       : "#a2e4eb",
        pattern     : "/statics/svg/patterns/basics.svg",
        awardsNeeded: [],
        audiosNeeded: [],
        audios      : [
            {
                id             : 'sitting-intro',
                name           : 'Intro',
                intro          : true,
                index          : 0,
                file           : '/statics/audio/sitting/sitting-intro.m4a',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : [],
                duration       : '1:59',
                durationSeconds: (1 * 60) + 59,
                NEPA           : 100,
            },
            {
                id             : 'sitting-1',
                name           : 'Day 1',
                index          : 1,
                file           : '/statics/audio/sitting/sitting-1.m4a',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : [],
                duration       : '5:43',
                durationSeconds: (5 * 60) + 43,
                NEPA           : 600,
            },
            {
                id             : 'sitting-2',
                name           : 'Day 2',
                index          : 2,
                file           : '/statics/audio/sitting/sitting-2.m4a',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : ['sitting-1'],
                duration       : '6:17',
                durationSeconds: (6 * 60) + 17,
                NEPA           : 600,
            },
            {
                id             : 'sitting-3',
                name           : 'Day 3',
                index          : 3,
                file           : '/statics/audio/sitting/sitting-3.m4a',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : ['sitting-2'],
                duration       : '5:06',
                durationSeconds: (5 * 60) + 6,
                NEPA           : 500,
            },
            {
                id             : 'sitting-4',
                name           : 'Day 4',
                index          : 4,
                file           : '/statics/audio/sitting/sitting-4.m4a',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : ['sitting-3'],
                duration       : '5:44',
                durationSeconds: (5 * 60) + 44,
                NEPA           : 600,
            },
            {
                id             : 'sitting-5',
                name           : 'Day 5',
                index          : 5,
                file           : '/statics/audio/sitting/sitting-5.m4a',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : ['sitting-4'],
                duration       : '5:27',
                durationSeconds: (5 * 60) + 27,
                NEPA           : 550,
            },
        ],
    },
    {
        id          : "standing",
        slug        : "standing",
        name        : "Standing",
        category    : "Foundation",
        level       : 1,
        days        : 5,
        // svgSmall    : "/statics/svg/work series/small/sm-desk-flex.svg",
        // svgLarge    : "/statics/svg/work series/large/lg-sat-down.svg",
        // icon        : "flaticon-desk-chair",
        description : `Learn how to work without pain or tiredness.`,
        caption     : "",
        color       : "#a2e4eb",
        pattern     : "/statics/svg/patterns/basics.svg",
        awardsNeeded: [],
        audiosNeeded: [],
        audios      : [
            {
                id             : 'standing-intro',
                name           : 'Intro',
                intro          : true,
                index          : 0,
                file           : '/statics/audio/standing/standing-intro.mp3',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : [],
                duration       : '3:01',
                durationSeconds: (3 * 60) + 1,
                NEPA           : 300,
            },
            {
                id             : 'standing-1',
                name           : 'Day 1',
                index          : 1,
                file           : '/statics/audio/standing/standing-1.mp3',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : [],
                duration       : '5:01',
                durationSeconds: (5 * 60) + 1,
                NEPA           : 500,
            },
            {
                id             : 'standing-2',
                name           : 'Day 2',
                index          : 2,
                file           : '/statics/audio/standing/standing-2.mp3',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : ['standing-1'],
                duration       : '4:56',
                durationSeconds: (4 * 60) + 56,
                NEPA           : 500,
            },
            {
                id             : 'standing-3',
                name           : 'Day 3',
                index          : 3,
                file           : '/statics/audio/standing/standing-3.mp3',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : ['standing-2'],
                duration       : '4:19',
                durationSeconds: (4 * 60) + 10,
                NEPA           : 400,
            },
            {
                id             : 'standing-4',
                name           : 'Day 4',
                index          : 4,
                file           : '/statics/audio/standing/standing-4.mp3',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : ['standing-3'],
                duration       : '4:44',
                durationSeconds: (4 * 60) + 44,
                NEPA           : 500,
            },
            {
                id             : 'standing-5',
                name           : 'Day 5',
                index          : 5,
                file           : '/statics/audio/standing/standing-5.mp3',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : ['standing-4'],
                duration       : '5:14',
                durationSeconds: (5 * 60) + 14,
                NEPA           : 500,
            },
        ],
    },
    {
        id          : "back",
        slug        : "back",
        name        : "Back",
        category    : "Minis",
        level       : 1,
        days        : 1,
        description : `Stiff back? Rounded Spine? Your back is a highway containing all of your nerves. Find comfort in a more neutral spine position, and enjoy greater freedom in minutes.`,
        caption     : "",
        color       : "#ffc3d9",
        pattern     : "/statics/svg/patterns/back.svg",
        awardsNeeded: [],
        audiosNeeded: [],
        audios      : [
            {
                id             : 'back-1',
                name           : 'Mini',
                index          : 1,
                file           : '/statics/audio/back/back-mini-1.m4a',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : [],
                duration       : '1:21',
                durationSeconds: (1 * 60) + 21,
                NEPA           : 100,
            },
        ],
    },
    {
        id          : "neck",
        slug        : "neck",
        name        : "Neck",
        category    : "Minis",
        level       : 1,
        days        : 1,
        icon        : "/statics/svg/session-icon/neck-icon.svg",
        description : `Titling forward or craning your neck too often? Your neck allows your brain to communicate with the rest of your body via the spinal cord. Restore balance and reduce pain in minutes.`,
        caption     : "",
        color       : "#ffcdd2",
        pattern     : "/statics/svg/patterns/neck.svg",
        awardsNeeded: [],
        audiosNeeded: [],
        audios      : [
            {
                id             : 'neck-1',
                name           : 'Mini 1',
                index          : 1,
                file           : '/statics/audio/neck/neck-mini-1.m4a',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : [],
                duration       : '2:56',
                durationSeconds: (2 * 60) + 56,
                NEPA           : 300,
            },
            {
                id             : 'neck-2',
                name           : 'Mini 2',
                index          : 1,
                file           : '/statics/audio/neck/neck-mini-2.m4a',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : [],
                duration       : '3:19',
                durationSeconds: (3 * 60) + 19,
                NEPA           : 350,
            },
        ],
    },
    {
        id          : "shoulders",
        slug        : "shoulders",
        name        : "Shoulders",
        category    : "Minis",
        level       : 1,
        days        : 1,
        icon        : "/statics/svg/session-icon/shoulder-icon.svg",
        description : `Hunched over or stressed out? We carry most of our tension in our shoulders. Release tight muscles and improve your posture in one go with these effective movements in minutes.`,
        caption     : "",
        color       : "#cae7c8",
        pattern     : "/statics/svg/patterns/shoulders-backdrop.svg",
        awardsNeeded: [],
        audiosNeeded: [],
        audios      : [
            {
                id             : 'shoulders-1',
                name           : 'Mini 1',
                index          : 1,
                file           : '/statics/audio/shoulders/shoulders-mini-1.m4a',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : [],
                duration       : '2:02',
                durationSeconds: (2 * 60) + 3,
                NEPA           : 200,
            },
            {
                id             : 'shoulders-2',
                name           : 'Mini-2',
                index          : 1,
                file           : '/statics/audio/shoulders/shoulders-mini-2.m4a',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : [],
                duration       : '2:01',
                durationSeconds: (2 * 60) + 1,
                NEPA           : 200,
            },
        ],
    },
    {
        id          : "knee",
        slug        : "knee",
        name        : "Knee",
        category    : "Minis",
        level       : 1,
        days        : 1,
        icon        : "/statics/svg/session-icon/knee-icon.svg",
        description : `PPainful knees or soar caps? Make them last a lifetime. Give up the grind and show your caps some compassion in these short sessions.`,
        caption     : "",
        color       : "#ffd4c3",
        pattern     : "/statics/svg/patterns/knee.svg",
        awardsNeeded: [],
        audiosNeeded: [],
        audios      : [
            {
                id             : 'knee-1',
                name           : 'Mini',
                index          : 1,
                file           : '/statics/audio/knee/knee-mini-1.m4a',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : [],
                duration       : '1:21',
                durationSeconds: (1 * 60) + 21,
                NEPA           : 100,
            },
        ],
    },
    {
        id          : "ankle",
        slug        : "ankle",
        name        : "Ankle",
        category    : "Minis",
        level       : 1,
        days        : 1,
        icon        : "/statics/svg/session-icon/ankle-icon.svg",
        description : `Rolling your ankles or tight in your joints? They get so little attention yet they do so much. Keep this humble joint from grumbling by rejuvenating your joints and strengthening the surrounding muscles.`,
        caption     : "",
        color       : "#d3f0f3",
        pattern     : "/statics/svg/patterns/ankle.svg",
        awardsNeeded: [],
        audiosNeeded: [],
        audios      : [
            {
                id             : 'ankle-1',
                name           : 'Mini 1 - Dorsiflexion',
                index          : 1,
                file           : '/statics/audio/ankle/ankle-mini-1-dorsiflexion.m4a',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : [],
                duration       : '1:00',
                durationSeconds: (0 * 60) + 55,
                NEPA           : 100,
            },
            {
                id             : 'ankle-2',
                name           : 'Mini 2 - Planter',
                index          : 1,
                file           : '/statics/audio/ankle/ankle-mini-2-planter.m4a',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : [],
                duration       : '1:01',
                durationSeconds: (1 * 60) + 1,
                NEPA           : 100,
            },
        ],
    },
    {
        id          : "hip",
        slug        : "hip",
        name        : "Hip",
        category    : "Minis",
        level       : 1,
        days        : 1,
        icon        : "/statics/svg/session-icon/hip-icon.svg",
        description : `Marathon runner or desk jockey, you've probably got tight hips. The 20 or so muscles that make up your hip are responsible for stabilising your pelvis. Open up your hips and extend your flexors in a few minutes.`,
        caption     : "",
        color       : "#e9daf9",
        pattern     : "/statics/svg/patterns/hip.svg",
        awardsNeeded: [],
        audiosNeeded: [],
        audios      : [
            {
                id             : 'hip-1',
                name           : 'Mini 1',
                index          : 1,
                file           : '/statics/audio/hip/hip-mini-1.m4a',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : [],
                duration       : '1:03',
                durationSeconds: (1 * 60) + 3,
                NEPA           : 100,
            },
        ],
    },
    {
        id          : "feet",
        slug        : "feet",
        name        : "Feet",
        category    : "Minis",
        level       : 1,
        days        : 1,
        icon        : "/statics/svg/session-icon/feet-icon.svg",
        description : `Not got a spring in your step or have an arch enemy? The soft tissue and joints in your feet can tighten when inactive and especially overnight. Treat your feet, awaken your arches and improve your balance in minutes.`,
        caption     : "",
        color       : "#cbecff",
        pattern     : "/statics/svg/patterns/foot.svg",
        awardsNeeded: [],
        audiosNeeded: [],
        audios      : [
            {
                id             : 'feet-1',
                name           : 'Mini 1',
                index          : 1,
                file           : '/statics/audio/feet/feet-mini-1.m4a',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : [],
                duration       : '1:01',
                durationSeconds: (1 * 60) + 1,
                NEPA           : 100,
            },
            {
                id             : 'feet-2',
                name           : 'Mini 2',
                index          : 2,
                file           : '/statics/audio/feet/feet-mini-2.m4a',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : [],
                duration       : '1:15',
                durationSeconds: (1 * 60) + 15,
                NEPA           : 150,
            },
        ],
    },
    {
        id          : "wrist",
        slug        : "wrist",
        name        : "Wrist",
        category    : "Minis",
        level       : 1,
        days        : 1,
        icon        : "/statics/svg/session-icon/wrist-icon.svg",
        description : `Aching wrists? Repetitive Strain Injury (RSI) in the wrists is common among those who type and click all day. Rejuvenate your joints with these simple stretches.`,
        caption     : "",
        color       : "#c3daff",
        pattern     : "/statics/svg/patterns/wiggle.svg",
        awardsNeeded: [],
        audiosNeeded: [],
        audios      : [
            {
                id             : 'wrist-1',
                name           : 'Mini 1',
                index          : 1,
                file           : '/statics/audio/wrist/wrist-mini-1.m4a',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : [],
                duration       : '1:49',
                durationSeconds: (1 * 60) + 49,
                NEPA           : 200,
            },
            {
                id             : 'wrist-1',
                name           : 'Mini-2',
                index          : 1,
                file           : '/statics/audio/wrist/wrist-mini-2.m4a',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : [],
                duration       : '2:08',
                durationSeconds: (2 * 60) + 8,
                NEPA           : 200,
            },
        ],
    },
    {
        id          : "mindset",
        slug        : "mindset",
        name        : "Mindset",
        category    : "Minis",
        level       : 1,
        days        : 1,
        icon        : "/statics/svg/session-icon/mindset-icon.svg",
        description : `A little bit blurred with your thoughts? A tired mind is not a happy one. Return to centre and embrace a growth mindset in minutes.`,
        caption     : "",
        color       : "#97c2fd",
        pattern     : "/statics/svg/patterns/mindset.svg",
        awardsNeeded: [],
        audiosNeeded: [],
        audios      : [
            {
                id             : 'mindset-1',
                name           : 'Mini 1',
                index          : 1,
                file           : '/statics/audio/mindset/mindset-mini-1.m4a',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : [],
                duration       : '2:01',
                durationSeconds: (2 * 60) + 1,
                NEPA           : 200,
            },
            {
                id             : 'mindset-2',
                name           : 'Mini 2',
                index          : 2,
                file           : '/statics/audio/mindset/mindset-mini-2.m4a',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : [],
                duration       : '2:13',
                durationSeconds: (2 * 60) + 13,
                NEPA           : 200,
            },
            {
                id             : 'mindset-3',
                name           : 'Mini 3',
                index          : 3,
                file           : '/statics/audio/mindset/mindset-mini-3.m4a',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : [],
                duration       : '1:35',
                durationSeconds: (1 * 60) + 35,
                NEPA           : 150,
            },
            {
                id             : 'mindset-full',
                name           : 'Mini Full',
                index          : 4,
                file           : '/statics/audio/mindset/mindset-mini-full.m4a',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : [],
                duration       : '2:43',
                durationSeconds: (2 * 60) + 43,
                NEPA           : 300,
            },
        ],
    },
    {
        id          : "extend",
        slug        : "extend",
        name        : "Extend",
        category    : "Growth",
        level       : 1,
        days        : 1,
        icon        : "/statics/svg/session-icon/extend-icon.svg",
        description : `Hunching your extend all day? …`,
        caption     : "",
        color       : "#ffe4b8",
        pattern     : "/statics/svg/patterns/growth.svg",
        awardsNeeded: [],
        audiosNeeded: [],
        audios      : [
            {
                id             : 'extend-1',
                name           : 'Day 1',
                index          : 1,
                file           : '/statics/audio/take-a-seat-lv01-s01.mp3',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : [],
                duration       : '1:21',
                durationSeconds: (1 * 60) + 21,
                NEPA           : 100,
            },
        ],
    },
    {
        id          : "motion",
        slug        : "motion",
        name        : "Motion",
        category    : "Growth",
        level       : 1,
        days        : 1,
        icon        : "/statics/svg/session-icon/motion-icon.svg",
        description : `Hunching your motion all day? …`,
        caption     : "",
        color       : "#ffe4b8",
        pattern     : "/statics/svg/patterns/growth.svg",
        awardsNeeded: [],
        audiosNeeded: [],
        audios      : [
            {
                id             : 'motion-1',
                name           : 'Day 1',
                index          : 1,
                file           : '/statics/audio/take-a-seat-lv01-s01.mp3',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : [],
                duration       : '1:21',
                durationSeconds: (1 * 60) + 21,
                NEPA           : 100,
            },
        ],
    },


    // {
    //     slug        : "desk-flex",
    //     name        : "Basics",
    //     category    : "Basics",
    //     level       : 1,
    //     svgSmall    : "/statics/svg/work series/small/sm-desk-flex.svg",
    //     svgLarge    : "/statics/svg/work series/large/lg-sat-down.svg",
    //     icon        : "flaticon-desk-chair",
    //     description : `Learn how to work without pain or tiredness.`,
    //     caption     : "",
    //     color       : "#a2e4eb",
    //     pattern     : "/statics/svg/patterns/basics.svg",
    //     awardsNeeded: [],
    //     audiosNeeded: [],
    //     audios      : [
    //         {
    //             id             : 'sat-at-work-01-01',
    //             index          : 1,
    //             file           : '/statics/audio/take-a-seat-lv01-s01.mp3',
    //             awardsNeeded   : [],
    //             awardsGiven    : [],
    //             audiosNeeded   : [],
    //             duration       : '6:31',
    //             durationSeconds: (6 * 60) + 31,
    //             NEPA           : 100,
    //         },
    //     ],
    // },

    // {
    //     slug        : "standing",
    //     name        : "Basics",
    //     category    : "Basics",
    //     level       : 1,
    //     svgSmall    : "/statics/svg/work series/small/sm-desk-flex.svg",
    //     svgLarge    : "/statics/svg/work series/large/lg-sat-down.svg",
    //     icon        : "flaticon-desk-chair",
    //     description : `Integrate active movement whilst sat at your desk, reducing stress and boosting your posture, focus, productivity and happiness.`,
    //     caption     : "",
    //     color       : "#a2e4eb",
    //     pattern     : "/statics/svg/patterns/basics.svg",
    //     awardsNeeded: [],
    //     audiosNeeded: [],
    //     audios      : [
    //         {
    //             id          : 'sat-at-work-01-01',
    //             index       : 1,
    //             file        : '/statics/audio/take-a-seat-lv01-s01.mp3',
    //             awardsNeeded: [],
    //             awardsGiven : ['first-timer'],
    //             audiosNeeded: [],
    //             lungLove    : 100,
    //             brainBoost  : 100,
    //             CalsCrushed : 100,
    //             alignAce    : 100,
    //         },
    //         {
    //             id          : 'sat-at-work-01-02',
    //             index       : 2,
    //             file        : '/statics/audio/jwc-10.mp3',
    //             awardsNeeded: [],
    //             awardsGiven : [],
    //             audiosNeeded: ['sat-at-work-01-01'],
    //             lungLove    : 100,
    //             brainBoost  : 100,
    //             CalsCrushed : 100,
    //             alignAce    : 100,
    //         },
    //     ],
    // },
    // {
    //     slug        : "walking",
    //     name        : "Walking",
    //     category    : "Basics",
    //     level       : 1,
    //     svgSmall    : "/statics/svg/work series/small/sm-desk-flex.svg",
    //     svgLarge    : "/statics/svg/work series/large/lg-sat-down.svg",
    //     icon        : "flaticon-desk-chair",
    //     description : `Integrate active movement whilst sat at your desk, reducing stress and boosting your posture, focus, productivity and happiness.`,
    //     caption     : "",
    //     color       : "#a2e4eb",
    //     pattern     : "/statics/svg/patterns/bubbles.svg",
    //     awardsNeeded: [],
    //     audiosNeeded: [],
    //     audios      : [
    //         {
    //             id          : 'sat-at-work-01-01',
    //             index       : 1,
    //             file        : '/statics/audio/take-a-seat-lv01-s01.mp3',
    //             awardsNeeded: [],
    //             awardsGiven : ['first-timer'],
    //             audiosNeeded: [],
    //             lungLove    : 100,
    //             brainBoost  : 100,
    //             CalsCrushed : 100,
    //             alignAce    : 100,
    //         },
    //         {
    //             id          : 'sat-at-work-01-02',
    //             index       : 2,
    //             file        : '/statics/audio/jwc-10.mp3',
    //             awardsNeeded: [],
    //             awardsGiven : [],
    //             audiosNeeded: ['sat-at-work-01-01'],
    //             lungLove    : 100,
    //             brainBoost  : 100,
    //             CalsCrushed : 100,
    //             alignAce    : 100,
    //         },
    //     ],
    // },
    // {
    //     slug        : "sleeping",
    //     name        : "Sleeping",
    //     category    : "Basics",
    //     level       : 1,
    //     svgSmall    : "/statics/svg/work series/small/sm-desk-flex.svg",
    //     svgLarge    : "/statics/svg/work series/large/lg-sat-down.svg",
    //     icon        : "flaticon-desk-chair",
    //     description : `Integrate active movement whilst sat at your desk, reducing stress and boosting your posture, focus, productivity and happiness.`,
    //     caption     : "",
    //     color       : "#f2dbb5",
    //     pattern     : "/statics/svg/patterns/bubbles.svg",
    //     awardsNeeded: [],
    //     audiosNeeded: [],
    //     audios      : [
    //         {
    //             id          : 'sat-at-work-01-01',
    //             index       : 1,
    //             file        : '/statics/audio/take-a-seat-lv01-s01.mp3',
    //             awardsNeeded: [],
    //             awardsGiven : ['first-timer'],
    //             audiosNeeded: [],
    //             lungLove    : 100,
    //             brainBoost  : 100,
    //             CalsCrushed : 100,
    //             alignAce    : 100,
    //         },
    //         {
    //             id          : 'sat-at-work-01-02',
    //             index       : 2,
    //             file        : '/statics/audio/jwc-10.mp3',
    //             awardsNeeded: [],
    //             awardsGiven : [],
    //             audiosNeeded: ['sat-at-work-01-01'],
    //             lungLove    : 100,
    //             brainBoost  : 100,
    //             CalsCrushed : 100,
    //             alignAce    : 100,
    //         },
    //     ],
    // },
    // {
    //     slug        : "breathe-easy",
    //     name        : "Breathe Easy",
    //     category    : "Mini Series",
    //     level       : 1,
    //     svgSmall    : "/statics/svg/work series/small/sm-desk-flex.svg",
    //     svgLarge    : "/statics/svg/work series/large/lg-sat-down.svg",
    //     icon        : "flaticon-desk-chair",
    //     description : `Take 1 minute to quickly improve your posture and wellness anywhere`,
    //     caption     : "",
    //     color       : "#ffc3ca",
    //     pattern     : "/statics/svg/patterns/overlapping-circles.svg",
    //     awardsNeeded: [],
    //     audiosNeeded: [],
    //     audios      : [
    //         {
    //             id          : 'sat-at-work-01-01',
    //             index       : 1,
    //             file        : '/statics/audio/take-a-seat-lv01-s01.mp3',
    //             awardsNeeded: [],
    //             awardsGiven : ['first-timer'],
    //             audiosNeeded: [],
    //             lungLove    : 100,
    //             brainBoost  : 100,
    //             CalsCrushed : 100,
    //             alignAce    : 100,
    //         },
    //         {
    //             id          : 'sat-at-work-01-02',
    //             index       : 2,
    //             file        : '/statics/audio/jwc-10.mp3',
    //             awardsNeeded: [],
    //             awardsGiven : [],
    //             audiosNeeded: ['sat-at-work-01-01'],
    //             lungLove    : 100,
    //             brainBoost  : 100,
    //             CalsCrushed : 100,
    //             alignAce    : 100,
    //         },
    //     ],
    // },
    // {
    //     slug        : "neck-release",
    //     name        : "Neck Release",
    //     category    : "Mini Series",
    //     level       : 1,
    //     svgSmall    : "/statics/svg/work series/small/sm-desk-flex.svg",
    //     svgLarge    : "/statics/svg/work series/large/lg-sat-down.svg",
    //     icon        : "flaticon-desk-chair",
    //     description : `Integrate active movement whilst sat at your desk, reducing stress and boosting your posture, focus, productivity and happiness.`,
    //     caption     : "",
    //     color       : "#fbd69a",
    //     pattern     : "/statics/svg/patterns/line-in-motion.svg",
    //     awardsNeeded: [],
    //     audiosNeeded: [],
    //     audios      : [
    //         {
    //             id          : 'sat-at-work-01-01',
    //             index       : 1,
    //             file        : '/statics/audio/take-a-seat-lv01-s01.mp3',
    //             awardsNeeded: [],
    //             awardsGiven : ['first-timer'],
    //             audiosNeeded: [],
    //             lungLove    : 100,
    //             brainBoost  : 100,
    //             CalsCrushed : 100,
    //             alignAce    : 100,
    //         },
    //     ],
    // },
    // {
    //     slug        : "hip-opener",
    //     name        : "Hip Opener",
    //     category    : "Mini Series",
    //     level       : 1,
    //     svgSmall    : "/statics/svg/work series/small/sm-desk-flex.svg",
    //     svgLarge    : "/statics/svg/work series/large/lg-sat-down.svg",
    //     icon        : "flaticon-desk-chair",
    //     description : <div>Hip flexors - Glute Strengthening - Balance Boost</div>,
    //     caption     : "",
    //     color       : "#dfcae7",
    //     pattern     : "/statics/svg/patterns/yyy.svg",
    //     awardsNeeded: [],
    //     audiosNeeded: [],
    //     audios      : [
    //         {
    //             id          : 'sat-at-work-01-01',
    //             index       : 1,
    //             file        : '/statics/audio/take-a-seat-lv01-s01.mp3',
    //             awardsNeeded: [],
    //             awardsGiven : ['first-timer'],
    //             audiosNeeded: [],
    //             lungLove    : 100,
    //             brainBoost  : 100,
    //             CalsCrushed : 100,
    //             alignAce    : 100,
    //         },
    //     ],
    // },
    // {
    //     slug        : "wake-up-brighter",
    //     name        : "Wake Up Brighter",
    //     category    : "Sleep Series",
    //     level       : 1,
    //     svgSmall    : "/statics/svg/work series/small/sm-desk-flex.svg",
    //     svgLarge    : "/statics/svg/work series/large/lg-sat-down.svg",
    //     icon        : "flaticon-desk-chair",
    //     description : `Not sleeping? Learn how to fall asleep faster without any stress`,
    //     caption     : "",
    //     color       : "#86a6d3",
    //     pattern     : "/statics/svg/patterns/4-point-stars.svg",
    //     awardsNeeded: [],
    //     audiosNeeded: [],
    //     audios      : [
    //         {
    //             id          : 'sat-at-work-01-01',
    //             index       : 1,
    //             file        : '/statics/audio/take-a-seat-lv01-s01.mp3',
    //             awardsNeeded: [],
    //             awardsGiven : ['first-timer'],
    //             audiosNeeded: [],
    //             lungLove    : 100,
    //             brainBoost  : 100,
    //             CalsCrushed : 100,
    //             alignAce    : 100,
    //         },
    //     ],
    // },
];

export default SESSIONS;