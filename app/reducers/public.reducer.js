import * as ACTIONS from '../constants/actions.constants';
import * as Request from 'superagent';
import {Dispatch, State} from './../services/dispatch.service';
import SessionList from './../services/session.service';

// let timeLoop;

const initialState = {
    online     : [],
    onlineCount: 0,
};

const performAction = {
    // [ACTIONS.SET_ONLINE_STATUS]: (data, state) => setOnlineStatus(data, state),
    [ACTIONS.SET_ONLINE_STATUS]: (data, state) => ({online: data.online}),
    [ACTIONS.SET_ONLINE_COUNT] : (data, state) => ({onlineCount: data.onlineCount}),
};

const settings = (state = initialState, action) => {
    if (!performAction[action.type]) return state;

    const newState = Object.assign({}, state, performAction[action.type](action, state));
    console.info('NEW PUBLIC STATE:', action.type, newState);

    return newState;
};

const init = () => {
    firebase.auth().onAuthStateChanged(user => {
        if (!user) return;

        const connectedRef = firebase.database().ref('.info/connected');
        const userRef      = firebase.database().ref(`public/online/${user.uid}`);

        connectedRef.on('value', (snapshot) => {
            if (snapshot.val()) {
                userRef.onDisconnect().remove();
                userRef.set({
                    name: user.displayName
                });
            }
        });
    });

    const listRef = firebase.database().ref("public/online");

    // Number of online users is the number of objects in the presence list.
    listRef.on("value", function (snapshot) {
        Dispatch({type: ACTIONS.SET_ONLINE_STATUS, online: snapshot.val()});
        Dispatch({type: ACTIONS.SET_ONLINE_COUNT, onlineCount: snapshot.numChildren()});
        console.log("online status = ", snapshot.val());
        console.log("# of online users = ", snapshot.numChildren());
    });
};

init();

export default settings;