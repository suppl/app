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


class DashboardScreenMobile extends React.Component {
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
        // Dispatch({type})

        const feed = _.take(_.sortBy(this.props.feed.feed, 'time').reverse(), 5);

        const session = this.props.settings.session ? this.props.settings.session : {};

        const getSessionName = () => {
            return this.props.settings.session ? this.props.settings.session.name : "No Player selected";
        };

        const getUserFirstName = () => {
            return this.props.user.user.displayName ? this.props.user.user.displayName.split(' ')[0] : 'Anonymous';
        };

        return (
            <div data-screen className={`${this.activeClass}`}>
                <div data-mobile-screen>

                    <HeaderMobile/>
                    <FooterMobile screen="home"/>
                    <div data-mobile-content style={{padding: 0}}>
                        <div className="content-area" style={{paddingTop: 0}}>
                            <div className="content-content">

                                <div className="block light">
                                    <div className="flex flex-row flex-between">
                                        <div>
                                            <div className="thin-heading">Hey {getUserFirstName()}!</div>
                                            <div className="thin-subheading">Great to have you realigning.</div>
                                        </div>

                                        <div className="realign-content">
                                            <div className="realign-number">
                                                {this.props.public.onlineCount}
                                                &nbsp;
                                                <i className="icon-uniE724" style={{fontSize:15}}/>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <Promo size="large" sessionId="desk-flex" audioId="sat-at-work-01-01"/>

                                <div className="thin-heading-2">Your sessions</div>

                                <div className="flex flex-cols flex-cols-large">
                                    <div className="flex-col">
                                        <Promo size="mid" sessionId="desk-flex" audioId="sat-at-work-01-01"/>
                                    </div>
                                    <div className="flex-col">
                                        <Promo size="mid" sessionId="sleeping" audioId="sat-at-work-01-01"/>
                                    </div>
                                    <div className="flex-col">
                                        <Promo size="mid" sessionId="breathe-easy" audioId="sat-at-work-01-01"/>
                                    </div>
                                </div>

                                <div className="thin-heading-2 ">Your performance</div>

                                <div className="neat-banner">
                                    <div className="neat-score">+500</div>
                                    <div className="neat-text">Your <strong>NEAT</strong> score</div>
                                </div>


                                <div className="flex flex-cols flex-cols-large">
                                    <div className="flex-col">
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
                                    </div>
                                    <div className="flex-col">
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
                                    </div>
                                    <div className="flex-col">
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

                                <div className="block">
                                    <div className="thin-heading-2 ">Recent activity</div>

                                    <div className="activity-boxes">
                                        {feed.map(feedItem => <FeedItem feedItem={feedItem}/>)}
                                    </div>
                                </div>

                                <div className="block light flex">
                                    <div className="flex flex-justify flex-min" style={{padding: '40px 0 0'}}>
                                        <div className="invite-flex">
                                            <div className="invite-title">Invite a friend</div>
                                            <div className="invite-text">
                                                Suppl is super fun solo but with your <br/> friend it’s even better!
                                            </div>
                                            <div className="banner-butn clickable">Invite friends</div>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="dashboard-invite">
                                            <div className="invite-icons">
                                                <img className="invite-icon" src="/statics/svg/dash/bird.svg" style={{
                                                    marginLeft: -120,
                                                    top       : 40
                                                }}/>
                                                <img className="invite-icon" src="/statics/svg/dash/flamingo.svg" style={{
                                                    marginLeft: 20,
                                                    top       : 50
                                                }}/>
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
)(DashboardScreenMobile)