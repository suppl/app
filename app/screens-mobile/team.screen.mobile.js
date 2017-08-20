import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-component';
import * as _ from 'lodash';

import * as ACTIONS from '../constants/actions.constants';
import HeaderMobile from '../components/header/header.mobile';
import FooterMobile from '../components/footer/footer.mobile';
import {SessionList, isAudioAvailable, isAudioDone} from '../services/session.service';
import {SetUrl, If} from '../services/helper.service';
import FeedItem from '../components/feed-item/feed-item'


class TeamScreenMobile extends React.Component {
    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active';
            this.forceUpdate();
        }, 1);
    }

    render() {
        const feed = _.take(_.sortBy(this.props.feed.feed, 'time').reverse(), 5);

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

                                <div className="thin-heading-2">Weekly leaderboard</div>



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


                                <div className="block light flex flex-row">
                                    <div className="flex flex-justify flex-min" style={{padding: '0 40px'}}>
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
                                                    marginLeft: -100,
                                                    top       : 40
                                                }}/>
                                                <img className="invite-icon" src="/statics/svg/dash/croc.svg" style={{
                                                    marginLeft: -90,
                                                    top       : 210
                                                }}/>
                                                <img className="invite-icon" src="/statics/svg/dash/flamingo.svg" style={{
                                                    marginLeft: 70,
                                                    top       : 50
                                                }}/>
                                                <img className="invite-icon" src="/statics/svg/dash/giraffe.svg" style={{
                                                    marginLeft: 120,
                                                    top       : 210
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