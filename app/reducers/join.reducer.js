import * as ACTIONS from '../constants/actions.constants';
import * as Request from 'superagent';
import * as _ from "lodash";

import {Dispatch, State, CreateReducer} from './../services/dispatch.service';
import SessionList from './../services/session.service';
import * as FEED_ACTIONS from "../constants/feed.constants";

class JoinReducer {
    initialState = {
        currentTab: 'step-1',
        emailIsOk : false,
        password  : false,
    };

    actions = {
        // [ACTIONS.LOAD_SIGN_IN_DETAILS]: this.loadJoin,
        [ACTIONS.SET_JOIN_DETAILS]: this.setJoin,
        [ACTIONS.TEST_JOIN_EMAIL] : this.testEmail,
        // [ACTIONS.JOIN_REGISTER]   : this.join,
        // [ACTIONS.SAVE_SIGN_IN_DETAILS]: this.saveJoin,
    };

    constructor() {
        // this.loadJoin();
    }

    setJoin(action, state) {
        let obj = _.extend({}, {}, action);
        delete obj.type;

        return obj;
    }

    testEmail(action, state) {

        validateEmailWithFirebase(action.email);
    }

    async join(action, state) {
        Dispatch(ACTIONS.START_LOADING);

        const user = await firebase.auth()
            .joinWithEmailAndPassword(action.email, action.password)
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

const validateEmailWithFirebase = _.debounce(async (email) => {
    let response = await firebase.auth().fetchProvidersForEmail(email).catch((e) => console.error(e));

    if (response.length === 0) {
        Dispatch({type: ACTIONS.SET_JOIN_DETAILS, emailIsOk: true});
        Dispatch(ACTIONS.HIDE_NOTIFICATION);
    } else {
        Dispatch({type: ACTIONS.SET_JOIN_DETAILS, emailIsOk: false});
        Dispatch({type: ACTIONS.SHOW_NOTIFICATION, theme: 'error', message: "This email already exists."});
    }
}, 500);

export default CreateReducer('Join', new JoinReducer());