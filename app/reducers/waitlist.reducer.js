import * as ACTIONS from '../constants/actions.constants';
import * as Request from 'superagent';
import * as _ from 'lodash';
import moment from 'moment';

import {store} from './../app';
import {Dispatch, State, CreateReducer} from './../services/dispatch.service';
import {SetUrl} from '../services/helper.service';

class Waitlist {
    initialState = {
        api  : 'https://suppl.app.waitlisted.co/api/v2/reservations',
        name : '',
        email: '',
        user : undefined,
    };

    actions = {
        [ACTIONS.SET_WAITLIST_NAME]     : (data, state) => ({name: data.name}),
        [ACTIONS.SET_WAITLIST_EMAIL]    : (data, state) => ({email: data.email}),
        [ACTIONS.SET_WAITLIST_USER]     : (data, state) => ({user: data.user}),
        [ACTIONS.SUBMIT_WAITLIST_SIGNUP]: this.signUp,
        [ACTIONS.LOAD_WAITLIST_USER]    : this.loadUser,
    };

    async loadUser(data, state) {
        let body = {email: state.email};

        let res = await Request
            .get(state.api)
            .query(body)
            .set('Content-Type', 'application/json')
            .set('X-API-Key', '623ebd98943530c3c95a33d0d5607bf4')
            .ok(res => res.status < 501);

        if (res.body.errors) {
            Dispatch({type: ACTIONS.SHOW_NOTIFICATION, message: res.text, theme: 'error'});
            return;
        }

        Dispatch({type: ACTIONS.SET_WAITLIST_USER, user: res.body});
        console.info('loadUser', res)

    };

    async signUp(data, state) {
        let body = {
            email: state.email,
            name : state.name,
            // "affiliate": "ABC12345",
            // "responses": {}
        };

        let res = await Request
            .post(state.api)
            .send(body)
            .set('Content-Type', 'application/json')
            .set('X-API-Key', '623ebd98943530c3c95a33d0d5607bf4')
            .ok(res => res.status < 501);

        if (res.body.errors) {
            Dispatch({type: ACTIONS.SHOW_NOTIFICATION, message: res.text, theme: 'error'});
            return;
        }

        Dispatch({type: ACTIONS.SET_WAITLIST_USER, user: res.body});
        SetUrl(`/position?email=${state.email}`);

        console.info('res', res)
    }

    constructor() {

    }
}

export default CreateReducer('Waitlist', new Waitlist());