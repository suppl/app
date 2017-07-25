import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-component';
import Router from 'react-router-component'
import * as _ from 'lodash';

import * as ACTIONS from '../../constants/actions.constants';
import {SessionList, isAudioAvailable} from '../../services/session.service';
import {SetUrl, If} from '../../services/helper.service';
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

        return (
            <div className="activity-box">
                <div className="activity-image"></div>

                <If condition={feedItem.feedAction = 'SIGNED_IN'}>
                    <div className="activity-text">
                        <strong className="linkable">{this.getUser(feedItem.user).name}</strong> signed in
                        {/*<strong className="linkable"> Day 1 of Basics</strong>*/}
                    </div>
                </If>

                <div className="activity-time"> &nbsp;- {moment(feedItem.time, 'YYYYMMDD-HH:mm:ss').fromNow()}</div>
                <div style={{margin: 'auto'}}/>
                <i className="activity-icon clickable likeable icon-heart"/>
                <div className="activity-count">0</div>
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