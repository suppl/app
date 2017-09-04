import * as ACTIONS from '../constants/actions.constants';
import * as Request from 'superagent';
import * as _ from "lodash";

import {Dispatch, State, CreateReducer} from './../services/dispatch.service';
import SessionList from './../services/session.service';
import * as FEED_ACTIONS from "../constants/feed.constants";

class SignInReducer {
    initialState = {};

    actions = {
        // [ACTIONS.LOAD_SIGN_IN_DETAILS]: this.loadSignIn,
        [ACTIONS.SET_SIGN_IN_DETAILS]: this.setSignIn,
        [ACTIONS.SIGN_IN_NEW]        : this.signIn,
        // [ACTIONS.SAVE_SIGN_IN_DETAILS]: this.saveSignIn,
    };

    constructor() {
        // this.loadSignIn();
    }

    setSignIn(action, state) {
        let obj = _.extend({}, {}, action);
        delete obj.type;

        return obj;
    }

    standardError(action, message) {
        console.error('ERROR', action, message);

        Dispatch(ACTIONS.DONE_LOADING);
        Dispatch({type: ACTIONS.SHOW_NOTIFICATION, message: message, theme: 'error',});
    };

    async signIn(action, state) {
        Dispatch(ACTIONS.START_LOADING);

        const user = await firebase.auth()
            .signInWithEmailAndPassword(action.email, action.password)
            .catch(error => {
                console.error('ERROR', action.type, error.message);
                Dispatch(ACTIONS.DONE_LOADING);
                Dispatch({type: ACTIONS.SHOW_NOTIFICATION, message: error.message, theme: 'error',});
            });

        console.warn('user', user);

        if (!user) return;
        Dispatch({type: ACTIONS.SET_USER, isLoggedIn: true, user: user});
    }
}

export default CreateReducer('SignIn', new SignInReducer());