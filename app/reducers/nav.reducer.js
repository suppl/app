import * as ACTIONS from '../constants/actions.constants';
import * as FEED_ACTIONS from '../constants/feed.constants';

import {Dispatch, State, CreateReducer} from './../services/dispatch.service';
import {SessionList, OnboardingList} from './../services/session.service';
import * as _ from "lodash";
import moment from "moment";

class NavReducer {
    initialState = {
        screen    : OnboardingList[0],
        navScreens: ['Home', 'Sessions', 'Performance', 'Journey', 'Profile', 'Community'],
        showNav   : false,
    };

    actions = {
        [ACTIONS.SET_SCREEN]: (action, state) => ({screen: action.screen}),
    };

    constructor() {

    }
}


export default CreateReducer('Nav', new NavReducer());

