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
import PlayerList from '../components/player-list/player-list.component';
import Dispatch from '../services/dispatch.service'
import * as ACTIONS from '../constants/actions.constants'
import {SetUrl, CalcStreak} from '../services/helper.service';

import _ from 'lodash';
import {SessionList} from '../services/session.service';


class Dashboard extends React.Component {
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
        const session = this.props.settings.session ? this.props.settings.session : {};

        const getSessionName = () => {
            return this.props.settings.session ? this.props.settings.session.name : "No Player selected";
        };

        return (
            <div data-screen className={`${this.activeClass}`}>
                <Header/>
                <div className="flex flex-row">
                    <Sidebar screen="dashboard"/>
                    <div data-content className="flex flex-max">
                        <div className="content-area" style={{paddingTop: 0}}>
                            <div className="content-content">
                                <SubHeader text="Howdy Superstar!"/>

                                <div className="dashboard-stats">
                                    <div className="dashboard-stat" data-active={CalcStreak(this.props.public.user) > 0}>
                                        <i className="stat-icon flaticon-star"/>
                                        <div className="flex flex-min">
                                            <div className="stat-value">{CalcStreak(this.props.public.user)}</div>
                                            <div className="stat-text">Daily streak</div>
                                        </div>
                                    </div>
                                    <div className="dashboard-stat">
                                        <i className="stat-icon flaticon-star"/>
                                        <div className="flex flex-min">
                                            <div className="stat-value">0</div>
                                            <div className="stat-text">Total active minutes</div>
                                        </div>
                                    </div>
                                    <div className="dashboard-stat">
                                        <i className="stat-icon flaticon-star"/>
                                        <div className="flex flex-min">
                                            <div className="stat-value">0</div>
                                            <div className="stat-text">Sessions complete</div>
                                        </div>
                                    </div>
                                    <div className="dashboard-stat" data-active={this.props.public.onlineCount > 0}>
                                        <i className="stat-icon flaticon-star"/>
                                        <div className="flex flex-min">
                                            <div className="stat-value">{this.props.public.onlineCount}</div>
                                            <div className="stat-text">Folks exercising now</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="sub-sub-heading-2">We think you’ll like this session</div>
                                <Promo size="large" sessionId="desk-flex" audioId="sat-at-work-01-01"/>

                                <div className="dashboard-note">
                                    <div className="note-text">
                                        Based on your job, hours and desk, We recommend getting started with a nice and easy stand up session.
                                    </div>
                                    <div className="note-line"/>
                                    <div className="note-action clickable">Got it</div>
                                </div>

                                <div className="sub-sub-heading-2">
                                    Get the basics right and the rest is a breeze
                                </div>
                                <div className="flex flex-cols">
                                    <div className="flex-col">
                                        <Promo size="mid" sessionId="sitting" audioId="sat-at-work-01-01"/>
                                    </div>
                                    <div className="flex-col">
                                        <Promo size="mid" sessionId="standing" audioId="sat-at-work-01-01"/>
                                    </div>
                                </div>

                                <div className="sub-sub-heading-2">
                                    In a rush? Tune in to a mini session
                                </div>
                                <div className="flex flex-cols">
                                    <div className="flex-col">
                                        <Promo size="small" sessionId="breathe-easy" audioId="take-a-seat-lv01-s01"/>
                                    </div>
                                    <div className="flex-col">
                                        <Promo size="small" sessionId="neck-release" audioId="sat-at-work-01-01"/>
                                    </div>
                                    <div className="flex-col">
                                        <Promo size="small" sessionId="hip-opener" audioId="sat-at-work-01-01"/>
                                    </div>
                                </div>

                                <div className="dashboard-note">
                                    <div className="note-text">
                                        Mini Sessions are designed to fit around your busy schedule. Tune in and give yourself a quick boost in just 1 minute
                                    </div>
                                    <div className="note-line"/>
                                    <div className="note-action clickable">Got it</div>
                                </div>


                                <div className="sub-sub-heading-2">
                                    Latest community activity
                                </div>

                                <div className="flex-table">
                                    <div className="hori list-header">
                                        <div className="col">Recent activity</div>
                                    </div>

                                    <div className="hori list-row">
                                        <div className="col">

                                        </div>
                                    </div>
                                    <div className="hori list-row">
                                        <div className="col">

                                        </div>
                                    </div>
                                    <div className="hori list-row">
                                    </div>
                                </div>

                                <div className="dashboard-note">
                                    <div className="note-text">
                                        Suppl is a community of awesome folks. React & add new friends. Everyone has the same goal; to unlock a happy, healthier you.
                                    </div>
                                    <div className="note-line"/>
                                    <div className="note-action clickable">Got it</div>
                                </div>


                                {/*
                                 <div className="sub-sub-heading">Next session</div>
                                 <div className="session-header mini" style={{backgroundImage: `url('${session.svgLarge}')`}}>
                                 <div className="header-overlay"></div>
                                 <div className="session-title">{session.name}</div>
                                 <div className="session-description">Session {session.index}</div>

                                 <div className="session-stats">
                                 <div className="stats-stat">
                                 <div className="stat-number">{session.audios.length}</div>
                                 <div className="stat-label">sessions</div>
                                 </div>

                                 <div className="stats-stat">
                                 <div className="stat-number">LOW</div>
                                 <div className="stat-label">intensity</div>
                                 </div>

                                 <div className="stats-stat">
                                 <div className="stat-number">2</div>
                                 <div className="stat-label">total mins</div>
                                 </div>
                                 </div>
                                 </div>

                                 <div className="thin-row">
                                 <div className="thin-col">
                                 <div className="sub-sub-heading">Awards</div>
                                 <div className="info">
                                 <div className="info-white"/>
                                 <div className="info-number">1</div>
                                 <div className="info-text">Day streak</div>
                                 </div>

                                 <div className="sub-sub-heading">Progress</div>
                                 <div className="info">
                                 <div className="info-icon" style={{backgroundImage:`url('/statics/svg/progress/progress-session.svg')`}}/>
                                 <div className="info-white"/>
                                 <div className="info-number">30</div>
                                 <div className="info-text">Total active minutes</div>
                                 </div>

                                 <div className="info">
                                 <div className="info-icon" style={{backgroundImage:`url('/statics/svg/progress/progress-active.svg')`}}/>
                                 <div className="info-white"/>
                                 <div className="info-number">12</div>
                                 <div className="info-text">Total sessions complete</div>
                                 </div>
                                 </div>

                                 <div className="thin-col flex">
                                 <div className="sub-sub-heading">Activity</div>
                                 <div className="info">
                                 <div className="info-icon" style={{backgroundImage:`url('/statics/svg/progress/activity-feed.svg')`}}/>
                                 <div className="info-white"/>
                                 <div className="info-number">330</div>
                                 <div className="info-text">Total badges won</div>
                                 </div>
                                 </div>
                                 </div>
                                 */}
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