import React from 'react';
import {connect} from "react-redux";
import Router from 'react-router-component'
const Locations = Router.Locations;
const Location  = Router.Location;

import SubHeader from '../components/sub-header/sub-header';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';
import PlayerList from '../components/player-list/player-list.component';
import Dispatch from '../services/dispatch.service'
import * as ACTIONS from '../constants/actions.constants'

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
                    <Sidebar/>
                    <div data-content className="flex flex-max">
                        <div className="content-area" style={{paddingTop: 0}}>
                            <div className="content-content">
                                <SubHeader text="Dashboard"/>
                                {/*<SubHeader text={getSessionName()} subText={session.description}/>*/}

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
        if (!user) window.location.hash = '/';
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