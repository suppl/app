import * as ACTIONS from '../constants/actions.constants';
import * as FEED_ACTIONS from '../constants/feed.constants';

import {Dispatch, State, CreateReducer} from './../services/dispatch.service';
import {SessionList, OnboardingList} from './../services/session.service';
import * as _ from "lodash";
import moment from "moment";

class OnboardingReducer {
    initialState = {
        onboarding   : OnboardingList[0],
        visible      : false,
        currentScreen: 0,
    };

    actions = {
        [ACTIONS.SET_ONBOARDING]               : (action, state) => ({onboarding: action.onboarding}),
        [ACTIONS.SHOW_ONBOARDING]              : (action, state) => ({visible: true}),
        [ACTIONS.HIDE_ONBOARDING]              : (action, state) => ({visible: false}),
        [ACTIONS.LAST_ONBOARDING_SCREEN]       : (action, state) => ({currentScreen: state.onboarding.screens.length - 1}),
        [ACTIONS.LAST_ONBOARDING_SCREEN]       : (action, state) => ({currentScreen: 0}),
        [ACTIONS.SET_CURRENT_ONBOARDING_SCREEN]: (action, state) => ({currentScreen: action.currentScreen}),
        [ACTIONS.PREV_ONBOARDING_SCREEN]       : this.prevScreen,
        [ACTIONS.NEXT_ONBOARDING_SCREEN]       : this.nextScreen,
    };

    constructor() {

    }

    nextScreen(action, state) {
        let nextScreen = state.currentScreen + 1;
        let visible    = nextScreen < state.onboarding.screens.length;

        if (!visible) nextScreen = 0;

        return {currentScreen: nextScreen, visible};
    }

    prevScreen(action, state) {
        let prevScreen = state.currentScreen - 1 < 0 ? 0 : state.currentScreen - 1;
        return {currentScreen: prevScreen};
    }
}


export default CreateReducer('Onboarding', new OnboardingReducer());

