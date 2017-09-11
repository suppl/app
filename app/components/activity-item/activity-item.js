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

require('./activity-item.scss');


class ActivityItem extends React.Component {
    // const screen = this.props.screen;

    getUser = (uid) => {
        // console.info('getUser', uid, _.find(this.props.public.users, {uid}))
        return _.find(this.props.public.users, {uid}) || {};
    };

    render() {

        const feedItem = this.props.feedItem;

        let absoluteTime = moment(feedItem.time).isValid() ? moment(feedItem.time) : moment(feedItem.time, 'YYYYMMDD-HH:mm:ss');
        // let diff = absoluteTime.diff(moment(), 'hours') + 1;
        //
        // if (diff > 0) {
        //     absoluteTime.add(-5, 'hours');
        // }

        let color        = '#00A2F2';
        let overlayWidth = '80%';
        let name         = this.getUser(feedItem.user).name;
        let avatar       = this.getUser(feedItem.user).avatar;
        let text         = undefined;
        let extra        = undefined;
        let time         = absoluteTime.fromNow();

        let actions = {
            [FEED_ACTIONS.SIGNED_IN]      : () => {
                overlayWidth = '0%';
                text         = <div>signed in</div>
            },
            [FEED_ACTIONS.JOINED_SUPPL]   : () => {
                overlayWidth = '0%';
                extra        = <div><img src="/statics/svg/icons/oh-hey.svg" alt=""/> Oh hey!</div>;
                text         = <div>joined Suppl!</div>
            },
            [FEED_ACTIONS.STARTED_AUDIO]  : () => {
                color        = _.find(SessionList, {id: feedItem.details.sessionId}).color;
                overlayWidth = '85%';
                text         = <div>
                    started
                    <Link className="activity-strong" href={`/sessions/${feedItem.details.sessionId}`}> {feedItem.details['sessionName']} - {feedItem.details.audioName}</Link>
                </div>
            },
            [FEED_ACTIONS.COMPLETED_AUDIO]: () => {
                color        = _.find(SessionList, {id: feedItem.details.sessionId}).color;
                overlayWidth = '0%';
                extra        = <div><img src="/statics/svg/icons/woohoo.svg" alt=""/> Woohoo!</div>;
                text         = <div>
                    completed
                    <Link className="activity-strong" href={`/sessions/${feedItem.details.sessionId}`}> {feedItem.details['sessionName']} - {feedItem.details.audioName}</Link>
                </div>
            },
        };

        try {
            actions[feedItem.feedAction]();
        } catch (e) {
        }

        return (
            <div className="activity-panel">
                <div className="activity-item">
                    <div className="activity-header" style={{backgroundColor: color}}>
                        <div className="header-overlay" style={{width: overlayWidth}}/>
                    </div>

                    <div className="activity-content">
                        <Link className="activity-icon" href={`/profile/${feedItem.user}`} style={{backgroundImage: `url('${avatar}')`}}/>
                        <Link className="activity-user" href={`/profile/${feedItem.user}`}>{name}</Link>
                        <div className="activity-text">{text}</div>
                        <div className="activity-dash"/>
                        <div className="activity-time">{time}</div>
                        {extra ? <div>
                            <div className="activity-dash"/>
                            <div className="activity-extra">{extra}</div>
                        </div> : ''}

                    </div>


                    {/*<div className={`flex ${IsDesktop() ? 'flex-row flex-align' : ''}`}>*/}
                    {/*{(isAction(FEED_ACTIONS.SIGNED_IN)) ?*/}
                    {/*<div className="activity-text">*/}
                    {/*<strong className="linkable">{this.getUser(feedItem.user).name}</strong> signed in*/}
                    {/*<strong className="linkable"> Day 1 of Basics</strong>*/}
                    {/*</div> : ''*/}
                    {/*}*/}
                    {/*{(isAction(FEED_ACTIONS.STARTED_AUDIO)) ?*/}
                    {/*<div className="activity-text">*/}
                    {/*<strong className="linkable">{this.getUser(feedItem.user).name} </strong>*/}
                    {/*started session*/}
                    {/*<strong className="linkable">*/}
                    {/*<Link href={`/sessions/${feedItem.details.sessionId}`}> {feedItem.details.sessionName} - {feedItem.details.audioName}</Link></strong>*/}
                    {/*</div> : ''*/}
                    {/*}*/}
                    {/*{(isAction(FEED_ACTIONS.COMPLETED_AUDIO)) ?*/}
                    {/*<div className="activity-text">*/}
                    {/*<strong className="linkable">{this.getUser(feedItem.user).name} </strong>*/}
                    {/*completed session*/}
                    {/*<strong className="linkable">*/}
                    {/*<Link href={`/sessions/${feedItem.details.sessionId}`}> {feedItem.details.sessionName} - {feedItem.details.audioName}</Link></strong>*/}
                    {/*</div> : ''*/}
                    {/*}*/}

                    {/*<div className="activity-time"> &nbsp;- {moment(feedItem.time, 'YYYYMMDD-HH:mm:ss').fromNow()}</div>*/}
                    {/*</div>*/}
                    {/*<div style={{margin: 'auto'}}/>*/}
                    {/*<i className="activity-icon clickable likeable icon-uniE7D4"/>*/}
                    {/*<div className="activity-count">0</div>*/}
                </div>
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
)(ActivityItem)