import React from 'react';
import {Link} from 'react-router-component';
import * as _ from 'lodash';

import * as ACTIONS from '../constants/actions.constants';

import {connect} from "react-redux";

import {Dispatch, State} from './../services/dispatch.service';
import {CalcComplete, CalcStreak, CalcTotals, SetUrl, SortActivity} from '../services/helper.service';
import SubHeader from '../components/sub-header/sub-header';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';
import Promo from '../components/promo/promo';
import ActivityItem from '../components/activity-item/activity-item';

class ProfileScreen extends React.Component {
    componentWillMount() {
        Dispatch({type: ACTIONS.LOAD_PROFILE_BY_ID, userId: this.props.profileId});

        setTimeout(() => {
            this.ready = true;
            this.forceUpdate();
        }, 1);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.profileId !== this.props.profileId) {
            $('.content-area').scrollTop(0);
            Dispatch({type: ACTIONS.LOAD_PROFILE_BY_ID, userId: nextProps.profileId});
        }
    }

    componentDidMount() {
        SortActivity();
    }

    render() {
        const avatarUrls = [
            '/statics/svg/avatars/bird.svg',
            '/statics/svg/avatars/croc.svg',
            '/statics/svg/avatars/flamingo.svg',
            '/statics/svg/avatars/giraffe.svg',
            '/statics/svg/avatars/hippo.svg',
        ];

        let feed = State().profile.feed;
        let user = State().profile.user;

        this.activeClass = user.name && this.ready ? 'active-screen' : '';

        const toggleAvatars = () => Dispatch(ACTIONS.TOGGLE_PROFILE_AVATARS);
        const selectAvatar  = (avatarUrl) => Dispatch({type: ACTIONS.SET_PROFILE_AVATAR, avatar: avatarUrl});

        return (
            <div data-screen className={`${this.activeClass}`}>
                <div className="flex flex-row">
                    <Sidebar screen="profile"/>
                    <div data-content className="flex flex-max">
                        <Header/>
                        <div className="content-area" style={{paddingTop: 0}}>
                            <div className="content-content">

                                <div className="block light" style={{backgroundImage: `url('/statics/svg/hero/profile-hero.svg')`}}>
                                    <div className="flex flex-row flex-align">
                                        <div className="profile-avatars">
                                            <div className={`main-avatar clickable`}
                                                 style={{backgroundImage: `url('${user.avatar}')`}}
                                                 onClick={toggleAvatars}
                                            />

                                            {user.uid == State().public.user.uid ?
                                                <div className={`other-avatars ${State().profile.avatarsVisible ? 'active' : ''}`}>
                                                    {avatarUrls.map(avatarUrl =>
                                                        <div className="other-avatar clickable"
                                                             onClick={() => selectAvatar(avatarUrl)}
                                                             style={{backgroundImage: `url('${avatarUrl}')`}}
                                                        />
                                                    )}
                                                </div> : ''
                                            }

                                        </div>
                                        <div style={{marginRight: 'auto'}}>
                                            <div className="thin-heading">{user.name}</div>
                                            <div className="thin-subheading">is feeling <strong>Excited</strong></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="thin-heading-2">{user.firstName || user.name}'s NEPA score</div>

                                <div className="nepa-banner">
                                    <div className="nepa-score">+{CalcTotals(user).NEPA}</div>
                                    <div className="nepa-text">Your <strong>NEPA</strong> score</div>
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

                                <div className="bricklayer">
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