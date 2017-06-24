import * as ACTIONS from '../constants/actions.constants';
import {REFERRAL_JSON} from '../constants/mandrill.constants';
import * as Request from 'superagent';
import * as _ from 'lodash';
import moment from 'moment';

import {store} from './../app';
import {Dispatch, State, CreateReducer} from './../services/dispatch.service';
import {SetUrl} from '../services/helper.service';

class Waitlist {
    initialState = {
        api           : 'https://suppl.app.waitlisted.co/api/v2/reservations',
        name          : '',
        email         : '',
        ref           : '',
        referralEmails: [],
        user          : undefined,
    };

    actions = {
        [ACTIONS.SET_WAITLIST_NAME]           : (data, state) => ({name: data.name}),
        [ACTIONS.SET_WAITLIST_EMAIL]          : (data, state) => ({email: data.email}),
        [ACTIONS.SET_WAITLIST_USER]           : (data, state) => ({user: data.user}),
        [ACTIONS.SET_WAITLIST_REF]            : (data, state) => ({ref: data.ref}),
        [ACTIONS.SET_WAITLIST_REFERRAL_EMAILS]: (data, state) => ({referralEmails: data.referralEmails}),
        [ACTIONS.SUBMIT_WAITLIST_SIGNUP]      : this.signUp,
        [ACTIONS.LOAD_WAITLIST_USER]          : this.loadUser,
        [ACTIONS.SEND_WAITLIST_REFERRAL]      : this.sendReferral,
    };

    constructor() {

    }

    async loadUser(data, state) {
        let body = {email: state.email};

        let res = await Request
            .get(state.api)
            .query(body)
            .set('Content-Type', 'application/json')
            .set('X-API-Key', '623ebd98943530c3c95a33d0d5607bf4')
            .ok(res => res.status < 501);

        if (res.body.errors) {
            // Dispatch({type: ACTIONS.SHOW_NOTIFICATION, message: res.text, theme: 'error'});
            Dispatch({type: ACTIONS.SHOW_POPUP_NOT_ON_THE_LIST});
            return;
        }

        Dispatch({type: ACTIONS.SET_WAITLIST_USER, user: res.body});
        console.info('loadUser', res)

    };

    async signUp(data, state) {
        let body = {
            email      : state.email,
            name       : state.name,
            "affiliate": state.ref,
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
        SetUrl(`/waitlist/share?email=${state.email}`);

        console.info('res', res)
    }

    async sendReferral(data, state) {

        if (!_.some(state.referralEmails)) {
            Dispatch(ACTIONS.SHOW_POPUP_NO_FRIENDS);
            return;
        }

        console.log('REFERRAL_JSON', REFERRAL_JSON, _.clone(REFERRAL_JSON));
        let body = REFERRAL_JSON;

        body.message.subject = `${state.user.name} has invited you to join Suppl!`;

        body.message.to      = [];

        _.forEach(state.referralEmails, email => {
            if (!email) return;
            body.message.to.push({email: email, type: 'to'})
        });

        body.message.global_merge_vars = [
            {name: "fname", content: state.user.name},
            {name: "affil", content: state.user.affiliate},
        ];

        let res = await Request
            .post('https://mandrillapp.com/api/1.0/messages/send-template.json')
            .send(body)
            .ok(res => res.status < 501);

        if (res.body.errors) {
            Dispatch({type: ACTIONS.SHOW_NOTIFICATION, message: res.text, theme: 'error'});
            return;
        }

        Dispatch({type: ACTIONS.SHOW_NOTIFICATION, message: 'looking good!'});
    }
}

export default CreateReducer('Waitlist', new Waitlist());