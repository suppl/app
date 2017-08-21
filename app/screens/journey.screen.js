import React from 'react';
import {Link} from 'react-router-component';
import * as _ from 'lodash';

import * as ACTIONS from '../constants/actions.constants';

import {connect} from "react-redux";

import {Dispatch, State} from './../services/dispatch.service';
import {CalcStreak, SetUrl} from '../services/helper.service';
import SubHeader from '../components/sub-header/sub-header';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';

class JourneyScreen extends React.Component {
    getAwards() {
        if (!this.props.user.customData.awards) return [];

        return _.values(this.props.user.customData.awards).map(award => {
            return this.props.award.awards[award.awardId]
        });
    }

    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active-screen';
            this.forceUpdate();
        }, 1);

        Dispatch(ACTIONS.HIDE_AUDIO);
    }

    render() {

        const activeStreak = (number) => {
            return number <= CalcStreak(this.props.public.user) ? 'active' : ''
        };

        return (
            <div data-screen className={`${this.activeClass}`}>
                <div className="flex flex-row">
                    <Sidebar screen="journey"/>
                    <div data-content className="flex flex-max">
                        <Header/>
                        <div className="content-area" style={{paddingTop: 0}}>
                            <div className="content-content">

                                <div className="block light" style={{backgroundImage:`url('/statics/svg/hero/journey-hero.svg')`}}>
                                    <div className="flex flex-row flex-between">
                                        <div>
                                            <div className="thin-heading">Journey</div>
                                            <div className="thin-subheading">Great to have you realigning.</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="journey-items">
                                    <div className="journey-item">
                                        <div className="journey-box">
                                            <div className="box-logo"></div>
                                            <div className="box-title">Sitting - </div>
                                            Day 3

                                            <div className="box-time">3 days ago</div>
                                        </div>
                                    </div>
                                    <div className="journey-item">
                                        <div className="journey-box">
                                            <div className="box-logo"></div>
                                            <div className="box-title">Sitting - </div>
                                            Day 3

                                            <div className="box-time">3 days ago</div>
                                        </div>
                                    </div>
                                    <div className="journey-item">
                                        <div className="journey-box">
                                            <div className="box-logo"></div>
                                            <div className="box-title">Sitting - </div>
                                            Day 3

                                            <div className="box-time">3 days ago</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(JourneyScreen)