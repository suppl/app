import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-component';
import Router from 'react-router-component'
import * as _ from 'lodash';

import * as ACTIONS from '../../constants/actions.constants';
import {SessionList, OnboardingList, isAudioAvailable} from '../../services/session.service';
import {SetUrl, If} from '../../services/helper.service';

require('./onboarding.component.scss');


class Onboarding extends React.Component {
    // const screen = this.props.screen;

    render() {
        // const session    = this.props.settings.session;
        const state = this.props.onboarding;
        // const audio      = this.props.settings.audio;

        return (
            <div className={`onboarding-component ${this.props.onboarding.visible ? 'active' : ''}`} onClick={this.props.nextScreen}>
                <div className="onboarding-steps">
                    {state.onboarding.screens.map((screen, index) =>
                        <div className={`onboarding-step ${state.currentScreen >= index ? 'active' : ''}`}
                             onClick={(e) => this.props.setCurrentScreen(e, index)}
                        />
                    )}
                </div>

                <div className="onboarding-skip" onClick={this.props.hideScreen}>Skip</div>

                <div className="flex-stuff">
                    <div className="onboarding-continue">
                        Click anywhere to continue
                    </div>
                </div>


                {state.onboarding.screens.map((screen, index) =>
                    <div className={`flex-stuff ${state.currentScreen === index ? '' : 'gone'}`}>
                        <div className="onboarding-text">
                            {screen.text}
                        </div>
                    </div>
                )}

            </div>
        )
    }
}


const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    nextScreen: () => dispatch({
        type: ACTIONS.NEXT_ONBOARDING_SCREEN
    }),

    lastScreen: () => dispatch({
        type: ACTIONS.LAST_ONBOARDING_SCREEN
    }),

    hideScreen: (e) => {
        dispatch({
            type: ACTIONS.HIDE_ONBOARDING
        });
        e.stopPropagation();
    },

    setCurrentScreen: (e, index) => {
        dispatch({
            type         : ACTIONS.SET_CURRENT_ONBOARDING_SCREEN,
            currentScreen: index,
        });
        e.stopPropagation();
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Onboarding)