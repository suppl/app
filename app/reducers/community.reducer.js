import * as ACTIONS from '../constants/actions.constants';
import * as Request from 'superagent';
import * as _ from "lodash";

import {Dispatch, State, CreateReducer} from './../services/dispatch.service';
import SessionList from './../services/session.service';
import * as FEED_ACTIONS from "../constants/feed.constants";

class CommunityReducer {
    initialState = {
        currentTab: 'activity',
    };

    actions = {
        // [ACTIONS.LOAD_COMMUNITY_DETAILS]: this.loadCommunity,
        [ACTIONS.SET_COMMUNITY_DETAILS] : this.setCommunity,
        // [ACTIONS.SAVE_COMMUNITY_DETAILS]: this.saveCommunity,
    };

    constructor() {
    }

    setCommunity(action, state) {
        let obj = _.extend({}, {}, action);
        delete obj.type;

        return obj;
    }
}

export default CreateReducer('Community', new CommunityReducer());