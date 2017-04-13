import * as ACTIONS from '../constants/actions.constants';
import * as Request from 'superagent';
import {Dispatch, State} from './../services/dispatch.service';
import {store} from './../app';


const initialState = {
    loaderVisible: true
};

const performAction = {
    [ACTIONS.SIGN_IN]: () => {
        Dispatch({type: ACTIONS.START_LOADING});

        console.log('State', State());

        firebase.auth().signInWithEmailAndPassword(State().user.email, State().user.password)
            .then(user => store.dispatch({
                type: ACTIONS.SET_USER,
                isLoggedIn: true,
                user: user
            }), error => standardError(ACTIONS.SIGN_IN, error.message))
    },

    [ACTIONS.SIGN_OUT]: () => {
        Dispatch({
            type: ACTIONS.START_LOADING
        });

        firebase.auth().signOut()
            .then(user => store.dispatch({
                type: ACTIONS.UNSET_USER,
                isLoggedIn: false,
                user: {}
            }), error => standardError(ACTIONS.SIGN_OUT, error.message))
    }
};

const standardError = (action, message) => {
    console.error('ERROR', action, message);

    Dispatch({
        type: ACTIONS.SHOW_NOTIFICATION,
        message: message,
        theme: 'error',
    });
};

const requests = (state = initialState, action) => {
    console.info('REQUEST ACTION', action);

    if (!performAction[action.type]) return state;

    state = Object.assign({}, state, performAction[action.type](action));

    console.info('NEW REQUEST STATE:', action.type, state);
    return state
};

export default requests;