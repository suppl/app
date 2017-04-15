import React from 'react';
import {connect} from "react-redux";
import * as ACTIONS from '../../constants/actions.constants';
import {isAudioAvailable} from '../../services/session.service';

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
                <div className="list-container">
                    <div className="list-background"/>
                    <div className="list-start">
                        <div className="start-circle">
                            <div className="start-inner-circle">{this.props.settings.session.name}</div>
                        </div>
                    </div>

                    {session.audios.map((audio, index) =>
                        <div className="list-item">
                            { isAudioAvailable(audio) ?
                                <div className="list-circle" onClick={() => this.props.showAudio(session, audio)}><i className="fa fa-play fa-fw"/></div>
                                :
                                <div className="list-circle-number">{index}</div>
                            }
                            { isAudioAvailable(audio) ? <div className="list-line-started"/> : <div className="list-line"/> }
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