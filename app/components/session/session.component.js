import React from 'react';

import * as ACTIONS from '../../constants/actions.constants';

import {connect} from "react-redux";

require('./session.component.scss');

class Session extends React.Component {

    getClasses() {
        return [
            this.props.settings.sessionVisible ? 'active' : '',
            // this.props.settings.sessionTheme
        ].join(' ');
    }

    render() {

        return (
            <div className={`session-component ${this.getClasses()}`}>
                <div className="session-close icon-cross" onClick={this.props.hideSession}></div>
                <div className="session-title">{this.props.settings.session.name} - Part 1</div>
                <div className="audio-title">Begin Fresh</div>
                <div className="audio-duration">(3 mins)</div>

                <div className="audio-play">
                    <img src="/statics/images/play-btn-player.png" alt=""/>
                </div>


            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('mapStateToProps', state);

    return state;
};

const mapDispatchToProps = dispatch => {
    return {
        hideSession: () => dispatch({
            type: ACTIONS.HIDE_SESSION
        })
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Session)