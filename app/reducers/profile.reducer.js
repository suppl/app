import * as ACTIONS from '../constants/actions.constants';
import * as Request from 'superagent';
import * as _ from "lodash";

import {Dispatch, State, CreateReducer} from './../services/dispatch.service';
import SessionList from './../services/session.service';
import * as FEED_ACTIONS from "../constants/feed.constants";

class ProfileReducer {
    initialState = {
        defaultUserId: undefined,
        user  : {},
        feed  : [],
    };

    actions = {
        [ACTIONS.SET_PROFILE_DEFAULT_ID]: (action, state) => ({defaultUserId: action.userId}),
        [ACTIONS.SET_PROFILE_USER]      : (action, state) => ({user: action.user}),
        [ACTIONS.SET_PROFILE_FEED]      : (action, state) => ({feed: action.feed}),
        [ACTIONS.LOAD_PROFILE_BY_ID]    : this.loadProfile,
    };

    constructor() {
        this.initProfile();
    }

    loadProfile(action, state) {
        Dispatch({type: ACTIONS.SET_PROFILE_USER, user: {}});
        Dispatch({type: ACTIONS.SET_PROFILE_FEED, feed: []});

        const userId  = action.userId || state.defaultUserId;
        const userRef = firebase.database().ref(`public/users/${userId}`);
        userRef.on('value', (snapshot) => {
            let user = snapshot.val();

            const feedRef = firebase.database().ref(`feed/`).orderByChild('user').equalTo(user.uid).limitToLast(10);
            feedRef.on('value', (snapshot) => {
                let feed = Object.values(snapshot.val()).reverse();

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