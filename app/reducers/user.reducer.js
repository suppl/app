import * as ACTIONS from '../constants/actions.constants';
import * as Request from 'superagent';

const initialState = {
    isLoggedIn: false,
    email: "hello@suppl.co",
    password: "password123",
};

const performAction = {
    [ACTIONS.UPDATE_LOGIN_EMAIL]: data => ({
        email: data.email
    }),

    [ACTIONS.UPDATE_LOGIN_PASSWORD]: data => ({
        password: data.password
    }),
    //
    [ACTIONS.SIGN_IN]: data => ({
        isLoggedIn: true,
        newJson: data.newJson
    }),

    [ACTIONS.SIGN_IN_REQ]: (data) => {
        loadJson()
            .then(response => {
                console.log('success', response);
                data['dispatch']({
                    type: ACTIONS.SIGN_IN,
                    isLoggedIn: true,
                    newJson: response.body
                });
            }, error => {
                console.log('error', error)
            });
    }
};


const loadJson = () => {
    return Request.get(`https://www.reddit.com/r/politics.json`);
};


// return function (dispatch) {
//     return loadJson()
//         .then(response => {
//             console.log('success', response);
//             dispatch();
//         }, error => {
//             console.log('error', error)
//         });
// };

const user = (state = initialState, action) => {
    console.info('USER ACTION', action);

    if (!performAction[action.type]) return state;

    state = Object.assign({}, state, performAction[action.type](action));

    console.info('NEW USER STATE:', action.type, state);
    return state
};

export default user;