import * as ACTIONS from '../constants/actions.constants';
import * as Request from 'superagent';
import * as _ from "lodash";

import {Dispatch, State, CreateReducer} from './../services/dispatch.service';
import SessionList from './../services/session.service';
import * as FEED_ACTIONS from "../constants/feed.constants";

class PublicReducer {
    initialState = {
        online     : [],
        onlineCount: 0,
        users      : [],
        user       : {},
    };

    actions = {
        [ACTIONS.SET_ONLINE_STATUS]: (action, state) => ({online: action.online}),
        [ACTIONS.SET_ONLINE_COUNT] : (action, state) => ({onlineCount: action.onlineCount}),
        [ACTIONS.SET_PUBLIC_USERS] : (action, state) => ({users: action.users}),
        [ACTIONS.SET_PUBLIC_USER]  : (action, state) => ({user: action.user}),
        [ACTIONS.LOAD_PUBLIC_USERS]: this.loadUsers,
    };

    constructor() {
        this.loadUsers();
        this.initOnlineCount();
        this.updatePublicData();
    }

    loadUsers(action, state) {
        const publicUserRef = firebase.database().ref(`public/users`);

        publicUserRef.on('value', (snapshot) => {
            if (!snapshot.val()) return;

            const users = Object.values(snapshot.val());

            Dispatch({type: ACTIONS.SET_PUBLIC_USERS, users: users});
        });
    }

    updatePublicData() {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) return;

            const standardUserRef = firebase.database().ref(`users/${user.uid}`);
            const publicUserRef   = firebase.database().ref(`public/users/${user.uid}`);

            standardUserRef.on('value', (snapshot) => {
                if (!snapshot.val()) {
                    publicUserRef.update({name: user.displayName});
                    return;
                }

                let standardUserData = snapshot.val();
                // console.info('standardUserData', standardUserData);

                let publicData = {
                    uid    : user.uid,
                    name   : user.displayName,
                    awards : standardUserData.awards,
                    history: standardUserData.history,
                    done   : standardUserData.done,
                    info   : standardUserData.info,
                    streak : standardUserData.streak,
                };

                console.error('public data', publicData);

                let userObject = _.omitBy(publicData, _.isUndefined);

                Dispatch({type: ACTIONS.SET_PUBLIC_USER, user: userObject});

                Dispatch({
                    type      : ACTIONS.ADD_FEED_ITEM,
                    feedAction: FEED_ACTIONS.SIGNED_IN,
                    user      : userObject,
                });

                publicUserRef.update(userObject);
            });
        });
    }

    initOnlineCount() {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) return;

            const connectedRef = firebase.database().ref('.info/connected');
            const userRef      = firebase.database().ref(`public/online/${user.uid}`);

            connectedRef.on('value', (snapshot) => {
                if (!snapshot.val()) return;

                userRef.onDisconnect().remove();
                userRef.set({name: user.displayName});
            });
        });

        const listRef = firebase.database().ref("public/online");

        // Number of online users is the number of objects in the presence list.
        listRef.on("value", function (snapshot) {
            Dispatch({type: ACTIONS.SET_ONLINE_STATUS, online: snapshot.val()});
            Dispatch({type: ACTIONS.SET_ONLINE_COUNT, onlineCount: snapshot.numChildren()});
            // console.log("online status = ", snapshot.val());
            console.log("# of online users = ", snapshot.numChildren());
        });
    }
}


export default CreateReducer('Public', new PublicReducer());