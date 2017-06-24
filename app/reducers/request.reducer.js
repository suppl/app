import * as ACTIONS from '../constants/actions.constants';
import * as Request from 'superagent';
import {Dispatch, State} from './../services/dispatch.service';
import {store} from './../app';


const initialState = {
    loaderVisible: true
};

const performAction = {
    [ACTIONS.SIGN_IN] : () => signIn(),
    [ACTIONS.SIGN_OUT]: () => signOut(),
};

const signIn = async () => {
    let user;
    Dispatch({type: ACTIONS.START_LOADING});

    user = await firebase.auth()
        .signInWithEmailAndPassword(State().user.email, State().user.password)
        .catch(error => standardError(ACTIONS.SIGN_IN, error.message));

    if (!user) return;
    Dispatch({type: ACTIONS.SET_USER, isLoggedIn: true, user: user});
};

const signOut = async () => {
    Dispatch({type: ACTIONS.START_LOADING});
    await sleep(500);

    await firebase.auth().signOut().catch(error => standardError(ACTIONS.SIGN_OUT, error.message));
    Dispatch({type: ACTIONS.UNSET_USER});
};

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const standardError = (action, message) => {
    console.error('ERROR', action, message);

    Dispatch(ACTIONS.DONE_LOADING);
    Dispatch({type: ACTIONS.SHOW_NOTIFICATION, message: message, theme: 'error',});
};

const requests = (state = initialState, action) => {
    if (!performAction[action.type]) return state;

    console.info('NEW REQUEST STATE:', action.type, state);
    return Object.assign({}, state, performAction[action.type](action));
};

export default requests;