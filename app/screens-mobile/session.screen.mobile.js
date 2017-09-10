import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-component';
import * as _ from 'lodash';

import * as ACTIONS from '../constants/actions.constants';
import HeaderMobile from '../components/header/header.mobile';
import FooterMobile from '../components/footer/footer.mobile';
import {SessionList, isAudioAvailable, isAudioDone} from '../services/session.service';
import {SetUrl, If} from '../services/helper.service';


class SessionScreenMobile extends React.Component {
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
                <div data-mobile-screen>

                    <HeaderMobile/>
                    <FooterMobile screen="sessions"/>
                    <div data-mobile-content style={{padding: 0}}>
                        <div className="content-area" style={{paddingTop: 0}}>
                            <div className="content-content">

                                <div className="block light" style={{backgroundImage:`url('/statics/svg/hero/sessions-hero.svg')`}}>
                                    <div className="flex flex-row flex-between">
                                        <div>
                                            {/*<div className="thin-heading">Sessions</div>*/}
                                            <div className="thin-heading">
                                                <Link href="/sessions">&lsaquo; Sessions</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="session-header" style={{
                                    backgroundImage: `url('${session.pattern}')`,
                                    backgroundColor: session.color,
                                }}>

                                    <If condition={session.audios.length > 1}>
                                        <div className="session-time">Day 1 of {session.days || session.audios.length}</div>
                                    </If>
                                    <If condition={session.audios.length === 1}>
                                        <div className="session-time">{session.audios[0].duration[0]} min{session.audios[0].duration[0] == 1 ? '' : 's'}</div>
                                    </If>

                                    <div className="session-title" style={{marginLeft: -5}}>{session.name}</div>
                                    <div className="session-text">{session.description}</div>
                                </div>

                                <div className="session-audios">
                                    {session.audios.map((audio, index) =>
                                        <div className="session-audio" {...isInactive(audio)}>

                                            <If condition={isAudioAvailable(audio)}>
                                                <div className="audio-play clickable" onClick={() => this.props.showAudio(session, audio)}>
                                                    <i className="fa fa-play"/>
                                                </div>
                                            </If>

                                            <If condition={!isAudioAvailable(audio)}>
                                                <div className="audio-check">
                                                    <i className="icon-uniE7D6"/>
                                                </div>
                                            </If>

                                            <div className="audio-title">
                                                {audio.name || 'Day ' + audio.index}

                                                {isAudioDone(audio) ?
                                                    <div className="audio-done">
                                                        <i className="icon-uniE7D6"/>
                                                    </div> : null
                                                }
                                            </div>

                                            <div style={{margin:'auto'}}/>

                                            <div className="audio-time">
                                                {audio.duration[0]} min{audio.duration[0] == 1 ? '' : 's'}
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
)(SessionScreenMobile)