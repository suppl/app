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


                <div className="row">
                    <div className="col-sm-4">
                        <div className="sub-sub-heading">Suppl session</div>
                        <div className="stats-box">
                            <div className="stats-stat">
                                <div className="stat-icon icon-heart"/>
                                <div className="stat-number">0</div>
                                <div className="stat-desc">Calories burnt</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="sub-sub-heading">Daily achievements</div>
                        <div className="stats-box">
                            <div className="stats-stat">
                                <div className="stat-icon icon-heart"/>
                                <div className="stat-number">0</div>
                                <div className="stat-desc">Calories burnt</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="sub-sub-heading">Your suppl stats</div>
                        <div className="stats-box">
                            <div className="stats-stat">
                                <div className="stat-icon icon-heart"/>
                                <div className="stat-number">0</div>
                                <div className="stat-desc">Calories burnt</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="list-container">
                    <div className="list-background"/>
                    <div className="list-start">
                        <div className="start-circle">
                            <div className="start-inner-circle">
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
        type   : ACTIONS.SHOW_NOTIFICATION,
        message: 'MEEE'
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash)