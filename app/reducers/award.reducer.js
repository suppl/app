import * as ACTIONS from '../constants/actions.constants';
import * as Request from 'superagent';
import {store} from './../app';
import {Dispatch, State} from './../services/dispatch.service';

const initialState = {
    visible: false,
    message: "hello",
    award: {},
};

const performAction = {

    [ACTIONS.SET_AWARDS]: (data, state) => ({awards: data.awards}),

    [ACTIONS.GIVE_AWARD]: (data, state) => giveAward(data, state),

    [ACTIONS.HIDE_AWARD]: (data, state) => ({visible: false}),

    [ACTIONS.SHOW_AWARD]: (data, state) => ({
        award: state.awards[data.awardId],
        theme: data.theme,
        message: data.message,
        visible: true,
    }),
};

const giveAward = async (data, state) => {
    console.info('giveAward')
    const user = firebase.auth().currentUser;

    let ref = await firebase.database().ref('users/' + user.uid + '/awards').push({
        awardId: data.awardId
    });

    console.info('ref', ref)

    Dispatch({type: ACTIONS.SHOW_AWARD, awardId: data.awardId});


    // Dispatch({type: ACTIONS.SHOW_NOTIFICATION, message: 'Registered Successfully!'});
};

const init = () => {
    firebase.auth().onAuthStateChanged(user => {
        if (!user) return;

        firebase.database().ref('awards').on('value', (snapshot) => {
            console.info('get awards', snapshot.val());

            Dispatch({type: ACTIONS.SET_AWARDS, awards: snapshot.val()});
        });
    });
};

init();

const award = (state = initialState, action) => {
    if (!performAction[action.type]) return state;

    const newState = Object.assign({}, state, performAction[action.type](action, state));
    console.info('NEW AWARD STATE:', action.type, newState);

    return newState;
};


export default award;