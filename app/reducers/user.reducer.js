import * as ACTIONS from '../constants/actions.constants';
import * as Request from 'superagent';
import {Dispatch, State, Store} from './../services/dispatch.service';

const initialState = {
    isLoggedIn: false,
    email: "hello@suppl.co",
    password: "password123",
    user: {},
    customData: {}
};

const performAction = {
    [ACTIONS.UPDATE_LOGIN_EMAIL]: data => ({email: data.email}),

    [ACTIONS.UPDATE_LOGIN_PASSWORD]: data => ({password: data.password}),

    [ACTIONS.UPDATE_USER_CUSTOM_DATA]: data => ({customData: data.customData}),

    [ACTIONS.UPDATE_NAME]: (data, state) => ({
        user: {
            ...state.user,
            displayName: data.displayName
        }
    }),

    [ACTIONS.LOAD_PROFILE]: (data, state) => ({user: firebase.auth().currentUser}),

    [ACTIONS.SAVE_PROFILE]: (data, state) => {
        firebase.auth().currentUser.updateProfile({
            displayName: state.user.displayName,
        }).then(() => {
            Dispatch({
                type: ACTIONS.SHOW_NOTIFICATION,
                message: "Updated profile details"
            })
        });
    },

    [ACTIONS.SET_USER]: data => {
        Dispatch({type: ACTIONS.SHOW_NOTIFICATION, message: "Signed in successfully"});
        return {isLoggedIn: true, user: data.user}
    },

    [ACTIONS.UNSET_USER]: data => {
        Dispatch({type: ACTIONS.SHOW_NOTIFICATION, message: "Signed out successfully"});
        return {isLoggedIn: false, user: {}}
    },
};

const user = (state = initialState, action) => {
    if (!performAction[action.type]) return state;

    console.info('NEW USER STATE:', action.type, state);
    return Object.assign({}, state, performAction[action.type](action, state));
};

const checkAuth = () => {
    firebase.auth().onAuthStateChanged((user) => {
        Dispatch(ACTIONS.DONE_LOADING, 500);

        if (!user) return;

        Dispatch({type: ACTIONS.SET_USER, user: user});
        trackUserCustomData();
        checkInitialUserCustomData();
    });
};

const checkInitialUserCustomData = () => {
    const userId = firebase.auth().currentUser.uid;

    firebase.database().ref('/users/' + userId).once('value').then((snapshot) => {
        let data = snapshot.val();
        console.warn('snapshot.val()', data);

        if (!data) {
            firebase.database().ref('users/' + userId).update({
                points: 0,
                rewards: {},
                log: [],
            });
        }
    });
};

const trackUserCustomData = () => {
    const userId = firebase.auth().currentUser.uid;

    firebase.database().ref('users/' + userId).on('value', (snapshot) => {
        console.info('db change to user', snapshot.val());

        Dispatch({
            type: ACTIONS.UPDATE_USER_CUSTOM_DATA,
            customData: snapshot.val()
        });
    });
};

const init = () => {
    checkAuth();
};

init();

export default user;