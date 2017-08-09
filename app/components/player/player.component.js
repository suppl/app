import React from 'react';
import {Howler, Howl} from 'howler';
import {connect} from "react-redux";
import * as moment from "moment";
// import {Dispatch, State, Store} from './../services/dispatch.service';

import * as ACTIONS from '../../constants/actions.constants';

require('./player.component.scss');

class Player extends React.Component {
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
        if (!this.isSoundLoaded()) return 0;
        return ((this.props.settings.sound.seek() / this.props.settings.sound.duration()) * 100) + '%'
    }

    pad(n) {
        return (n < 10) ? ("0" + n) : n;
    }

    render() {

        return (
            <div className={`player-component ${this.getClasses()}`} style={{backgroundColor: this.props.settings.session.color}}>
                <div className="player-main">
                    <div className="player-header">
                        <div className="header-back clickable" onClick={this.props.hideSession}>
                            <i className="fa fa-angle-left"/>
                        </div>

                        <div className="header-name ">
                            {this.props.settings.session.name}
                        </div>

                        <div className="header-right">
                            {/*<div className="header-name">*/}
                            {/*</div>*/}
                            <div className="header-number">
                                Day 1
                            </div>

                        </div>
                    </div>

                    {/*<div className="player-info">*/}
                        {/*<div className="big-text">Get Ready!</div>*/}
                    {/*</div>*/}

                    <div className="player-bar">
                        <div className="bar-fill" style={{height: this.getDash()}}></div>
                    </div>
                    <div className="player-controls">
                        {this.props.settings.playing ?
                            <div className="controls-control clickable" onClick={this.props.pauseAudio}>
                                <i className="flaticon-pause-1" style={{margin: 0}}/>
                            </div>
                            :
                            <div className="controls-control clickable" onClick={this.props.playAudio}>
                                <i className="flaticon-arrows" style={{marginLeft: '3px'}}/>
                            </div>
                        }

                        <div className="controls-time">{this.seek}</div>
                    </div>
                </div>
                {/*<div className="player-sidebar">*/}
                    {/*<div className="sidebar-header">Session reactions</div>*/}

                    {/*<div className="sidebar-feed">*/}
                        {/*<div className="feed-reaction">*/}
                            {/*<div className="reaction-icon"></div>*/}

                        {/*</div>*/}

                    {/*</div>*/}

                    {/*<div className="sidebar-reactions">*/}
                        {/*<div className="reactions-faces">*/}
                            {/*<div className="face-circle clickable">*/}
                                {/*<i className="flaticon-shapes"></i>*/}
                            {/*</div>*/}
                            {/*<div className="face-circle clickable">*/}
                                {/*<i className="emotions-emoticon-square-face-with-a-smile"></i>*/}
                            {/*</div>*/}
                            {/*<div className="face-circle clickable">*/}
                                {/*<i className="emotions-yawning-emoticon-square-face-1"></i>*/}
                            {/*</div>*/}
                        {/*</div>*/}

                        {/*<div className="reactions-text">React to your session</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
                {/*<div className="player-close icon-cross"/>*/}
                {/*<div className="session-title">{this.props.settings.session.name}</div>*/}
                {/*<div className="audio-title">{this.props.settings.audio.name}</div>*/}

                {/*<div className="audio-play">*/}
                {/*<svg>*/}
                {/*<circle r="111" cx="111" cy="111" style={{strokeDashoffset: this.dash}}/>*/}
                {/*</svg>*/}

                {/*{this.props.settings.playing ?*/}
                {/*<div className="play-inner playing" onClick={this.props.pauseAudio}>*/}
                {/*<i className="fa fa-pause fa-fw" style={{margin: 0}}/>*/}
                {/*</div>*/}
                {/*:*/}
                {/*<div className="play-inner" onClick={this.props.playAudio}>*/}
                {/*<i className="fa fa-play fa-fw"/>*/}
                {/*</div>*/}
                {/*}*/}
                {/*</div>*/}
                {/*<div className="audio-duration">*/}
                {/*{this.seek} left <br/> ({this.duration} mins)*/}
                {/*</div>*/}


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