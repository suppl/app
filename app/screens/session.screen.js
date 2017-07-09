import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-component';
import * as _ from 'lodash';

import * as ACTIONS from '../constants/actions.constants';
import SubHeader from '../components/sub-header/sub-header';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';
import {SessionList, isAudioAvailable} from '../services/session.service';
import {SetUrl, If} from '../services/helper.service';


class Sessions extends React.Component {
    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active';
            this.forceUpdate();
        }, 1);
    }

    render() {
        const session = _.find(SessionList, {slug: this.props.sessionId});

        const isInactive = (audio) => ({'data-inactive': isAudioAvailable(audio)});
        const isLast     = (index) => ({'data-last': index + 1 === session.audios.length});

        console.log('session props', this.props['sessionId']);

        return (
            <div data-screen className={`${this.activeClass}`}>
                <Header/>
                <div className="flex flex-row">
                    <Sidebar screen="sessions"/>
                    <div data-content className="flex flex-max">

                        <div className="content-area" style={{paddingTop: 0}}>
                            <div className="content-content">
                                <SubHeader text={`Sessions › ${session.name}`}/>
                                <div className="session-header" style={{
                                    backgroundImage: `url('${session.pattern}')`,
                                    backgroundColor: session.color,
                                }}>
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
                                    <div>{session.description}</div>
                                </div>

                                <div className="session-list">
                                    <div className="hori list-header">
                                        <div className="col col-70">Session</div>
                                        <div className="col"/>
                                        <div className="col col-100">Tune In</div>
                                        <div className="col"/>
                                        <div className="col col-70"><i className="icon-heart"/></div>
                                        <div className="col col-70"><i className="flaticon-arrows-2"/></div>
                                    </div>
                                    {session.audios.map((audio, index) =>
                                        <div className="hori list-row" {...isInactive(audio)}>
                                            <div className="col col-70">
                                                <div className="session-number" {...isLast(index)}>
                                                    {index + 1}
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="session-info">
                                                    <div className="info-top">5 mins</div>
                                                    <div className="info-bottom">3 exercises low intensity</div>
                                                </div>
                                            </div>
                                            <div className="col col-100">
                                                <If condition={isAudioAvailable(audio)}>
                                                    <div className="banner-butn flush clickable" onClick={() => this.props.showAudio(session, audio)}>
                                                        <i className="fa fa-play"/>
                                                        <span>Begin</span>
                                                    </div>
                                                </If>
                                                <If condition={!isAudioAvailable(audio)}>
                                                    <div className="banner-butn flush" disabled onClick={() => this.props.showAudio(session, audio)}>
                                                        <i className="fa fa-play"/>
                                                        <span>Begin</span>
                                                    </div>
                                                </If>
                                            </div>

                                            <div className="col"/>
                                            <div className="col col-70">58</div>
                                            <div className="col col-70">2k</div>
                                        </div>
                                    )}
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
)(Sessions)