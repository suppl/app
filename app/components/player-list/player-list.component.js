import React from 'react';
import {connect} from "react-redux";
import * as ACTIONS from '../../constants/actions.constants';
import {isAudioAvailable, isAudioDone} from '../../services/session.service';

require('./player-list.component.scss');

class Splash extends React.Component {
    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active';
            this.forceUpdate();
        }, 1);
    }

    render() {

        const session = this.props.settings.session;

        return (
            <div className={`player-list-component`}>


                <div className="flex flex-row flex-min stats-all">

                    <div className="stats-container">
                        <div className="sub-sub-heading">Suppl session</div>
                        <div className="stats-box">
                            <div className="stats-stat">
                                <div className={`stat-icon session-icon ${session.icon}`} style={{
                                    background: session.color,
                                    color     : 'white',
                                }}/>
                                <div className="flex">
                                    <div className="stat-number">{session.name}</div>
                                    <div className="stat-desc">Level {session.level}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="stats-container">
                        <div className="sub-sub-heading">Daily achievements</div>
                        <div className="stats-box">
                            <div className="stats-stat">
                                <div className="stat-icon flaticon-technology-1 light-gold"/>
                                <div className="flex">
                                    <div className="stat-number">5<span>min</span></div>
                                    <div className="stat-desc">Active today</div>
                                </div>
                            </div>

                            <div className="stats-stat">
                                <div className="stat-icon flaticon-star light-gold"/>
                                <div className="flex">
                                    <div className="stat-number">1</div>
                                    <div className="stat-desc">Day streak</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="stats-container">
                        <div className="sub-sub-heading">Healthy stats</div>
                        <div className="stats-box">
                            <div className="stats-stat">
                                <div className="stat-icon flaticon-lungs-with-bronchi"/>
                                <div className="flex">
                                    <div className="stat-number">20</div>
                                    <div className="stat-desc">Lung love</div>
                                </div>
                            </div>
                            <div className="stats-stat">
                                <div className="stat-icon flaticon-brain-1"/>
                                <div className="flex">
                                    <div className="stat-number">10</div>
                                    <div className="stat-desc">Brain boost</div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


                <div className="list-container">
                    <div className="list-background"/>
                    <div className="list-start">
                        <div className="start-circle">
                            <div className="start-inner-circle" style={{
                                background: session.color,
                                color     : 'white',
                            }}>
                                <i className={this.props.settings.session.icon}></i>
                            </div>
                        </div>
                    </div>

                    {session.audios.map((audio, index) =>
                        <div className="list-item">


                            { isAudioAvailable(audio)
                                ? <div className={`list-circle`} onClick={() => this.props.showAudio(session, audio)}>
                                    { isAudioDone(audio) ? <div className="list-audio-done flaticon-interface"/> : ''}

                                    <i className="fa fa-play fa-fw"/></div>
                                : <div className="list-circle-number">{index + 1}</div>
                            }
                            { isAudioAvailable(audio)
                                ? <div className="list-line-started"/>
                                : <div className="list-line"/>
                            }
                        </div>
                    )}

                    <div className="last-item">
                        <div className="list-line"/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({

    showAudio: (session, audio) => dispatch({
        type: ACTIONS.SHOW_AUDIO,
        session,
        audio
    }),

    showNotification: () => dispatch({
        type: ACTIONS.SHOW_NOTIFICATION,
        message: 'MEEE'
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash)