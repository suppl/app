import * as ACTIONS from '../constants/actions.constants';
import * as Request from 'superagent';
import * as _ from "lodash";

import {Dispatch, State, CreateReducer} from './../services/dispatch.service';
import SessionList from './../services/session.service';
import * as FEED_ACTIONS from "../constants/feed.constants";

class AccountReducer {
    initialState = {
        currentTab: 'personal',
        // username  : '',
        name      : '',
        email     : '',
        role      : '',
        workHours : '',
        workStyle : '',
    };

    actions = {
        [ACTIONS.LOAD_ACCOUNT_DETAILS]: this.loadAccount,
        [ACTIONS.SET_ACCOUNT_DETAILS] : this.setAccount,
        [ACTIONS.SAVE_ACCOUNT_DETAILS]: this.saveAccount,
    };

    constructor() {
        this.loadAccount();
    }

    async saveAccount(action, state) {
        const user            = firebase.auth().currentUser;
        const standardUserRef = firebase.database().ref(`users/${user.uid}`);

        let obj = _.omitBy({
            // username: state.username,
            info    : {
                role     : state.role,
                workHours: state.workHours,
                workStyle: state.workStyle,
            },
        }, _.isUndefined);

        if (state.name != user.displayName) {
            await user.updateProfile({displayName: state.name,});
        }
        // if (state.email != user.email) {
        //     user.updateEmail(state.email);
        // }

        // user.reauthenticateWithPopup(firebase.auth.EmailAuthProvider);

        await standardUserRef.update(obj);

        Dispatch({type: ACTIONS.SHOW_NOTIFICATION, message: "Account updated"});
    }

    setAccount(action, state) {
        let obj = _.extend({}, {}, action);
        delete obj.type;

        return obj;
    }

    loadAccount(action, state) {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) return;

            let details = {
                name : user.displayName,
                email: user.email,
            };

            Dispatch({type: ACTIONS.SET_ACCOUNT_DETAILS, ...details});

            const standardUserRef = firebase.database().ref(`users/${user.uid}`);

            standardUserRef.on('value', (snapshot) => {
                if (!snapshot.val()) return;

                let data = snapshot.val();

                let details = {
                    // username : data.username,
                    role     : data.info.role,
                    workHours: data.info.workHours,
                    workStyle: data.info.workStyle,
                };

                Dispatch({type: ACTIONS.SET_ACCOUNT_DETAILS, ...details})
            });

        });
    }
}

export default CreateReducer('Account', new AccountReducer());