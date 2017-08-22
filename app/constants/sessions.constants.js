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
        // svgLarge    : "/statics/svg/work series/large/lg-sat-down.svg",
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
                index          : 0,
                file           : '/statics/audio/sitting/sitting-intro.m4a',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : [],
                duration       : '1:30',
                durationSeconds: (1 * 60) + 30,
                NEAT           : 50,
            },
            {
                id             : 'sitting-1',
                name           : 'Day 1',
                index          : 1,
                file           : '/statics/audio/take-a-seat-lv01-s01.mp3',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : [],
                duration       : '6:31',
                durationSeconds: (6 * 60) + 31,
                NEAT           : 650,
            },
            {
                id             : 'sitting-2',
                name           : 'Day 2',
                index          : 2,
                file           : '/statics/audio/take-a-seat-lv01-s01.mp3',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : ['sitting-1'],
                duration       : '6:31',
                durationSeconds: (6 * 60) + 31,
                NEAT           : 650,
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
                index          : 1,
                file           : '/statics/audio/sitting/sitting-intro.m4a',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : [],
                duration       : '1:30',
                durationSeconds: (1 * 60) + 30,
                NEAT           : 50,
            },
            {
                id             : 'standing-1',
                name           : 'Day 1',
                index          : 1,
                file           : '/statics/audio/standing/standing-1.mp3',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : [],
                duration       : '6:02',
                durationSeconds: (6 * 60) + 2,
                NEAT           : 600,
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
        // svgSmall    : "/statics/svg/work series/small/sm-desk-flex.svg",
        // svgLarge    : "/statics/svg/work series/large/lg-sat-down.svg",
        // icon        : "flaticon-desk-chair",
        description : `Arching your back all day? …`,
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
                file           : '/statics/audio/back/back-mini.m4a',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : [],
                duration       : '1:21',
                durationSeconds: (1 * 60) + 21,
                NEAT           : 100,
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
        description : `Tilting your neck too often? … `,
        caption     : "",
        color       : "#ffcdd2",
        pattern     : "/statics/svg/patterns/neck.svg",
        awardsNeeded: [],
        audiosNeeded: [],
        audios      : [
            {
                id             : 'neck-1',
                name           : 'Mini',
                index          : 1,
                file           : '/statics/audio/take-a-seat-lv01-s01.mp3',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : [],
                duration       : '1:21',
                durationSeconds: (1 * 60) + 21,
                NEAT           : 100,
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
        description : `Hunching your shoulders all day? …`,
        caption     : "",
        color       : "#cae7c8",
        pattern     : "/statics/svg/patterns/neck.svg",
        awardsNeeded: [],
        audiosNeeded: [],
        audios      : [
            {
                id             : 'shoulders-1',
                name           : 'Mini',
                index          : 1,
                file           : '/statics/audio/take-a-seat-lv01-s01.mp3',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : [],
                duration       : '1:21',
                durationSeconds: (1 * 60) + 21,
                NEAT           : 100,
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
        description : `Hunching your knee all day? …`,
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
                file           : '/statics/audio/take-a-seat-lv01-s01.mp3',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : [],
                duration       : '1:21',
                durationSeconds: (1 * 60) + 21,
                NEAT           : 100,
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
        description : `Hunching your wrist all day? …`,
        caption     : "",
        color       : "#c3daff",
        pattern     : "/statics/svg/patterns/wiggle.svg",
        awardsNeeded: [],
        audiosNeeded: [],
        audios      : [
            {
                id             : 'wrist-1',
                name           : 'Mini',
                index          : 1,
                file           : '/statics/audio/take-a-seat-lv01-s01.mp3',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : [],
                duration       : '1:21',
                durationSeconds: (1 * 60) + 21,
                NEAT           : 100,
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
        description : `Hunching your mindset all day? …`,
        caption     : "",
        color       : "#97c2fd",
        pattern     : "/statics/svg/patterns/mindset.svg",
        awardsNeeded: [],
        audiosNeeded: [],
        audios      : [
            {
                id             : 'mindset-1',
                name           : 'Mini',
                index          : 1,
                file           : '/statics/audio/take-a-seat-lv01-s01.mp3',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : [],
                duration       : '1:21',
                durationSeconds: (1 * 60) + 21,
                NEAT           : 100,
            },
        ],
    },
    {
        id          : "extend",
        slug        : "extend",
        name        : "Extend",
        category    : "Growth",
        level       : 1,
        days        : 5,
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
                NEAT           : 100,
            },
        ],
    },
    {
        id          : "motion",
        slug        : "motion",
        name        : "Motion",
        category    : "Growth",
        level       : 1,
        days        : 5,
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
                NEAT           : 100,
            },
        ],
    },






    {
        slug        : "desk-flex",
        name        : "Basics",
        category    : "Basics",
        level       : 1,
        svgSmall    : "/statics/svg/work series/small/sm-desk-flex.svg",
        svgLarge    : "/statics/svg/work series/large/lg-sat-down.svg",
        icon        : "flaticon-desk-chair",
        description : `Learn how to work without pain or tiredness.`,
        caption     : "",
        color       : "#a2e4eb",
        pattern     : "/statics/svg/patterns/basics.svg",
        awardsNeeded: [],
        audiosNeeded: [],
        audios      : [
            {
                id             : 'sat-at-work-01-01',
                index          : 1,
                file           : '/statics/audio/take-a-seat-lv01-s01.mp3',
                awardsNeeded   : [],
                awardsGiven    : [],
                audiosNeeded   : [],
                duration       : '6:31',
                durationSeconds: (6 * 60) + 31,
                NEAT           : 100,
            },
        ],
    },
    {
        slug        : "standing",
        name        : "Basics",
        category    : "Basics",
        level       : 1,
        svgSmall    : "/statics/svg/work series/small/sm-desk-flex.svg",
        svgLarge    : "/statics/svg/work series/large/lg-sat-down.svg",
        icon        : "flaticon-desk-chair",
        description : `Integrate active movement whilst sat at your desk, reducing stress and boosting your posture, focus, productivity and happiness.`,
        caption     : "",
        color       : "#a2e4eb",
        pattern     : "/statics/svg/patterns/basics.svg",
        awardsNeeded: [],
        audiosNeeded: [],
        audios      : [
            {
                id          : 'sat-at-work-01-01',
                index       : 1,
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
                index       : 2,
                file        : '/statics/audio/jwc-10.mp3',
                awardsNeeded: [],
                awardsGiven : [],
                audiosNeeded: ['sat-at-work-01-01'],
                lungLove    : 100,
                brainBoost  : 100,
                CalsCrushed : 100,
                alignAce    : 100,
            },
        ],
    },
    {
        slug        : "walking",
        name        : "Walking",
        category    : "Basics",
        level       : 1,
        svgSmall    : "/statics/svg/work series/small/sm-desk-flex.svg",
        svgLarge    : "/statics/svg/work series/large/lg-sat-down.svg",
        icon        : "flaticon-desk-chair",
        description : `Integrate active movement whilst sat at your desk, reducing stress and boosting your posture, focus, productivity and happiness.`,
        caption     : "",
        color       : "#a2e4eb",
        pattern     : "/statics/svg/patterns/bubbles.svg",
        awardsNeeded: [],
        audiosNeeded: [],
        audios      : [
            {
                id          : 'sat-at-work-01-01',
                index       : 1,
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
                index       : 2,
                file        : '/statics/audio/jwc-10.mp3',
                awardsNeeded: [],
                awardsGiven : [],
                audiosNeeded: ['sat-at-work-01-01'],
                lungLove    : 100,
                brainBoost  : 100,
                CalsCrushed : 100,
                alignAce    : 100,
            },
        ],
    },
    {
        slug        : "sleeping",
        name        : "Sleeping",
        category    : "Basics",
        level       : 1,
        svgSmall    : "/statics/svg/work series/small/sm-desk-flex.svg",
        svgLarge    : "/statics/svg/work series/large/lg-sat-down.svg",
        icon        : "flaticon-desk-chair",
        description : `Integrate active movement whilst sat at your desk, reducing stress and boosting your posture, focus, productivity and happiness.`,
        caption     : "",
        color       : "#f2dbb5",
        pattern     : "/statics/svg/patterns/bubbles.svg",
        awardsNeeded: [],
        audiosNeeded: [],
        audios      : [
            {
                id          : 'sat-at-work-01-01',
                index       : 1,
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
                index       : 2,
                file        : '/statics/audio/jwc-10.mp3',
                awardsNeeded: [],
                awardsGiven : [],
                audiosNeeded: ['sat-at-work-01-01'],
                lungLove    : 100,
                brainBoost  : 100,
                CalsCrushed : 100,
                alignAce    : 100,
            },
        ],
    },
    {
        slug        : "breathe-easy",
        name        : "Breathe Easy",
        category    : "Mini Series",
        level       : 1,
        svgSmall    : "/statics/svg/work series/small/sm-desk-flex.svg",
        svgLarge    : "/statics/svg/work series/large/lg-sat-down.svg",
        icon        : "flaticon-desk-chair",
        description : `Take 1 minute to quickly improve your posture and wellness anywhere`,
        caption     : "",
        color       : "#ffc3ca",
        pattern     : "/statics/svg/patterns/overlapping-circles.svg",
        awardsNeeded: [],
        audiosNeeded: [],
        audios      : [
            {
                id          : 'sat-at-work-01-01',
                index       : 1,
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
                index       : 2,
                file        : '/statics/audio/jwc-10.mp3',
                awardsNeeded: [],
                awardsGiven : [],
                audiosNeeded: ['sat-at-work-01-01'],
                lungLove    : 100,
                brainBoost  : 100,
                CalsCrushed : 100,
                alignAce    : 100,
            },
        ],
    },
    {
        slug        : "neck-release",
        name        : "Neck Release",
        category    : "Mini Series",
        level       : 1,
        svgSmall    : "/statics/svg/work series/small/sm-desk-flex.svg",
        svgLarge    : "/statics/svg/work series/large/lg-sat-down.svg",
        icon        : "flaticon-desk-chair",
        description : `Integrate active movement whilst sat at your desk, reducing stress and boosting your posture, focus, productivity and happiness.`,
        caption     : "",
        color       : "#fbd69a",
        pattern     : "/statics/svg/patterns/line-in-motion.svg",
        awardsNeeded: [],
        audiosNeeded: [],
        audios      : [
            {
                id          : 'sat-at-work-01-01',
                index       : 1,
                file        : '/statics/audio/take-a-seat-lv01-s01.mp3',
                awardsNeeded: [],
                awardsGiven : ['first-timer'],
                audiosNeeded: [],
                lungLove    : 100,
                brainBoost  : 100,
                CalsCrushed : 100,
                alignAce    : 100,
            },
        ],
    },
    {
        slug        : "hip-opener",
        name        : "Hip Opener",
        category    : "Mini Series",
        level       : 1,
        svgSmall    : "/statics/svg/work series/small/sm-desk-flex.svg",
        svgLarge    : "/statics/svg/work series/large/lg-sat-down.svg",
        icon        : "flaticon-desk-chair",
        description : <div>Hip flexors - Glute Strengthening - Balance Boost</div>,
        caption     : "",
        color       : "#dfcae7",
        pattern     : "/statics/svg/patterns/yyy.svg",
        awardsNeeded: [],
        audiosNeeded: [],
        audios      : [
            {
                id          : 'sat-at-work-01-01',
                index       : 1,
                file        : '/statics/audio/take-a-seat-lv01-s01.mp3',
                awardsNeeded: [],
                awardsGiven : ['first-timer'],
                audiosNeeded: [],
                lungLove    : 100,
                brainBoost  : 100,
                CalsCrushed : 100,
                alignAce    : 100,
            },
        ],
    },
    {
        slug        : "wake-up-brighter",
        name        : "Wake Up Brighter",
        category    : "Sleep Series",
        level       : 1,
        svgSmall    : "/statics/svg/work series/small/sm-desk-flex.svg",
        svgLarge    : "/statics/svg/work series/large/lg-sat-down.svg",
        icon        : "flaticon-desk-chair",
        description : `Not sleeping? Learn how to fall asleep faster without any stress`,
        caption     : "",
        color       : "#86a6d3",
        pattern     : "/statics/svg/patterns/4-point-stars.svg",
        awardsNeeded: [],
        audiosNeeded: [],
        audios      : [
            {
                id          : 'sat-at-work-01-01',
                index       : 1,
                file        : '/statics/audio/take-a-seat-lv01-s01.mp3',
                awardsNeeded: [],
                awardsGiven : ['first-timer'],
                audiosNeeded: [],
                lungLove    : 100,
                brainBoost  : 100,
                CalsCrushed : 100,
                alignAce    : 100,
            },
        ],
    },
];

export default SESSIONS;