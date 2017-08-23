import React from 'react';
import {Howler, Howl} from 'howler';
import {connect} from "react-redux";
import * as moment from "moment";
// import {Dispatch, State, Store} from './../services/dispatch.service';

import * as ACTIONS from '../../constants/actions.constants';
import {SetUrl, If, CalcStreak} from '../../services/helper.service';
import {Dispatch, State} from "../../services/dispatch.service";

require('./complete.component.scss');

class Complete extends React.Component {

    componentWillMount() {
        // setTimeout(() => {
            // Dispatch({type: ACTIONS.SHOW_COMPLETE})
        // }, 2000);
    }

    getClasses() {
        return [this.props.settings.completeVisible ? 'active' : ''].join(' ');
    }

    // hideSession() {
    //     Dispatch({type: ACTIONS.HIDE_AUDIO});
    //     Dispatch({type: ACTIONS.PAUSE_AUDIO});
    // }

    hideComplete() {
        Dispatch({type: ACTIONS.HIDE_AUDIO})
        Dispatch({type: ACTIONS.HIDE_COMPLETE})
        // Dispatch({type: ACTIONS.PAUSE_AUDIO});
    }

    render() {

        const audio   = State().settings.audio;
        const session = State().settings.session;

        return (
            <div className={`complete-component ${this.getClasses()}`}>

                <div className={`complete-top ${this.getClasses()}`} style={{backgroundColor: session.color}}>

                    {/*<div className="complete-header">*/}

                    {/*<div className="header-name ">*/}
                    {/*</div>*/}

                    {/*<div className="header-icon clickable" onClick={this.hideComplete}>*/}
                    {/*<i className="icon-uniE7D7"/>*/}
                    {/*</div>*/}
                    {/*</div>*/}

                    <div className="top-stats">
                        <div className="top-stat">
                            <div className="stat-number">+{audio.NEAT}</div>
                            <div className="stat-text">Your NEAT score</div>
                        </div>
                        <div className="top-stat">
                            <div className="stat-number">
                                {CalcStreak(State().public.user)}<div className="mini-text">day</div>
                            </div>
                            <div className="stat-text">Run streak</div>
                        </div>
                        <div className="top-stat">
                            <div className="stat-number">
                                {audio.duration[0]}<div className="mini-text">mins</div>
                                </div>
                            <div className="stat-text">Realign time</div>
                        </div>
                    </div>



                </div>

                <div className={`complete-bottom ${this.getClasses()}`}>

                    <img className="fist-bump" src="/statics/svg/session-icon/wrist-icon.svg" alt=""/>

                    <div className="fist-bump-text">
                        Flamingo Fist Pump!
                    </div>

                    <div className="quote-text">
                        “Everyday is an opportunity to realign yourself”
                    </div>

                    <div className="banner-butn clickable" onClick={this.hideComplete}>
                        Complete &nbsp; <i className="fa fa-angle-right"/>
                    </div>


                </div>

                {/*<div className="complete-content">*/}

                {/*<div className="complete-info">*/}
                {/*<div className="complete-session">*/}
                {/*{audio.name || 'Session ' + audio.index}*/}
                {/*</div>*/}
                {/*<div className="complete-length">*/}
                {/*{audio.duration[0]} minute{audio.duration[0] == 1 ? '' : 's'}*/}
                {/*</div>*/}
                {/*</div>*/}

                {/*<div className="complete-button" style={{background: session.color}}>*/}
                {/*<div className={`button-background ${State().settings.playing ? 'isPlaying' : ''}`}*/}
                {/*onClick={this.playPause}*/}
                {/*>*/}
                {/*<div className="button-inside">*/}
                {/*<If condition={!State().settings.playing}>*/}
                {/*<i className="fa fa-play" style={{*/}
                {/*fontSize  : '100px',*/}
                {/*marginLeft: '14px',*/}
                {/*}}/>*/}
                {/*</If>*/}

                {/*<If condition={State().settings.playing}>*/}
                {/*<i className="icon-uniE6B9"/>*/}
                {/*</If>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}


                {/*<div className="complete-bar">*/}
                {/*<div className="bar-fill" style={{width: this.getDash()}}/>*/}
                {/*</div>*/}

                {/*<div className="complete-time">{this.seek}</div>*/}
                {/*</div>*/}
            </div>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Complete)