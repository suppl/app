import * as ACTIONS from '../constants/actions.constants';
import * as Request from 'superagent';
import * as _ from "lodash";

import {Dispatch, State, CreateReducer} from './../services/dispatch.service';
import SessionList from './../services/session.service';
import * as FEED_ACTIONS from "../constants/feed.constants";

class ProfileReducer {
    initialState = {
        defaultUserId : undefined,
        user          : {},
        feed          : [],
        avatarsVisible: false,
    };

    actions = {
        [ACTIONS.SET_PROFILE_DEFAULT_ID]: (action, state) => ({defaultUserId: action.userId}),
        [ACTIONS.SET_PROFILE_USER]      : (action, state) => ({user: action.user}),
        [ACTIONS.SET_PROFILE_FEED]      : (action, state) => ({feed: action.feed}),
        [ACTIONS.SHOW_PROFILE_AVATARS]  : (action, state) => ({avatarsVisible: true}),
        [ACTIONS.HIDE_PROFILE_AVATARS]  : (action, state) => ({avatarsVisible: false}),
        [ACTIONS.TOGGLE_PROFILE_AVATARS]: (action, state) => ({avatarsVisible: !state.avatarsVisible}),
        [ACTIONS.LOAD_PROFILE_BY_ID]    : this.loadProfile,
        [ACTIONS.SET_PROFILE_AVATAR]    : this.setAvatar,
    };

    constructor() {
        this.initProfile();
    }

    setAvatar(action, state) {
        const user = firebase.auth().currentUser;
        const standardUserRef = firebase.database().ref(`users/${user.uid}`);

        standardUserRef.update({avatar:action.avatar});

        return {avatarsVisible: false}
    }


    loadProfile(action, state) {
        Dispatch({type: ACTIONS.SET_PROFILE_USER, user: {}});
        Dispatch({type: ACTIONS.SET_PROFILE_FEED, feed: []});

        const userId  = action.userId || state.defaultUserId;
        const userRef = firebase.database().ref(`public/users/${userId}`);
        userRef.on('value', (snapshot) => {
            let user = snapshot.val();

            const feedRef = firebase.database().ref(`feed/`).orderByChild('user').equalTo(user.uid).limitToLast(30);
            feedRef.on('value', (snapshot) => {
                let feed = [];

                if (snapshot.val()) feed = Object.values(snapshot.val()).reverse();

                Dispatch({type: ACTIONS.SET_PROFILE_USER, user: user});
                Dispatch({type: ACTIONS.SET_PROFILE_FEED, feed: feed});
            });
        });
    }

    initProfile(action, state) {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) return;
            Dispatch({type: ACTIONS.SET_PROFILE_DEFAULT_ID, userId: user.uid});
            Dispatch({type: ACTIONS.LOAD_PROFILE_BY_ID, userId: user.uid});
        });
    }
}

export default CreateReducer('ProfileReducer', new ProfileReducer());