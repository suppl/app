import React from 'react';
import {Link} from 'react-router-component';
import * as _ from 'lodash';

import * as ACTIONS from '../constants/actions.constants';

import {connect} from "react-redux";

import {Dispatch, State} from './../services/dispatch.service';
import {CalcStreak, CalcComplete, SetUrl, CalcTotals} from '../services/helper.service';
import SubHeader from '../components/sub-header/sub-header';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';
import FeedItem from '../components/feed-item/feed-item'
import ActivityItem from '../components/activity-item/activity-item'

class TeamScreen extends React.Component {

    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active-screen';
            this.forceUpdate();
        }, 1);
    }

    // isOnline(user) {
    //     return this.props.public.online[user.uid] !== undefined;
    // }

    render() {
        const users = _.sortBy(this.props.public.users, user => CalcStreak(user)).reverse();

        const feed = _.take(_.sortBy(this.props.feed.feed, 'time').reverse(), 10);

        const getUserFirstName = () => {
            return this.props.user.user.displayName ? this.props.user.user.displayName.split(' ')[0] : 'Anonymous';
        };

        const activeStreak = (number) => {
            return number <= CalcStreak(this.props.public.user) ? 'active' : ''
        };

        return (
            <div data-screen className={`${this.activeClass}`}>
                <div className="flex flex-row">
                    <Sidebar screen="community"/>
                    <div data-content className="flex flex-max">
                        <Header/>
                        <div className="content-area" style={{paddingTop: 0}}>
                            <div className="content-content">

                                <div className="block light" style={{backgroundImage: `url('/statics/svg/hero/team-hero.svg')`}}>
                                    <div className="flex flex-row flex-between">
                                        <div>
                                            <div className="thin-heading">Community</div>
                                            <div className="thin-subheading">Great to have you realigning.</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="thin-heading-2">Leaderboard</div>

                                <div className="suppl-table">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th className="tr-small">#</th>
                                            <th>Team member</th>
                                            <th className="tr-small">Minutes</th>
                                            <th className="tr-small">Sessions</th>
                                            <th className="tr-small">Streak</th>
                                            <th className="tr-small">NEAT</th>
                                        </tr>
                                        </thead>
                                        <tbody>

                                        {users.map((user, index) =>
                                        <tr>
                                            <td className="tr-first">{index}</td>
                                            <td>{user.name}</td>
                                            <td className="tr-small">{CalcTotals(user).durationMinutes}</td>
                                            <td className="tr-small">{CalcComplete(user)}</td>
                                            <td className="tr-small">{CalcStreak(user)}</td>
                                            <td className="tr-small">+{CalcTotals(user).NEAT}</td>
                                        </tr>
                                        )}
                                        </tbody>
                                    </table>
                                </div>


                                <div className="thin-heading-2 ">Community performance</div>

                                <div className="neat-banner">
                                    <div className="neat-score">+{_.reduce(State().public.users, (sum, user) => sum + CalcTotals(user).NEAT, 0)}</div>
                                    <div className="neat-text">Community <strong>NEAT</strong> score</div>
                                </div>


                                <div className="flex flex-cols flex-cols-large">
                                    {/*<div className="flex-col">*/}
                                        {/*<div className="suppl-stat">*/}
                                            {/*<img src="/statics/svg/dash/session-streak-icon.svg" className="stat-img"/>*/}
                                            {/*<div className="flex flex-min">*/}
                                                {/*<div className="stat-stat">*/}
                                                    {/*<span>1</span>*/}
                                                    {/*<span className="stat-small"> / day</span>*/}
                                                {/*</div>*/}
                                                {/*<div className="stat-text">Run streak</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    <div className="flex-col">
                                        <div className="suppl-stat">
                                            <img src="/statics/svg/dash/session-complete-icon.svg" className="stat-img"/>
                                            <div className="flex flex-min">
                                                <div className="stat-stat">
                                                    <span>
                                                        {_.reduce(State().public.users, (sum, user) => sum + CalcComplete(user), 0)}
                                                    </span>
                                                    <span className="stat-small"></span>
                                                </div>
                                                <div className="stat-text">Total sessions done</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-col">
                                        <div className="suppl-stat">
                                            <img src="/statics/svg/dash/posture-minute-icon.svg" className="stat-img"/>
                                            <div className="flex flex-min">
                                                <div className="stat-stat">
                                                    <span>
                                                        {_.reduce(State().public.users, (sum, user) => sum + CalcTotals(user).durationMinutes, 0)}
                                                    </span>
                                                    <span className="stat-small"> mins</span>
                                                </div>
                                                <div className="stat-text">Total realign time</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="block">
                                    <div className="thin-heading-2 ">Recent activity</div>

                                    <div className="activity-holder">
                                        {feed.map(feedItem => <ActivityItem feedItem={feedItem}/>)}
                                    </div>
                                </div>


                                <div className="block light flex flex-row">
                                    <div className="flex flex-justify flex-min" style={{padding: '0 40px'}}>
                                        <div className="invite-flex">
                                            <div className="invite-title">Invite a friend</div>
                                            <div className="invite-text">
                                                Suppl is super fun solo but with your <br/> friend it’s even better!
                                            </div>
                                            <div className="banner-butn clickable">Invite friends</div>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="dashboard-invite">
                                            <div className="invite-icons">
                                                <img className="invite-icon" src="/statics/svg/dash/bird.svg" style={{
                                                    marginLeft: -100,
                                                    top       : 40
                                                }}/>
                                                <img className="invite-icon" src="/statics/svg/dash/croc.svg" style={{
                                                    marginLeft: -90,
                                                    top       : 210
                                                }}/>
                                                <img className="invite-icon" src="/statics/svg/dash/flamingo.svg" style={{
                                                    marginLeft: 70,
                                                    top       : 50
                                                }}/>
                                                <img className="invite-icon" src="/statics/svg/dash/giraffe.svg" style={{
                                                    marginLeft: 120,
                                                    top       : 210
                                                }}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    firebase.auth().onAuthStateChanged(function (user) {
        if (!user) SetUrl('/');
    });

    return state
};

const mapDispatchToProps = dispatch => ({

    giveAward: (awardId) => dispatch({
        type   : ACTIONS.GIVE_AWARD,
        awardId: awardId,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamScreen)