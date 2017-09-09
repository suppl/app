import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-component';
import Router from 'react-router-component'

const Locations = Router.Locations;
const Location  = Router.Location;

import SubHeader from '../components/sub-header/sub-header';
import Header from '../components/header/header';
import Promo from '../components/promo/promo';
import Sidebar from '../components/sidebar/sidebar';
import FeedItem from '../components/feed-item/feed-item'
import ActivityItem from '../components/activity-item/activity-item'
import PlayerList from '../components/player-list/player-list.component';
import Dispatch, {State} from '../services/dispatch.service'
import * as ACTIONS from '../constants/actions.constants'
import {SetUrl, CalcStreak, CalcComplete, CalcTotals, SortActivity} from '../services/helper.service';

import _ from 'lodash';
import {SessionList} from '../services/session.service';


class Dashboard extends React.Component {
    feedLength = 10;

    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active';
            this.forceUpdate();
        }, 1);
    }

    componentDidMount() {
        SortActivity();
    }

    render() {
        const feed = _.take(_.sortBy(this.props.feed.feed, 'time').reverse(), this.feedLength);

        const getUserFirstName = () => {
            return this.props.user.user.displayName ? this.props.user.user.displayName.split(' ')[0] : 'Anonymous';
        };

        return (
            <div data-screen className={`${this.activeClass}`}>
                <div className="flex flex-row">
                    <Sidebar screen="home"/>
                    <div data-content className="flex flex-max">
                        <Header/>
                        <div className="content-area" style={{paddingTop: 0}}>
                            <div className="content-content">

                                <div className="block light">
                                    <div className="flex flex-row flex-between">
                                        <div>
                                            <div className="thin-heading">Hey {getUserFirstName()}!</div>
                                            <div className="thin-subheading">Great to have you realigning.</div>
                                        </div>

                                        <div className="realign-content">
                                            <div className="realign-number">{this.props.public.onlineCount}</div>
                                            <div className="realign-text">people realigning now</div>

                                        </div>


                                    </div>
                                </div>

                                <Promo size="large" sessionId="sitting" audioId="sitting-intro"/>

                                <div className="thin-heading-2 ">Your sessions</div>

                                <div className="flex flex-cols flex-cols-large">
                                    <div className="flex-col">
                                        <Promo size="mid" sessionId="standing" audioId="sat-at-work-01-01"/>
                                    </div>
                                    <div className="flex-col">
                                        <Promo size="mid" sessionId="back" audioId="sat-at-work-01-01"/>
                                    </div>
                                    <div className="flex-col">
                                        <Promo size="mid" sessionId="neck" audioId="sat-at-work-01-01"/>
                                    </div>
                                </div>

                                <div className="thin-heading-2 ">Your performance</div>

                                <div className="nepa-banner">
                                    <div className="nepa-score">+{CalcTotals(State().public.user).NEPA}</div>
                                    <div className="nepa-text">Your <strong>NEPA</strong> score</div>
                                </div>


                                <div className="flex flex-cols flex-cols-large">
                                    <div className="flex-col">
                                        <div className="suppl-stat">
                                            <img src="/statics/svg/dash/session-streak-icon.svg" className="stat-img"/>
                                            <div className="flex flex-min">
                                                <div className="stat-stat">
                                                    <span>{CalcStreak(State().public.user)}</span>
                                                    <span className="stat-small"> / day</span>
                                                </div>
                                                <div className="stat-text">Run streak</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-col">
                                        <div className="suppl-stat">
                                            <img src="/statics/svg/dash/session-complete-icon.svg" className="stat-img"/>
                                            <div className="flex flex-min">
                                                <div className="stat-stat">
                                                    <span>{CalcComplete(State().public.user)}</span>
                                                    <span className="stat-small"></span>
                                                </div>
                                                <div className="stat-text">Session(s) done</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-col">
                                        <div className="suppl-stat">
                                            <img src="/statics/svg/dash/posture-minute-icon.svg" className="stat-img"/>
                                            <div className="flex flex-min">
                                                <div className="stat-stat">
                                                    <span>{CalcTotals(State().public.user).durationMinutes}</span>
                                                    <span className="stat-small"> mins</span>
                                                </div>
                                                <div className="stat-text">Realign time</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="block">
                                    <div className="thin-heading-2 ">Recent activity</div>

                                    <div className="bricklayer">
                                        {feed.map(feedItem => <ActivityItem feedItem={feedItem}/>)}
                                    </div>
                                </div>

                                {/*<div className="block light flex flex-row">*/}
                                    {/*<div className="flex flex-justify flex-min" style={{padding: '0 40px'}}>*/}
                                        {/*<div className="invite-flex">*/}
                                            {/*<div className="invite-title">Invite a friend</div>*/}
                                            {/*<div className="invite-text">*/}
                                                {/*Suppl is super fun solo but with your <br/> friend it’s even better!*/}
                                            {/*</div>*/}
                                            {/*<div className="banner-butn clickable">Invite friends</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="flex">*/}
                                        {/*<div className="dashboard-invite">*/}
                                            {/*<div className="invite-icons">*/}
                                                {/*<img className="invite-icon" src="/statics/svg/dash/bird.svg" style={{*/}
                                                    {/*marginLeft: -100,*/}
                                                    {/*top       : 40*/}
                                                {/*}}/>*/}
                                                {/*<img className="invite-icon" src="/statics/svg/dash/croc.svg" style={{*/}
                                                    {/*marginLeft: -90,*/}
                                                    {/*top       : 210*/}
                                                {/*}}/>*/}
                                                {/*<img className="invite-icon" src="/statics/svg/dash/flamingo.svg" style={{*/}
                                                    {/*marginLeft: 70,*/}
                                                    {/*top       : 50*/}
                                                {/*}}/>*/}
                                                {/*<img className="invite-icon" src="/statics/svg/dash/giraffe.svg" style={{*/}
                                                    {/*marginLeft: 120,*/}
                                                    {/*top       : 210*/}
                                                {/*}}/>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}

                                {/*</div>*/}


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
)(Dashboard)