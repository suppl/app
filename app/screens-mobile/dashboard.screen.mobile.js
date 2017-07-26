import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-component';
import Router from 'react-router-component'
const Locations = Router.Locations;
const Location  = Router.Location;

import SubHeader from '../components/sub-header/sub-header';
import Header from '../components/header/header';
import HeaderMobile from '../components/header/header.mobile';
import Promo from '../components/promo/promo';
import Sidebar from '../components/sidebar/sidebar';
import FeedItem from '../components/feed-item/feed-item'
import PlayerList from '../components/player-list/player-list.component';
import Dispatch from '../services/dispatch.service'
import * as ACTIONS from '../constants/actions.constants'
import {SetUrl, CalcStreak, CalcComplete} from '../services/helper.service';

import _ from 'lodash';
import {SessionList} from '../services/session.service';


class DashboardScreenMobile extends React.Component {
    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active';
            this.forceUpdate();
        }, 1);

        const getSession = () => {
            console.log('this.props._', this.props._);
            return this.props._ ? _.find(SessionList, {slug: this.props._[0]}) : undefined;
        };

        if (getSession()) {
            Dispatch({
                type   : ACTIONS.SET_SESSION,
                session: getSession(),
            });
        }
    }

    render() {
        const feed = _.take(_.sortBy(this.props.feed.feed, 'time').reverse(), 5);

        const session = this.props.settings.session ? this.props.settings.session : {};

        const getSessionName = () => {
            return this.props.settings.session ? this.props.settings.session.name : "No Player selected";
        };

        return (
            <div data-screen className={`${this.activeClass}`}>
                <div data-mobile-screen>

                    <HeaderMobile/>
                    <div data-mobile-content style={{padding: 0}}>
                        <div className="content-area" style={{paddingTop: 0}}>
                            <div className="content-content">

                                <Promo size="large" sessionId="desk-flex" audioId="sat-at-work-01-01"/>

                                <div className="sub-sub-heading-4">Your sessions</div>
                                <div className="sub-sub-heading-2" style={{marginTop: 5}}>Each session builds on the one before it.</div>

                                <div className="flex">
                                    <Promo size="mid" sessionId="desk-flex" audioId="sat-at-work-01-01"/>
                                    <Promo size="mid" sessionId="sleeping" audioId="sat-at-work-01-01"/>
                                    <Promo size="mid" sessionId="breathe-easy" audioId="sat-at-work-01-01"/>
                                </div>

                                <div className="flex" style={{textAlign: 'center'}}>
                                    <div className="suppl-butn clickable">Discover more sessions</div>
                                </div>

                                <div className="sub-sub-heading-4">Community activity</div>
                                <div className="sub-sub-heading-2" style={{marginTop: 5}}>Encourage and check how the community is progressing everyday</div>

                                <div className="activity-boxes">
                                    {feed.map(feedItem => <FeedItem feedItem={feedItem}/>)}
                                </div>

                                <div className="sub-sub-heading-4">Your performance</div>
                                <div className="sub-sub-heading-2" style={{marginTop: 5}}>Keep up your streak and form a healthy habit everyday</div>

                                <div className="dashboard-large-stat" style={{marginTop: 20}}>
                                    <div className="stat-icon">
                                        <img src="/statics/svg/dash/session-streak-icon.svg" alt=""/>
                                    </div>
                                    <div className="stat-content">
                                        <div className="content-top">{CalcStreak(this.props.public.user)} day{CalcStreak(this.props.public.user) == 1 ? '' : 's'}</div>
                                        <div className="content-bottom">Current run streak</div>
                                    </div>
                                </div>

                                <div className="dashboard-large-stat" style={{
                                    backgroundColor: '#a4b9d7',
                                    backgroundImage: `url('/statics/svg/dash/sessions-complete.svg')`
                                }}>
                                    <div className="stat-icon">
                                        <img src="/statics/svg/dash/session-complete-icon.svg" alt=""/>
                                    </div>
                                    <div className="stat-content">
                                        <div className="content-top">{CalcComplete(this.props.public.user)}</div>
                                        <div className="content-bottom">Session{CalcComplete(this.props.public.user) == 1 ? '' : 's'} completed</div>
                                    </div>
                                </div>

                                <div className="dashboard-large-stat" style={{
                                    backgroundColor: '#bdcee7',
                                    backgroundImage: `url('/statics/svg/dash/posture-minutes.svg')`
                                }}>
                                    <div className="stat-icon">
                                        <img src="/statics/svg/dash/posture-minute-icon.svg" alt=""/>
                                    </div>
                                    <div className="stat-content">
                                        <div className="content-top">3 mins</div>
                                        <div className="content-bottom">Total posture mins</div>
                                    </div>
                                </div>

                                <div className="dashboard-invite">
                                    <div className="invite-flex">
                                        <div className="sub-sub-heading-4" style={{marginTop: 0}}>Invite a friend</div>
                                        <div className="sub-sub-heading-2" style={{marginTop: 10}}>
                                            Suppl is super fun solo but with your <br/> friend it’s even better!
                                        </div>

                                        <div className="flex flex-min" style={{textAlign: 'center'}}>
                                            <div className="suppl-butn clickable">Invite friends</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    firebase.auth().onAuthStateChanged(function (user) {
        if (!user) SetUrl('/');
    });

    return state
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardScreenMobile)