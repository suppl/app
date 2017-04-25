import React from 'react';

import * as ACTIONS from '../constants/actions.constants';

import {connect} from "react-redux";

import SubHeader from '../components/sub-header/sub-header';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';

class Achievements extends React.Component {
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
                        <SubHeader text="Achievements"/>

                        <div className="content-area flex flex-max">


                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="sub-sub-heading">Your run streak</div>
                                    <div className="stats-streak">
                                        {/*<img src="/statics/images/streak.png" alt="" className="streak-img"/>*/}
                                        <div className="streak-number">1</div>
                                        <div className="streak-header">Day streak</div>
                                        {/*<div className="streak-line"/>*/}
                                        {/*<div className="streak-text">*/}
                                            {/*Keep it up superstar. Everyday is a <br/> blessing, make the most of it.*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="sub-sub-heading">Streak stars</div>
                                    <div className="stats-box">
                                        <div className="stats-stat">
                                            <div className="stat-icon icon-heart"/>
                                            <div className="stat-number">708</div>
                                            <div className="stat-desc">Calories burnt</div>
                                        </div>
                                        <div className="stats-stat">
                                            <div className="stat-icon icon-heart"/>
                                            <div className="stat-number">708</div>
                                            <div className="stat-desc">Calories burnt</div>
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
        type: ACTIONS.UPDATE_NAME,
        displayName: event.target.value,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Achievements)