import React from 'react';

import * as ACTIONS from '../constants/actions.constants';

import {connect} from "react-redux";

import SubHeader from '../components/sub-header/sub-header';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';

class Stats extends React.Component {
    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active-screen';
            this.forceUpdate();
        }, 1);
    }

    render() {
        return (
            <div data-screen className={`${this.activeClass}`}>
                <Header/>
                <div className="flex flex-row">
                    <Sidebar/>
                    <div data-content className="flex flex-max">
                        <SubHeader text="Stats"/>

                        <div className="content-area flex flex-max">


                            {/*<div className="sub-sub-heading">Your streak</div>*/}
                            {/*<div className="stats-streak">*/}
                                {/*<img src="/statics/images/streak.png" alt="" className="streak-img"/>*/}
                                {/*<div className="streak-number">1</div>*/}
                                {/*<div className="streak-header">Day streak</div>*/}
                                {/*<div className="streak-line"/>*/}
                                {/*<div className="streak-text">*/}
                                    {/*Keep it up superstar. Everyday is a <br/> blessing, make the most of it.*/}
                                {/*</div>*/}
                            {/*</div>*/}

                            <div className="sub-sub-heading">Health stats</div>
                            <div className="stats-box">
                                <div className="stats-stat">
                                    <div className="stat-icon icon-heart"/>
                                    <div className="stat-number">708</div>
                                    <div className="stat-desc">Calories burnt</div>
                                </div>
                                <div className="stats-stat">
                                    <div className="stat-icon icon-wind"/>
                                    <div className="stat-number">92%</div>
                                    <div className="stat-desc">Lung love</div>
                                </div>
                                <div className="stats-stat">
                                    <div className="stat-icon icon-brain"/>
                                    <div className="stat-number">81%</div>
                                    <div className="stat-desc">Brain happiness</div>
                                </div>
                                <div className="stats-stat">
                                    <div className="stat-icon icon-compass"/>a
                                    <div className="stat-number">61%</div>
                                    <div className="stat-desc">Skeletal alignment</div>
                                </div>
                            </div>

                            <div className="sub-sub-heading">Engagement stats</div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="stats-box">
                                        <div className="stats-stat">
                                            <div className="stat-icon dark icon-checkmark-circle"/>
                                            <div className="stat-number">12</div>
                                            <div className="stat-desc">Sessions complete</div>
                                        </div>
                                        <div className="stats-stat">
                                            <div className="stat-icon dark icon-check-square"/>
                                            <div className="stat-number">3</div>
                                            <div className="stat-desc">Series complete</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="stats-box">
                                        <div className="stats-stat">
                                            <div className="stat-icon tealish icon-trophy2"/>
                                            <div className="stat-number">34</div>
                                            <div className="stat-desc">Badges won</div>
                                        </div>
                                        <div className="stats-stat">
                                            <div className="stat-icon tealish icon-focus"/>
                                            <div className="stat-number">22</div>
                                            <div className="stat-desc">Daily goals reached</div>
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
    //console.log('', state);

    firebase.auth().onAuthStateChanged(function (user) {
        if (!user) window.location.hash = '/';
    });

    return state
};

const mapDispatchToProps = dispatch => ({

    updateName: (event) => dispatch({
        type: ACTIONS.SET_DISPLAY_NAME,
        displayName: event.target.value,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stats)