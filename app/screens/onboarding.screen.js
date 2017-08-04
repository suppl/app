import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-component';
import * as _ from 'lodash';

import * as ACTIONS from '../constants/actions.constants';
import SubHeader from '../components/sub-header/sub-header';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';
import {SessionList, isAudioAvailable, isAudioDone} from '../services/session.service';
import {SetUrl, If} from '../services/helper.service';


class SessionScreen extends React.Component {
    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active';
            this.forceUpdate();
        }, 1);
    }

    render() {
        const session = _.find(SessionList, {slug: this.props.sessionId});

        const isInactive = (audio) => ({'data-inactive': !isAudioAvailable(audio)});
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
                                <div className="sub-sub-heading-4">
                                    <Link href="/sessions">Sessions</Link> › {session.name}
                                </div>

                                <div className="session-header" style={{
                                    backgroundImage: `url('${session.pattern}')`,
                                    backgroundColor: session.color,
                                }}>

                                    <div className="session-title" style={{marginLeft: -3}}>{session.name}</div>
                                    <div className="session-text">{session.description}</div>
                                    <div className="banner-butn clickable">
                                        <i className="fa fa-play"/>
                                        <span>Begin</span>
                                    </div>
                                </div>

                                <div className="session-audios">
                                    {session.audios.map((audio, index) =>
                                        <div className="session-audio" {...isInactive(audio)}>
                                            <div className="audio-check">
                                                <i className="icon-uniE7D6"/>
                                            </div>

                                            <div className="audio-title">
                                                Day {audio.index}
                                            </div>

                                            <div className="audio-play clickable" onClick={() => this.props.showAudio(session, audio)}>
                                                <i className="fa fa-play"/>
                                            </div>

                                            <div className="audio-time">
                                                3 mins
                                            </div>
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
)(SessionScreen)