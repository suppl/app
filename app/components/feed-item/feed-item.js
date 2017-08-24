import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-component';
import Router from 'react-router-component'
import * as _ from 'lodash';

import * as ACTIONS from '../../constants/actions.constants';
import * as FEED_ACTIONS from "../../constants/feed.constants";
import {SessionList, isAudioAvailable} from '../../services/session.service';
import {SetUrl, If, IsDesktop, IsMobile, IsTablet} from '../../services/helper.service';
import moment from "moment";

require('./feed-item.scss');


class FeedItem extends React.Component {
    // const screen = this.props.screen;

    getUser = (uid) => {
        // console.info('getUser', uid, _.find(this.props.public.users, {uid}))
        return _.find(this.props.public.users, {uid}) || {};
    };

    render() {

        const feedItem = this.props.feedItem;

        const isAction = (action) => feedItem.feedAction == action;

        return (
            <div className="activity-box">
                {/*<div className="activity-image"></div>*/}


                <div className={`flex ${IsDesktop() ? 'flex-row flex-align' : ''}`}>
                    {(isAction(FEED_ACTIONS.SIGNED_IN)) ?
                        <div className="activity-text">
                            <strong className="linkable">{this.getUser(feedItem.user).name}</strong> signed in
                            {/*<strong className="linkable"> Day 1 of Basics</strong>*/}
                        </div> : ''
                    }
                    {(isAction(FEED_ACTIONS.STARTED_AUDIO)) ?
                        <div className="activity-text">
                            <strong className="linkable">{this.getUser(feedItem.user).name} </strong>
                            started session
                            <strong className="linkable">
                                <Link href={`/sessions/${feedItem.details.sessionId}`}> {feedItem.details.sessionName} - {feedItem.details.audioName}</Link></strong>
                        </div> : ''
                    }
                    {(isAction(FEED_ACTIONS.COMPLETED_AUDIO)) ?
                        <div className="activity-text">
                            <strong className="linkable">{this.getUser(feedItem.user).name} </strong>
                            completed session
                            <strong className="linkable">
                                <Link href={`/sessions/${feedItem.details.sessionId}`}> {feedItem.details.sessionName} - {feedItem.details.audioName}</Link></strong>
                        </div> : ''
                    }

                    <div className="activity-time"> &nbsp;- {moment(feedItem.time, 'YYYYMMDD-HH:mm:ss').fromNow()}</div>
                </div>
                {/*<div style={{margin: 'auto'}}/>*/}
                {/*<i className="activity-icon clickable likeable icon-uniE7D4"/>*/}
                {/*<div className="activity-count">0</div>*/}
            </div>
        )
    }
}


const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    showAudio: (session, audio) => dispatch({
        type: ACTIONS.SHOW_AUDIO,
        session,
        audio
    }),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FeedItem)