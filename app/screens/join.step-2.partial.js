import React from 'react';
import {Link} from 'react-router-component';
import * as _ from 'lodash';

import * as ACTIONS from '../constants/actions.constants';

import {connect} from "react-redux";

import {Dispatch, State} from './../services/dispatch.service';
import {CalcComplete, CalcStreak, CalcTotals, SetUrl} from '../services/helper.service';
import SubHeader from '../components/sub-header/sub-header';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';

class JoinStep2 extends React.Component {
    local = {
        password: '',
    };

    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active-screen';
            this.forceUpdate();
        }, 1);
    }

    render() {
        const Join = this.props.join;

        const updateLocal = (field, value) => (e) => {
            this.local[field] = value ? value : e.target.value;
            this.forceUpdate();
        };

        const update = (field, value) => (e) => Dispatch({
            type   : ACTIONS.SET_JOIN_DETAILS,
            [field]: value ? value : e.target.value
        });

        const isReady = () => !!this.local.password;

        const nextStep = () => {
            Dispatch({type: ACTIONS.SET_JOIN_DETAILS, currentTab: 'step-3', ...this.local});
        };

        return (
            <div>
                <div className="anon-title">Set a password</div>

                <p>Ideally something secure and memorable, minimum 6 characters.</p>

                <div className="suppl-label" style={{marginTop: 40}}>Password</div>
                <div className="suppl-input wide">
                    <input type="password" placeholder="Your password" minLength={6} min={6} onChange={updateLocal('password')}/>
                </div>

                <div className="suppl-butn-new large wide clickable"
                     disabled={!isReady()}
                     style={{marginTop: 40}}
                     onClick={nextStep}
                >
                    Next &nbsp; <i className="fa fa-angle-right"/>
                </div>

                <div style={{margin: 'auto'}}/>

                <div className="anon-line"/>
                <p style={{marginLeft: 'auto'}} className="linkable">
                    <span onClick={update('currentTab', 'step-1')}><i className="fa fa-angle-left"/> &nbsp; Back</span>
                </p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) SetUrl('/dashboard');
    });

    return state
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(JoinStep2)