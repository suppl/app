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
        const feedRef = firebase.database().ref(`feed`).limitToLast(50);

        feedRef.on('value', (snapshot) => {
            if (!snapshot.val()) return;

            let feed = Object.values(snapshot.val());

            feed.forEach(item => item.time = moment(item.time).isValid() ? moment(item.time).utc(0).format() : moment(item.time, 'YYYYMMDD-HH:mm:ss').utc(0).format());
            feed = _.orderBy(feed, ['time'], ['desc']);

            Dispatch({type: ACTIONS.SET_FEED_ARRAY, feed: feed});
            console.log('FEED UPDATED', state, feed);
        });
    }

    addFeedItem(action, state) {
        const feedRef = firebase.database().ref(`feed`);

        let feedItem = {
            user      : firebase.auth().currentUser.uid,
            time      : moment().utc(0).format(),
            feedAction: action.feedAction,
            recipient : action.recipient,
            details   : action.details,
        };

        feedItem = _.omitBy(feedItem, _.isUndefined);
        feedRef.push(feedItem);
    }
}


export default CreateReducer('Feed', new FeedReducer());

