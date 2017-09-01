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
import {State} from "../services/dispatch.service";


class TeamScreenMobile extends React.Component {
    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active';
            this.forceUpdate();
        }, 1);
    }

    render() {
        const users = _.sortBy(State().public.users, user => CalcStreak(user)).reverse();

        const feed = _.take(_.sortBy(State().feed.feed, 'time').reverse(), 10);

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

                                <div className="thin-heading-2">Leaderboard</div>

                                <div className="suppl-table">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th className="tr-first">#</th>
                                            <th>User</th>
                                            <th className="tr-small">Mins</th>
                                            <th className="tr-small">Sessions</th>
                                            <th className="tr-small">Streak</th>
                                            <th className="tr-small">NEAT</th>
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
                                                <td className="tr-small">{CalcStreak(user)} day</td>
                                                <td className="tr-small table-neat-score">+{CalcTotals(user).NEAT}</td>
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


                                <div className="block">
                                    <div className="thin-heading-2 ">Recent activity</div>

                                    <div className="activity-holder">
                                        {feed.map(feedItem => <ActivityItem feedItem={feedItem}/>)}
                                    </div>
                                </div>


                                {/*<div className="block light flex">*/}
                                    {/*<div className="flex flex-justify flex-min" style={{padding: '40px 0 0'}}>*/}
                                        {/*<div className="invite-flex">*/}
                                            {/*<div className="invite-title">Invite a friend</div>*/}
                                            {/*<div className="invite-text">*/}a
                                                {/*Suppl is super fun solo but with your <br/> friend it’s even better!*/}
                                            {/*</div>*/}
                                            {/*<div className="banner-butn clickable">Invite friends</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="flex">*/}
                                        {/*<div className="dashboard-invite">*/}
                                            {/*<div className="invite-icons">*/}
                                                {/*<img className="invite-icon" src="/statics/svg/dash/bird.svg" style={{*/}
                                                    {/*marginLeft: -120,*/}
                                                    {/*top       : 40*/}
                                                {/*}}/>*/}
                                                {/*<img className="invite-icon" src="/statics/svg/dash/flamingo.svg" style={{*/}
                                                    {/*marginLeft: 20,*/}
                                                    {/*top       : 50*/}
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