import React from 'react';
import * as Request from 'superagent';

import * as ACTIONS from '../constants/actions.constants';
import {store} from './../app';
import {Dispatch, State, CreateReducer} from './../services/dispatch.service';
import {SetUrl} from '../services/helper.service';

class Popup {
    initialState = {
        visible   : false,
        content   : "Hello",
        html      : <div/>,
        popupType : '',
        resetEmail: "",
        title     : "",
        linkAction: "",
        linkText  : "",
        canClose  : false,
    };

    actions = {
        [ACTIONS.SEND_RESET_PASSWORD_EMAIL]  : this.sendResetPasswordEmail,
        [ACTIONS.SHOW_POPUP_NOT_ON_THE_LIST] : this.notOnTheList,
        [ACTIONS.SHOW_POPUP_NO_FRIENDS]      : this.noFriends,
        [ACTIONS.SHOW_POPUP_INVITE_THANKS]      : this.inviteThanks,
        [ACTIONS.UPDATE_RESET_PASSWORD_EMAIL]: (data, state) => ({resetEmail: data.email}),
        [ACTIONS.HIDE_POPUP]                 : (data, state) => ({visible: false}),
        [ACTIONS.SHOW_POPUP]                 : (data, state) => ({visible: true, popupType: data.popupType}),
    };

    constructor() {

    }

    async sendResetPasswordEmail(data, state) {
        try {
            await firebase.auth().sendPasswordResetEmail(state.resetEmail)
        } catch (error) {
            Dispatch({type: ACTIONS.SHOW_NOTIFICATION, message: error.message, theme: 'error'});
            return;
        }

        Dispatch({type: ACTIONS.SHOW_NOTIFICATION, message: 'Email reset sent.'});
        Dispatch(ACTIONS.HIDE_POPUP)
    };

    notOnTheList(data, state) {
        state.popupType  = 'standard';
        state.title      = `Sorry buddy, you're not on the list.`;
        state.content    = <div>It looks like you haven't registered with us just yet. <br/>
            <strong> Sign up </strong> to our early access programme <strong> right now! </strong></div>;
        state.linkText   = `Get started`;
        state.visible    = true;
        state.canClose   = false;
        state.linkAction = () => {
            SetUrl('/waitlist');
            Dispatch(ACTIONS.HIDE_POPUP);
        }
    }

    noFriends(data, state) {
        state.popupType  = 'standard';
        state.title      = `Your friends need you right now.`;
        state.content    = <div><strong>Take your time</strong>, the <strong> gift of great posture </strong> isn't one you should give away too lightly.</div>;
        state.linkText   = `I'll think on it`;
        state.visible    = true;
        state.canClose   = false;
        state.linkAction = () => Dispatch(ACTIONS.HIDE_POPUP);
    }

    inviteThanks(data, state) {
        state.popupType  = 'standard';
        state.title      = `A big thank you!`;
        state.content    = <div>Thanks for sharing Suppl. <br/> <strong> You will move up the waitlist as soon as these invites are accepted</strong>.
            <br/> In the meantime we will keep you up to date on everything Suppl related!</div>;
        state.linkText   = `Got it!`;
        state.visible    = true;
        state.canClose   = false;
        state.linkAction = () => {
            Dispatch(ACTIONS.HIDE_POPUP);
            SetUrl(`http://www.suppl.co`);
        }
    }
}

export default CreateReducer('Popup', new Popup());