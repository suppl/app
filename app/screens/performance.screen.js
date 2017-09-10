import React from 'react';
import {Link} from 'react-router-component';
import * as _ from 'lodash';

import * as ACTIONS from '../constants/actions.constants';

import {connect} from "react-redux";

import {Dispatch, State} from './../services/dispatch.service';
import {CalcComplete, CalcCompleteCategory, CalcStreak, CalcTotals, SetUrl} from '../services/helper.service';
import SubHeader from '../components/sub-header/sub-header';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';
import {getCategoryAudioCount} from "../services/session.service";

class PerformanceScreen extends React.Component {
    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active-screen';
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
                <div className="flex flex-row">
                    <Sidebar screen="performance"/>
                    <div data-content className="flex flex-max">
                        <Header/>
                        <div className="content-area" style={{paddingTop: 0}}>
                            <div className="content-content">

                                <div className="block light" style={{backgroundImage:`url('/statics/svg/hero/performance-hero.svg')`}}>
                                    <div className="flex flex-row flex-between">
                                        <div>
                                            <div className="thin-heading">Performance</div>
                                            <div className="thin-subheading">Great to have you realigning.</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="thin-heading-2">NEPA job!</div>

                                <div className="nepa-banner">
                                    <div className="nepa-image"/>
                                    <div className="nepa-score">+{CalcTotals(State().public.user).NEPA}</div>
                                    <div className="nepa-text">Your <strong>NEPA</strong> sdcore</div>
                                </div>

                                <div className="thin-heading-2">Session performance</div>

                                <div className="flex flex-cols flex-cols-large">
                                    <div className="flex-col">
                                        <div className="suppl-stat" style={{backgroundImage:`url('/statics/svg/performance/streak/streak-background.svg')`}}>
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
                                    </div>
                                    <div className="flex-col">
                                        <div className="suppl-stat" style={{backgroundImage:`url('/statics/svg/performance/sessions/sessions-background.svg')`}}>
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
                                    </div>
                                    <div className="flex-col">
                                        <div className="suppl-stat" style={{backgroundImage:`url('/statics/svg/performance/time/time-background.svg')`}}>
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
                                    </div>
                                </div>


                                <div className="thin-heading-2">Session progress</div>

                                <div className="flex flex-cols flex-cols-large">
                                    <div className="flex-col">
                                        <div className="suppl-stat" style={{backgroundImage:`url('/statics/svg/performance/basics/basics-background.svg')`}}>
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
                                    </div>
                                    <div className="flex-col">
                                        <div className="suppl-stat" style={{backgroundImage:`url('/statics/svg/performance/mini/mini-background.svg')`}}>
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
                                    </div>
                                    <div className="flex-col">
                                        <div className="suppl-stat" style={{backgroundImage:`url('/statics/svg/performance/growth/growth-background.svg')`}}>
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

export default connect(mapStateToProps, mapDispatchToProps)(PerformanceScreen)