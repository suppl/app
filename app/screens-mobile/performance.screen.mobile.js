import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-component';
import Router from 'react-router-component'
const Locations = Router.Locations;
const Location  = Router.Location;

import SubHeader from '../components/sub-header/sub-header';
import Header from '../components/header/header';
import HeaderMobile from '../components/header/header.mobile';
import FooterMobile from '../components/footer/footer.mobile';
import Promo from '../components/promo/promo';
import Sidebar from '../components/sidebar/sidebar';
import FeedItem from '../components/feed-item/feed-item'
import PlayerList from '../components/player-list/player-list.component';
import Dispatch, {State} from '../services/dispatch.service'
import * as ACTIONS from '../constants/actions.constants'
import {SetUrl, CalcStreak, CalcComplete, CalcTotals, CalcCompleteCategory} from '../services/helper.service';

import _ from 'lodash';
import {getCategoryAudioCount, SessionList} from '../services/session.service';


class PerformanceScreenMobile extends React.Component {
    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active';
            this.forceUpdate();
        }, 1);
    }

    render() {

        const activeStreak = (number) => {
            return number <= CalcStreak(this.props.public.user) ? 'active' : ''
        };

        const User = this.props.public.user;

        return (
            <div data-screen className={`${this.activeClass}`}>
                <div data-mobile-screen>

                    <HeaderMobile/>
                    <FooterMobile screen="performance"/>
                    <div data-mobile-content style={{padding: 0}}>
                        <div className="content-area" style={{paddingTop: 0}}>
                            <div className="content-content">

                                <div className="block light" style={{backgroundImage: `url('/statics/svg/hero/performance-hero.svg')`}}>
                                    <div className="flex flex-row flex-between">
                                        <div>
                                            <div className="thin-heading">Performance</div>
                                            <div className="thin-subheading">Great to have you realigning.</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="thin-heading-2">NEPA job!</div>

                                <div className="nepa-banner">
                                    <div className="nepa-score">+{CalcTotals(State().public.user).NEPA}</div>
                                    <div className="nepa-text">Your <strong>NEPA</strong> score</div>
                                </div>

                                <div className="thin-heading-2">Session performance</div>

                                <div className="suppl-stat" style={{backgroundImage: `url('/statics/svg/performance/streak/streak-background.svg')`}}>
                                    <img src="/statics/svg/performance/streak/streak-icon.svg" className="stat-img"/>
                                    <div className="stat-overlay"/>
                                    <div className="flex flex-min">
                                        <div className="stat-stat">
                                            <span>{CalcStreak(State().public.user)}</span>
                                            <span className="stat-small"> / day</span>
                                        </div>
                                        <div className="stat-text">Run streak</div>
                                    </div>
                                </div>
                                <div className="suppl-stat" style={{backgroundImage: `url('/statics/svg/performance/sessions/sessions-background.svg')`}}>
                                    <img src="/statics/svg/performance/sessions/sessions-icon.svg" className="stat-img"/>
                                    <div className="stat-overlay"/>
                                    <div className="flex flex-min">
                                        <div className="stat-stat">
                                            <span>{CalcComplete(State().public.user)}</span>
                                            <span className="stat-small"></span>
                                        </div>
                                        <div className="stat-text">Session(s) done</div>
                                    </div>
                                </div>
                                <div className="suppl-stat" style={{backgroundImage: `url('/statics/svg/performance/time/time-background.svg')`}}>
                                    <img src="/statics/svg/performance/time/time-icon.svg" className="stat-img"/>
                                    <div className="stat-overlay"/>
                                    <div className="flex flex-min">
                                        <div className="stat-stat">
                                            <span>{CalcTotals(State().public.user).durationMinutes}</span>
                                            <span className="stat-small"> mins</span>
                                        </div>
                                        <div className="stat-text">Realign time</div>
                                    </div>
                                </div>


                                <div className="thin-heading-2">Session progress</div>

                                <div className="suppl-stat" style={{backgroundImage: `url('/statics/svg/performance/basics/basics-background.svg')`}}>
                                    <img src="/statics/svg/performance/basics/basics-icon.svg" className="stat-img"/>
                                    <div className="stat-overlay"/>
                                    <div className="flex flex-min">
                                        <div className="stat-stat">
                                            <span>{CalcCompleteCategory(User, 'Foundation')}</span>
                                            <span className="stat-small"> / {getCategoryAudioCount('Foundation')}</span>
                                        </div>
                                        <div className="stat-text">Foundation</div>
                                    </div>
                                </div>
                                <div className="suppl-stat" style={{backgroundImage: `url('/statics/svg/performance/mini/mini-background.svg')`}}>
                                    <img src="/statics/svg/performance/mini/mini-icon.svg" className="stat-img"/>
                                    <div className="stat-overlay"/>
                                    <div className="flex flex-min">
                                        <div className="stat-stat">
                                            <span>{CalcCompleteCategory(User, 'Minis')}</span>
                                            <span className="stat-small"> / {getCategoryAudioCount('Minis')}</span>
                                        </div>
                                        <div className="stat-text">Minis</div>
                                    </div>
                                </div>
                                <div className="suppl-stat" style={{backgroundImage: `url('/statics/svg/performance/growth/growth-background.svg')`}}>
                                    <img src="/statics/svg/performance/growth/growth-icon.svg" className="stat-img"/>
                                    <div className="stat-overlay"/>
                                    <div className="flex flex-min">
                                        <div className="stat-stat">
                                            <span>{CalcCompleteCategory(User, 'Growth')}</span>
                                            <span className="stat-small"> / {getCategoryAudioCount('Growth')}</span>
                                        </div>
                                        <div className="stat-text">Growth</div>
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
)(PerformanceScreenMobile)