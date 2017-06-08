import React from 'react';
import {connect} from "react-redux";
import * as _ from 'lodash';

import * as ACTIONS from '../constants/actions.constants';
import SubHeader from '../components/sub-header/sub-header';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';
import {SessionList, isAudioAvailable} from '../services/session.service';


class Sessions extends React.Component {
    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active';
            this.forceUpdate();
        }, 1);
    }

    render() {
        const session = _.find(SessionList, {slug: this.props.sessionId});

        const last = {'z':''};

        console.log('session props', this.props['sessionId']);

        return (
            <div data-screen className={`${this.activeClass}`}>
                <Header/>
                <div className="flex flex-row">
                    <Sidebar/>
                    <div data-content className="flex flex-max">
                        <SubHeader text={`Sessions › ${session.name}`}/>

                        <div className="content-area" style={{paddingTop: 0}}>
                            <div className="content-content">
                                <div className="session-header" style={{backgroundImage:`url('${session.banner}')`}}>
                                    <div className="header-overlay"></div>
                                    <div className="session-title">{session.name}</div>
                                    <div className="session-description">{session.description}</div>

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

                                <div className="session-header-extra">
                                    <div className="top-label">Good For</div>
                                    <div>Spinal co-ordination - Joint movemenet - core strength - focus - lungs</div>
                                </div>

                                <div className="session-list">
                                    <div className="hori list-header">
                                        <div className="col col-70">Session</div>
                                        <div className="col"></div>
                                        <div className="col col-70">Tune In</div>
                                        <div className="col"></div>
                                        <div className="col col-70"><i className="icon-heart"></i></div>
                                        <div className="col col-70"><i className="flaticon-arrows-2"></i></div>
                                    </div>
                                    {session.audios.map((audio, index) =>
                                        <div className="hori list-row">
                                            <div className="col col-70">
                                                <div className="session-number" data-last={index + 1 === session.audios.length}>
                                                    {index + 1}
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="next-session">Next session</div>
                                            </div>
                                            <div className="col col-70">
                                                <div className="play-button">
                                                    <i className="flaticon-arrows-1"></i>
                                                </div>
                                            </div>
                                            <div className="col"></div>
                                            <div className="col col-70">
                                                58
                                            </div>
                                            <div className="col col-70">
                                                2k
                                            </div>
                                        </div>
                                    )}

                                </div>
                            </div>



                            {/*<div className="session-banner"  style={{background: session.color}}>*/}
                            {/*<div className={`session-icon ${session.icon}`}/>*/}
                            {/*<div className="session-content flex flex-justify">*/}
                            {/*<strong>{session.name}</strong>*/}
                            {/*<div>{session.description}</div>*/}
                            {/*</div>*/}
                            {/*</div>*/}

                            {/*<div className="sub-sub-heading">Select your level</div>*/}

                            {/*<div className="session-levels">*/}
                            {/*{session.audios.map((audio, index) =>*/}
                            {/*<a className="session-level" href={`#/dashboard/${session.slug}`} disabled={!isAudioAvailable(audio)}>*/}
                            {/*<div className="level-top">*/}
                            {/*<div className="level-icon" style={{background: session.color}}>*/}
                            {/*<i className="flaticon-star"></i>*/}
                            {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="level-bottom">*/}
                            {/*<div>Level {index + 1}</div>*/}
                            {/*<i className="fa fa-angle-right"></i>*/}
                            {/*</div>*/}
                            {/*</a>*/}
                            {/*)}*/}
                            {/*</div>*/}

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

const mapDispatchToProps = dispatch => ({
    showAward: (awardId) => dispatch({
        type   : ACTIONS.SHOW_AWARD,
        awardId: awardId
    }),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sessions)