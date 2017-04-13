import * as ACTIONS from '../constants/actions.constants';
import * as Request from 'superagent';
import {store} from './../app';

const initialState = {};

const performAction = {
    [ACTIONS.SIGN_IN]: () => {
        firebase.auth().signInWithEmailAndPassword(store.getState().user.email, store.getState().user.password)
            .then(user => {

                store.dispatch({
                    type: ACTIONS.SET_USER,
                    isLoggedIn: true,
                    user: user
                })
            }, error => {
                store.dispatch({
                    type: ACTIONS.SHOW_NOTIFICATION,
                    message: error.message,
                    theme: 'error',
                });
                console.error('signInWithEmailAndPassword', error);
            });
    },
};

const requests = (state = initialState, action) => {
    console.info('REQUEST ACTION', action);

    if (!performAction[action.type]) return state;

    state = Object.assign({}, state, performAction[action.type](action));

    console.info('NEW REQUEST STATE:', action.type, state);
    return state
};

export default requests;