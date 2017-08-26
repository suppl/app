import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-component';
import * as _ from 'lodash';

import * as ACTIONS from '../constants/actions.constants';
import HeaderMobile from '../components/header/header.mobile';
import FooterMobile from '../components/footer/footer.mobile';
import {Dispatch, State} from './../services/dispatch.service';
import {SessionList, isAudioAvailable, isAudioDone} from '../services/session.service';
import {CalcComplete, CalcStreak, CalcTotals, SetUrl} from '../services/helper.service';
import ActivityItem from '../components/activity-item/activity-item';
import Promo from '../components/promo/promo';


class CommunityScreenMobile extends React.Component {
    componentWillMount() {
        Dispatch({type: ACTIONS.LOAD_PROFILE_BY_ID, userId: this.props.profileId});

        setTimeout(() => {
            this.activeClass = 'active-screen';
            this.forceUpdate();
        }, 1);
    }

    componentWillReceiveProps(nextProps) {
        // console.warn('componentWillReceiveProps', nextProps.profileId,  this.props.profileId)

        if (nextProps.profileId !== this.props.profileId) {
            $('.content-area').scrollTop(0);
            Dispatch({type: ACTIONS.LOAD_PROFILE_BY_ID, userId: nextProps.profileId});
        }
    }

    render() {

        let feed = _.take(this.props.profile.feed, 5);
        let user = this.props.profile.user;
        this.activeClass = user.name ? 'active-screen' : '';

        return (
            <div data-screen className={`${this.activeClass}`}>
                <div data-mobile-screen>

                    <HeaderMobile/>
                    <FooterMobile screen=""/>
                    <div data-mobile-content style={{padding: 0}}>
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

                                <div className="thin-heading-2">{user.firstName || user.name}'s favourite sessions</div>

                                <Promo size="mid" sessionId="standing" audioId="sat-at-work-01-01"/>
                                <Promo size="mid" sessionId="back" audioId="sat-at-work-01-01"/>
                                <Promo size="mid" sessionId="neck" audioId="sat-at-work-01-01"/>

                                <div className="thin-heading-2">{user.firstName || user.name}'s latest activity</div>

                                <div className="activity-holder">
                                    {feed.map(feedItem => <ActivityItem feedItem={feedItem}/>)}
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
)(CommunityScreenMobile)