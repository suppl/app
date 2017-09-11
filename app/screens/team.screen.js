import React from 'react';
import {Link} from 'react-router-component';
import * as _ from 'lodash';

import * as ACTIONS from '../constants/actions.constants';

import {connect} from "react-redux";

import {Dispatch, State} from './../services/dispatch.service';
import {CalcStreak, CalcComplete, SetUrl, CalcTotals, SortActivity, CalcTag} from '../services/helper.service';
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

    componentDidMount() {
        SortActivity();
    }

    isOnline(user) {
        return this.props.public.online[user.uid] !== undefined;
    }

    render() {
        const Community = this.props.community;

        const users = _.sortBy(this.props.public.users, user => CalcTotals(user).NEPA).reverse();
        const feed  = _.take(_.sortBy(this.props.feed.feed, 'time').reverse(), 30);

        const update = (field, value) => (e) => {
            Dispatch({type: ACTIONS.SET_COMMUNITY_DETAILS, [field]: value ? value : e.target.value});
        };

        return (
            <div data-screen className={`${this.activeClass}`}>
                <div className="flex flex-row">
                    <Sidebar screen="community"/>
                    <div data-content className="flex flex-max">
                        <Header/>
                        <div className="content-area" style={{paddingTop: 0}}>
                            <div className="content-content">

                                <div className="block light" style={{backgroundImage: `url('/statics/svg/hero/community-hero.png')`, backgroundSize:'contain'}}>
                                    <div className="flex flex-row flex-between">
                                        <div>
                                            <div className="thin-heading">Community</div>
                                            <div className="thin-subheading">Great to have you realigning.</div>
                                        </div>
                                    </div>
                                </div>


                                <div className="suppl-panel">
                                    <div className="panel-header">
                                        <div className="header-tab" data-active={Community.currentTab == 'activity'    } onClick={update('currentTab', 'activity')}>Recent activity</div>
                                        <div className="header-tab" data-active={Community.currentTab == 'performance' } onClick={update('currentTab', 'performance')}>Performance</div>
                                        <div className="header-tab" data-active={Community.currentTab == 'leaderboard' } onClick={update('currentTab', 'leaderboard')}>Leaderboard</div>
                                    </div>

                                    <div className="panel-content">
                                        <div className="content-tab" data-visible={Community.currentTab == 'activity'}>
                                            <div className="bricklayer">
                                                {feed.map(feedItem => <ActivityItem feedItem={feedItem}/>)}
                                            </div>
                                        </div>
                                        <div className="content-tab" data-visible={Community.currentTab == 'performance'}>

                                            <div className="thin-heading-2">Community NEPA score</div>

                                            <div className="nepa-banner">
                                                <div className="nepa-image"/>
                                                <div className="nepa-score">+{_.reduce(State().public.users, (sum, user) => sum + CalcTotals(user).NEPA, 0)}</div>
                                                <div className="nepa-text">Community <strong>NEPA</strong> score</div>
                                            </div>

                                            <div className="thin-heading-2">Combined performance</div>

                                            <div className="flex flex-cols flex-cols-large">
                                                <div className="flex-col">
                                                    <div className="suppl-stat" style={{backgroundImage: `url('/statics/svg/performance/sessions/sessions-background.svg')`}}>
                                                        <img src="/statics/svg/performance/sessions/sessions-icon.svg" className="stat-img"/>
                                                        <div className="stat-overlay"/>
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
                                                    <div className="suppl-stat" style={{backgroundImage: `url('/statics/svg/performance/time/time-background.svg')`}}>
                                                        <img src="/statics/svg/performance/time/time-icon.svg" className="stat-img"/>
                                                        <div className="stat-overlay"/>
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
                                        </div>
                                        <div className="content-tab" data-visible={Community.currentTab == 'leaderboard'}>

                                            <div className="suppl-table">
                                                <table>
                                                    <thead>
                                                    <tr>
                                                        <th className="tr-first">#</th>
                                                        <th>User</th>
                                                        <th className="tr-small">Minutes</th>
                                                        <th className="tr-small">Sessions</th>
                                                        <th className="tr-small">Streak</th>
                                                        <th className="tr-small">NEPA</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>

                                                    {users.map((user, index) =>
                                                        <tr>
                                                            <td className="tr-first">{index + 1}</td>
                                                            <td>
                                                                <div className="table-profile">
                                                                    <Link className="activity-icon clickable" href={`/profile/${user.uid}`} style={{backgroundImage: `url('${user.avatar}')`}}/>
                                                                    <Link href={`profile/${user.uid}`}>{user.name}</Link>
                                                                    {CalcTag(index + 1) ?
                                                                        <div className="table-tag" style={{background:CalcTag(index + 1).color}}>{CalcTag(index + 1).text}</div>
                                                                    : null}
                                                                </div>
                                                            </td>
                                                            <td className="tr-small">{CalcTotals(user).durationMinutes}</td>
                                                            <td className="tr-small">{CalcComplete(user)}</td>
                                                            <td className="tr-small">{CalcStreak(user)} day</td>
                                                            <td className="tr-small table-nepa-score">+{CalcTotals(user).NEPA}</td>
                                                        </tr>
                                                    )}
                                                    </tbody>
                                                </table>
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