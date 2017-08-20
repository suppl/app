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
import Dispatch from '../services/dispatch.service'
import * as ACTIONS from '../constants/actions.constants'
import {SetUrl, CalcStreak, CalcComplete} from '../services/helper.service';

import _ from 'lodash';
import {SessionList} from '../services/session.service';


class PerformanceScreenMobile extends React.Component {
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

        const activeStreak = (number) => {
            return number <= CalcStreak(this.props.public.user) ? 'active' : ''
        };

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

                                <div className="thin-heading-2">NEAT job!</div>

                                <div className="neat-banner">
                                    <div className="neat-score">+500</div>
                                    <div className="neat-text">Your <strong>NEAT</strong> score</div>
                                </div>

                                <div className="thin-heading-2">Session performance</div>

                                <div className="suppl-stat">
                                    <img src="/statics/svg/dash/session-streak-icon.svg" className="stat-img"/>
                                    <div className="flex flex-min">
                                        <div className="stat-stat">
                                            <span>1</span>
                                            <span className="stat-small"> / day</span>
                                        </div>
                                        <div className="stat-text">Run streak</div>
                                    </div>
                                </div>
                                <div className="suppl-stat">
                                    <img src="/statics/svg/dash/session-complete-icon.svg" className="stat-img"/>
                                    <div className="flex flex-min">
                                        <div className="stat-stat">
                                            <span>1</span>
                                            <span className="stat-small"></span>
                                        </div>
                                        <div className="stat-text">Sessions done</div>
                                    </div>
                                </div>
                                <div className="suppl-stat">
                                    <img src="/statics/svg/dash/posture-minute-icon.svg" className="stat-img"/>
                                    <div className="flex flex-min">
                                        <div className="stat-stat">
                                            <span>3</span>
                                            <span className="stat-small"> mins</span>
                                        </div>
                                        <div className="stat-text">Realign time</div>
                                    </div>
                                </div>


                                <div className="thin-heading-2">Session progress</div>

                                <div className="suppl-stat">
                                    <img src="/statics/svg/dash/session-streak-icon.svg" className="stat-img"/>
                                    <div className="flex flex-min">
                                        <div className="stat-stat">
                                            <span>1</span>
                                            <span className="stat-small"> / day</span>
                                        </div>
                                        <div className="stat-text">Run streak</div>
                                    </div>
                                </div>
                                <div className="suppl-stat">
                                    <img src="/statics/svg/dash/session-complete-icon.svg" className="stat-img"/>
                                    <div className="flex flex-min">
                                        <div className="stat-stat">
                                            <span>1</span>
                                            <span className="stat-small"></span>
                                        </div>
                                        <div className="stat-text">Sessions done</div>
                                    </div>
                                </div>
                                <div className="suppl-stat">
                                    <img src="/statics/svg/dash/posture-minute-icon.svg" className="stat-img"/>
                                    <div className="flex flex-min">
                                        <div className="stat-stat">
                                            <span>3</span>
                                            <span className="stat-small"> mins</span>
                                        </div>
                                        <div className="stat-text">Realign time</div>
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