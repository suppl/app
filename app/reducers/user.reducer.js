import * as ACTIONS from '../constants/actions.constants';
import * as Request from 'superagent';
import {Dispatch, State, Store} from './../services/dispatch.service';
import * as _ from 'lodash';

const initialState = {
    isLoggedIn: false,
    // email     : "hello@suppl.co",
    // password  : "password123",
    email     : "",
    password  : "",
    streak    : 0,
    user      : {},
    customData: {},
    register  : {
        emailIsOk: false
    }
};

const performAction = {
    [ACTIONS.REGISTER_USER]              : (data, state) => registerUser(data, state),
    [ACTIONS.UPDATE_REGISTER_CHECK_EMAIL]: (data, state) => checkEmail(data, state),
    [ACTIONS.UPDATE_REGISTER_EMAIL_IS_OK]: (data, state) => emailIsOk(data, state),
    [ACTIONS.UPDATE_REGISTER_EMAIL]      : (data, state) => ({register: {...state.register, email: data.email}}),
    [ACTIONS.UPDATE_REGISTER_NAME]       : (data, state) => ({register: {...state.register, name: data.name}}),
    [ACTIONS.UPDATE_REGISTER_PASSWORD]   : (data, state) => ({register: {...state.register, password: data.password}}),
    [ACTIONS.UPDATE_REGISTER_ROLE]       : (data, state) => ({register: {...state.register, role: data.role}}),
    [ACTIONS.UPDATE_REGISTER_WORK_STYLE] : (data, state) => ({
        register: {
            ...state.register,
            workStyle: data.workStyle
        }
    }),
    [ACTIONS.UPDATE_REGISTER_WORK_HOURS] : (data, state) => ({
        register: {
            ...state.register,
            workHours: data.workHours
        }
    }),
    [ACTIONS.UPDATE_LOGIN_EMAIL]         : data => ({email: data.email}),
    [ACTIONS.UPDATE_LOGIN_PASSWORD]      : data => ({password: data.password}),
    [ACTIONS.SET_USER_CUSTOM_DATA]       : data => ({customData: data.customData}),
    [ACTIONS.SET_DISPLAY_NAME]           : (data, state) => setDisplayName(data, state),
    [ACTIONS.LOAD_PROFILE]               : (data, state) => ({user: firebase.auth().currentUser}),
    [ACTIONS.SAVE_PROFILE]               : (data, state) => saveProfile(data, state),
    [ACTIONS.SET_USER]                   : (data, state) => setUser(data, state),
    [ACTIONS.UNSET_USER]                 : (data, state) => unsetUser(data, state),
};

const emailIsOk = (data, state) => ({
    register: {...state.register, emailIsOk: data.emailIsOk}
});

const saveProfile = async (data, state) => {
    await firebase.auth().currentUser.updateProfile({displayName: state.user.displayName,});
    Dispatch({type: ACTIONS.SHOW_NOTIFICATION, message: "Updated profile details"})
};

const setDisplayName = (data, state) => ({
    user: {
        ...state.user,
        displayName: data.displayName
    }
});

const checkEmail = (data, state) => {
    Dispatch({type: ACTIONS.UPDATE_REGISTER_EMAIL_IS_OK, emailIsOk: false});
    validateEmailWithFirebase(data);
};

const unsetUser = (data, state) => {
    Dispatch({type: ACTIONS.SHOW_NOTIFICATION, message: "Signed out successfully"});
    return {isLoggedIn: false, user: {}}
};

const setUser = (data, state) => {
    Dispatch({type: ACTIONS.SHOW_NOTIFICATION, message: "Signed in successfully"});
    return {isLoggedIn: true, user: data.user}
};

const registerUser = async (data, state) => {
    let user, customData;
    Dispatch(ACTIONS.START_LOADING);

    try {
        user = await firebase.auth().createUserWithEmailAndPassword(state.register.email, state.register.password)
    } catch (error) {
        console.error('error', error);
        Dispatch({type: ACTIONS.SHOW_NOTIFICATION, theme: 'error', message: error.message});
        return;
    }

    await firebase.auth().currentUser.updateProfile({displayName: state.register.name,});

    customData = {
        points: 0,
        info  : {
            workStyle: state.register.workStyle,
            workHours: state.register.workHours,
            role     : state.register.role,
        }
    };

    await firebase.database().ref('users/' + user.uid).update(customData);

    Dispatch({type: ACTIONS.SHOW_NOTIFICATION, message: 'Registered Successfully!'});
    checkAuth();
};

const validateEmailWithFirebase = _.debounce(async (data) => {
    let response = await firebase.auth().fetchProvidersForEmail(data.email).catch((e) => console.error(e));

    if (response.length === 0) {
        Dispatch({type: ACTIONS.UPDATE_REGISTER_EMAIL_IS_OK, emailIsOk: true});
        Dispatch(ACTIONS.HIDE_NOTIFICATION);
    } else {
        Dispatch({type: ACTIONS.UPDATE_REGISTER_EMAIL_IS_OK, emailIsOk: false});
        Dispatch({type: ACTIONS.SHOW_NOTIFICATION, theme: 'error', message: "This email already exists."});
    }
}, 500);

const checkAuth = async () => {
    firebase.auth().onAuthStateChanged(user => {
        Dispatch(ACTIONS.DONE_LOADING, 500);
        if (!user) return;

        Dispatch({type: ACTIONS.SET_USER, user: user});
        trackUserCustomData();
        checkInitialUserCustomData();
    });
};

const checkInitialUserCustomData = () => {
    const userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/users/' + userId).once('value', snapshot => {
        let data = snapshot.val();
        console.warn('snapshot.val()', data);

        if (!data) {
            firebase.database().ref('users/' + userId).update({points: 0});
        }
    });
};

const trackUserCustomData = () => {
    const userId = firebase.auth().currentUser.uid;
    firebase.database().ref('users/' + userId).on('value', snapshot => {
        console.info('db change to user', snapshot.val());

        Dispatch({
            type      : ACTIONS.SET_USER_CUSTOM_DATA,
            customData: snapshot.val()
        });
    });


};

const init = () => {
    checkAuth();
};

init();

const user = (state = initialState, action) => {
    if (!performAction[action.type]) return state;

    const newState = Object.assign({}, state, performAction[action.type](action, state));
    console.info('NEW USER STATE:', action.type, newState);

    return newState;
};

export default user;