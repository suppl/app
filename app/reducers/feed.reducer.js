import * as ACTIONS from '../constants/actions.constants';
import * as FEED_ACTIONS from '../constants/feed.constants';

import {Dispatch, State, CreateReducer} from './../services/dispatch.service';
import SessionList from './../services/session.service';
import * as _ from "lodash";
import moment from "moment";

class FeedReducer {
    initialState = {
        feed: [],
        userFeed: [],
    };

    actions = {
        [ACTIONS.SET_FEED_ARRAY]: (action, state) => ({feed: action.feed}),
        [ACTIONS.ADD_FEED_ITEM] : this.addFeedItem,
        [ACTIONS.ADD_FEED_ITEM] : this.addFeedItem,
    };

    constructor() {
        // this.loadFeed();
        // this.signedIn();

        firebase.auth().onAuthStateChanged(user => {
            if (!user) return;
            this.loadFeed();
        });
    }

    signedIn() {
    }

    loadFeed(action, state) {
        const feedRef = firebase.database().ref(`feed`).orderByChild('time').limitToLast(30);

        feedRef.on('value', (snapshot) => {
            if (!snapshot.val()) return;

            const feed = Object.values(snapshot.val());

            Dispatch({type: ACTIONS.SET_FEED_ARRAY, feed: feed});
            console.log('FEED UPDATED', state);
        });
    }

    addFeedItem(action, state) {
        const feedRef = firebase.database().ref(`feed`);

        let feedItem = {
            user      : firebase.auth().currentUser.uid,
            time      : moment().format(),
            feedAction: action.feedAction,
            recipient : action.recipient,
            details   : action.details,
        };

        feedItem = _.omitBy(feedItem, _.isUndefined);
        feedRef.push(feedItem);
    }
}


export default CreateReducer('Feed', new FeedReducer());

