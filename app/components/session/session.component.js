import React from 'react';
import {Howler, Howl} from 'howler';
import {connect} from "react-redux";
import * as moment from "moment";
// import {Dispatch, State, Store} from './../services/dispatch.service';

import * as ACTIONS from '../../constants/actions.constants';

require('./session.component.scss');

class Audio extends React.Component {
    // getClasses = () => [this.props.settings.audioVisible ? 'active' : ''].join(' ');

    componentDidMount() {
        setInterval(() => {
            this.duration = this.getDuration();
            this.seek     = this.getSeek();
            this.dash     = this.getDash();
            this.forceUpdate();
        }, 10);
    }

    duration = '0:00';

    getClasses() {
        return [
            this.props.settings.audioVisible ? 'active' : '',
            // this.props.settings.sessionTheme
        ].join(' ');
    }

    isSoundLoaded() {
        return !!this.props.settings.sound && this.props.settings.sound.state() === 'loaded';
    }

    getDuration() {
        if (!this.isSoundLoaded()) return '0:00';
        let duration = moment.duration(this.props.settings.sound.duration(), 'seconds');
        return `${this.pad(duration.minutes())}:${this.pad(duration.seconds())}`;
    }

    getSeek() {
        if (!this.isSoundLoaded()) return '0:00';
        let duration = moment.duration(this.props.settings.sound.duration() - this.props.settings.sound.seek(), 'seconds');

        return `${this.pad(duration.minutes())}:${this.pad(duration.seconds())}`;
    }

    getDash() {
        return (700 + 700 * (this.props.settings.sound.seek() / this.props.settings.sound.duration())) + 'px'
    }

    pad(n) {
        return (n < 10) ? ("0" + n) : n;
    }

    render() {

        return (
            <div className={`session-component ${this.getClasses()}`}>
                <div className="session-close icon-cross" onClick={this.props.hideSession}/>
                <div className="session-title">{this.props.settings.session.name}</div>
                <div className="audio-title">{this.props.settings.audio.name}</div>

                <div className="audio-play">
                    <svg>
                        <circle r="111" cx="111" cy="111" style={{strokeDashoffset: this.dash}}></circle>
                    </svg>

                    {this.props.settings.playing ?
                        <div className="play-inner" onClick={this.props.pauseAudio}>
                            <i className="fa fa-pause fa-fw" style={{margin: 0}}/>
                        </div>
                        :
                        <div className="play-inner" onClick={this.props.playAudio}>
                            <i className="fa fa-play fa-fw"/>
                        </div>
                    }
                </div>
                <div className="audio-duration">
                    {this.seek} left <br/> ({this.duration} mins)
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    hideSession: () => dispatch({type: ACTIONS.HIDE_AUDIO}),
    loadAudio  : () => dispatch({type: ACTIONS.LOAD_AUDIO}),
    playAudio  : () => dispatch({type: ACTIONS.PLAY_AUDIO}),
    pauseAudio : () => dispatch({type: ACTIONS.PAUSE_AUDIO}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Audio)