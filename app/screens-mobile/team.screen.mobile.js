import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-component';
import * as _ from 'lodash';

import * as ACTIONS from '../constants/actions.constants';
import HeaderMobile from '../components/header/header.mobile';
import FooterMobile from '../components/footer/footer.mobile';
import {SessionList, isAudioAvailable, isAudioDone} from '../services/session.service';
import {CalcComplete, CalcStreak, CalcTotals, SetUrl, If} from '../services/helper.service';
import FeedItem from '../components/feed-item/feed-item'
import ActivityItem from '../components/activity-item/activity-item'
import {Dispatch, State} from "../services/dispatch.service";


class TeamScreenMobile extends React.Component {
    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active';
            this.forceUpdate();
        }, 1);
    }

    render() {
        const Community = this.props.community;

        const users = _.sortBy(this.props.public.users, user => CalcTotals(user).NEPA).reverse();
        const feed  = _.take(_.sortBy(this.props.feed.feed, 'time').reverse(), 15);

        const update = (field, value) => (e) => {
            Dispatch({type: ACTIONS.SET_COMMUNITY_DETAILS, [field]: value ? value : e.target.value});
        };

        return (
            <div data-screen className={`${this.activeClass}`}>
                <div data-mobile-screen>

                    <HeaderMobile/>
                    <FooterMobile screen="community"/>
                    <div data-mobile-content style={{padding: 0}}>
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


                                <div className="suppl-panel">
                                    <div className="panel-header">
                                        <div className="header-tab" data-active={Community.currentTab == 'activity'    } onClick={update('currentTab', 'activity')}>Activity</div>
                                        <div className="header-tab" data-active={Community.currentTab == 'performance' } onClick={update('currentTab', 'performance')}>Performance</div>
                                        <div className="header-tab" data-active={Community.currentTab == 'leaderboard' } onClick={update('currentTab', 'leaderboard')}>Leaderboard</div>
                                    </div>

                                    <div className="panel-content" style={{padding: 0}}>
                                        <div className="content-tab" data-visible={Community.currentTab == 'activity'}>
                                            {/*<div className="block">*/}

                                                <div className="activity-holder">
                                                    {feed.map(feedItem => <ActivityItem feedItem={feedItem}/>)}
                                                </div>
                                            {/*</div>*/}
                                        </div>
                                        <div className="content-tab" data-visible={Community.currentTab == 'performance'}>

                                            <div className="nepa-banner">
                                                <div className="nepa-score">+{_.reduce(State().public.users, (sum, user) => sum + CalcTotals(user).NEPA, 0)}</div>
                                                <div className="nepa-text">Community <strong>NEPA</strong> score</div>
                                            </div>

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
                                        <div className="content-tab" data-visible={Community.currentTab == 'leaderboard'}>

                                            <div className="suppl-table">
                                                <table>
                                                    <thead>
                                                    <tr>
                                                        <th className="tr-first">#</th>
                                                        <th>User</th>
                                                        <th className="tr-small">Mins</th>
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
                                                                </div>
                                                            </td>
                                                            <td className="tr-small">{CalcTotals(user).durationMinutes}</td>
                                                            <td className="tr-small">{CalcComplete(user)}</td>
                                                            <td className="tr-small">{CalcStreak(user)}</td>
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
        );
    }
}


const mapStateToProps = state => {
    firebase.auth().onAuthStateChanged((user) => {
        if (!user) SetUrl('/');
    });

    return state
};

const mapDispatchToProps = dispatch => ({

    showAudio: (session, audio) => dispatch({
        type: ACTIONS.SHOW_AUDIO,
        session,
        audio
    }),

    // showAward: (awardId) => dispatch({
    //     type   : ACTIONS.SHOW_AWARD,
    //     awardId: awardId
    // }),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TeamScreenMobile)