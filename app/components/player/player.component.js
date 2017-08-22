import React from 'react';
import {Howler, Howl} from 'howler';
import {connect} from "react-redux";
import * as moment from "moment";
// import {Dispatch, State, Store} from './../services/dispatch.service';

import * as ACTIONS from '../../constants/actions.constants';
import {SetUrl, If} from '../../services/helper.service';
import {Dispatch, State} from "../../services/dispatch.service";

require('./player.component.scss');

class Player extends React.Component {
    // getClasses = () => [this.props.settings.audioVisible ? 'active' : ''].join(' ');

    componentDidMount() {
        let that = this;
        window.addEventListener("popstate", function(e) {
            console.log('popstate', State().settings);
            if (that.props.settings.audioVisible) {
                console.log('popstate audioVisible');
                e.preventDefault();
                that.hideSession();
                return false;
            }
        });

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
        if (!this.isSoundLoaded()) return 0;
        return ((this.props.settings.sound.seek() / this.props.settings.sound.duration()) * 100) + '%'
    }

    pad(n) {
        return (n < 10) ? ("0" + n) : n;
    }

    playPause() {
        if (State().settings.playing) {
            Dispatch({type: ACTIONS.PAUSE_AUDIO})
        } else {
            Dispatch({type: ACTIONS.PLAY_AUDIO})
        }
    }

    hideSession() {
        Dispatch({type: ACTIONS.HIDE_AUDIO});
        Dispatch({type: ACTIONS.PAUSE_AUDIO});
    }

    render() {


        const audio = State().settings.audio;
        const session = State().settings.session;

        return (
            <div className={`player-component ${this.getClasses()}`} style={{backgroundColor: session.color}}>
                <div className="player-header">
                    <div className="header-icon clickable"/>

                    <div className="header-name ">
                        {session.name}
                    </div>

                    <div className="header-icon clickable" onClick={this.hideSession}>
                        <i className="icon-uniE7D7"/>
                    </div>
                </div>

                <div className="player-content">

                    <div className="player-info">
                        <div className="player-session">
                            {audio.name || 'Session ' + audio.index}
                        </div>
                        <div className="player-length">
                            {State().settings.audio.duration[0]} minute(s)
                        </div>
                    </div>

                    <div className="player-button" style={{background: session.color}}>
                        <div className={`button-background ${State().settings.playing? 'isPlaying' : ''}`}
                             onClick={this.playPause}
                        >
                            <div className="button-inside">
                                <If condition={!State().settings.playing}>
                                    <i className="fa fa-play" style={{
                                        fontSize  : '100px',
                                        marginLeft: '14px',
                                    }}/>
                                </If>

                                <If condition={State().settings.playing}>
                                    <i className="icon-uniE6B9"/>
                                </If>
                            </div>
                        </div>
                    </div>


                    <div className="player-bar">
                        <div className="bar-fill" style={{width: this.getDash()}}/>
                    </div>

                    <div className="player-time">{this.seek}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Player)