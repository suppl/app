import React from 'react';
import {Link} from 'react-router-component';
import * as _ from 'lodash';

import * as ACTIONS from '../constants/actions.constants';

import {connect} from "react-redux";

import {Dispatch, State} from './../services/dispatch.service';
import {CalcComplete, CalcStreak, CalcTotals, SetUrl} from '../services/helper.service';
import SubHeader from '../components/sub-header/sub-header';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';
import Promo from '../components/promo/promo';
import ActivityItem from '../components/activity-item/activity-item';

class ProfileScreen extends React.Component {
    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active-screen';
            this.forceUpdate();
        }, 1);
    }

    componentWillUpdate() {
        $('.content-area').scrollTop(0);
    }

    render() {
        let feed = [];
        let user      = this.props.public.user;
        let profileId = this.props.profileId || this.props.public.user.uid;

        const userRef = firebase.database().ref(`public/users/${profileId}`);
        userRef.on('value', (snapshot) => {
            user = snapshot.val();

            const feedRef = firebase.database().ref(`feed/`).orderByChild('user').equalTo(user.uid).limitToLast(5);
            feedRef.on('value', (snapshot) => feed = Object.values(snapshot.val()).reverse());
        });

        return (
            <div data-screen className={`${this.activeClass}`}>
                <div className="flex flex-row">
                    <Sidebar screen="profile"/>
                    <div data-content className="flex flex-max">
                        <Header/>
                        <div className="content-area" style={{paddingTop: 0}}>
                            <div className="content-content">

                                <div className="block light" style={{backgroundImage: `url('/statics/svg/hero/profile-hero.svg')`}}>
                                    <div className="flex flex-row flex-between">
                                        <div>
                                            <div className="thin-heading">{user.name}</div>
                                            <div className="thin-subheading">is feeling <strong>Excited</strong></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="thin-heading-2">{user.firstName || user.name}'s NEAT score</div>

                                <div className="neat-banner">
                                    <div className="neat-score">+{CalcTotals(user).NEAT}</div>
                                    <div className="neat-text">Your <strong>NEAT</strong> score</div>
                                </div>

                                <div className="thin-heading-2">{user.firstName || user.name}'s performance</div>

                                <div className="flex flex-cols flex-cols-large">
                                    <div className="flex-col">
                                        <div className="suppl-stat">
                                            <img src="/statics/svg/dash/session-streak-icon.svg" className="stat-img"/>
                                            <div className="flex flex-min">
                                                <div className="stat-stat">
                                                    <span>{CalcStreak(user)}</span>
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
                                                    <span>{CalcComplete(user)}</span>
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
                                                    <span>{CalcTotals(user).durationMinutes}</span>
                                                    <span className="stat-small"> mins</span>
                                                </div>
                                                <div className="stat-text">Realign time</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="thin-heading-2">{user.firstName || user.name}'s favourite sessions</div>

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

                                <div className="thin-heading-2">{user.firstName || user.name}'s latest activity</div>

                                <div className="activity-holder">
                                    {feed.map(feedItem => <ActivityItem feedItem={feedItem}/>)}
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)