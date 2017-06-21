import React from 'react';

import * as ACTIONS from '../constants/actions.constants';

import {connect} from "react-redux";
import {Link} from 'react-router-component';
import {SetUrl} from '../services/helper.service';

import SubHeader from '../components/sub-header/sub-header';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';

class Progress extends React.Component {
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
                        <div className="content-area" style={{paddingTop: 0}}>
                            <div className="content-content">
                                <SubHeader text="Progress"/>

                                <div className="sub-sub-heading">Healthy stats</div>

                                <div className="thin-row">
                                    <div className="thin-col">
                                        <div className="info-stat">
                                            <div className="stat-icon" style={{backgroundImage:`url('/statics/svg/progress/progress-brain.svg')`}}/>
                                            <div className="stat-number">+20</div>
                                            <div className="stat-text">Brain boost</div>
                                        </div>
                                    </div>
                                    <div className="thin-col">
                                        <div className="info-stat">
                                            <div className="stat-icon" style={{backgroundImage:`url('/statics/svg/progress/progress-lungs.svg')`}}/>
                                            <div className="stat-number">+20</div>
                                            <div className="stat-text">Lung love</div>
                                        </div>
                                    </div>
                                    <div className="thin-col">
                                        <div className="info-stat">
                                            <div className="stat-icon" style={{backgroundImage:`url('/statics/svg/progress/progress-spine.svg')`}}/>
                                            <div className="stat-number">+20</div>
                                            <div className="stat-text">Spine strength</div>
                                        </div>
                                    </div>
                                    <div className="thin-col">
                                        <div className="info-stat">
                                            <div className="stat-icon" style={{backgroundImage:`url('/statics/svg/progress/progress-carbs.svg')`}}/>
                                            <div className="stat-number">+20</div>
                                            <div className="stat-text">Carbs burnt</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="thin-row">
                                    <div className="thin-col">
                                        <div className="info">
                                            <div className="info-icon" style={{backgroundImage:`url('/statics/svg/progress/progress-active.svg')`}}/>
                                            <div className="info-white"/>
                                            <div className="info-number">30</div>
                                            <div className="info-text">Total active minutes</div>
                                        </div>
                                    </div>

                                    <div className="thin-col">
                                        <div className="info">
                                            <div className="info-icon" style={{backgroundImage:`url('/statics/svg/progress/progress-exercise.svg')`}}/>
                                            <div className="info-white"/>
                                            <div className="info-number">1</div>
                                            <div className="info-text">Exercises learnt</div>
                                        </div>
                                    </div>
                                </div>


                                <div className="sub-sub-heading" style={{marginTop:20}}>Session stats</div>
                                <div className="thin-row" style={{marginTop:0}}>
                                    <div className="thin-col">
                                        <div className="info">
                                            <div className="info-icon" style={{backgroundImage:`url('/statics/svg/progress/progress-session.svg')`}}/>
                                            <div className="info-white"/>
                                            <div className="info-number">12</div>
                                            <div className="info-text">Total sessions complete</div>
                                        </div>
                                    </div>
                                    <div className="thin-col">
                                        <div className="info">
                                            <div className="info-icon" style={{backgroundImage:`url('/statics/svg/progress/winner (2).svg')`}}/>
                                            <div className="info-white"/>
                                            <div className="info-number">5</div>
                                            <div className="info-text">Toital badges won</div>
                                        </div>
                                    </div>
                                </div>


                                <div className="thin-row">
                                    <div className="thin-col">
                                        <div className="info-emoji">
                                            <div className="emoji-icon" style={{backgroundImage:`url('/statics/svg/emojis/love.svg')`}}></div>
                                            <div className="emoji-number">9</div>
                                        </div>
                                    </div>
                                    <div className="thin-col">
                                        <div className="info-emoji">
                                            <div className="emoji-icon" style={{backgroundImage:`url('/statics/svg/emojis/wow.svg')`}}></div>
                                            <div className="emoji-number">3</div>
                                        </div>
                                    </div>
                                    <div className="thin-col">
                                        <div className="info-emoji">
                                            <div className="emoji-icon" style={{backgroundImage:`url('/statics/svg/emojis/pain.svg')`}}></div>
                                            <div className="emoji-number">5</div>
                                        </div>
                                    </div>
                                    <div className="thin-col">
                                        <div className="info-emoji">
                                            <div className="emoji-icon" style={{backgroundImage:`url('/statics/svg/emojis/stress.svg')`}}></div>
                                            <div className="emoji-number">2</div>
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
        if (!user) SetUrl('/');
    });

    return state
};

const mapDispatchToProps = dispatch => ({

    updateName: (event) => dispatch({
        type       : ACTIONS.SET_DISPLAY_NAME,
        displayName: event.target.value,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Progress)