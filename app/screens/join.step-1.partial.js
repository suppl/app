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

class JoinStep1 extends React.Component {
    local = {
        name : '',
        email: '',
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

            if (field != 'email') return;
            Dispatch({type: ACTIONS.TEST_JOIN_EMAIL, email: this.local.email});
        };

        const update = (field, value) => (e) => Dispatch({
            type   : ACTIONS.SET_JOIN_DETAILS,
            [field]: value ? value : e.target.value
        });

        const isReady = () => this.local.name && this.local.email && Join.emailIsOk;

        const nextStep = () => {
            Dispatch({type: ACTIONS.SET_JOIN_DETAILS, currentTab: 'step-2', ...this.local});
        };

        return (
            <div>
                <div className="anon-title">Welcome to Suppl!</div>

                <p>Please enter your details to sign in</p>

                <div className="suppl-label" style={{marginTop: 40}}>Full name</div>
                <div className="suppl-input wide">
                    <input type="text" placeholder="Barry Jenkins" onChange={updateLocal('name')}/>
                </div>

                <div className="suppl-label" style={{marginTop: 30}}>
                    <div>Email address</div>
                </div>
                <div className="suppl-input wide">
                    <input type="email" placeholder="barry@work.com" onChange={updateLocal('email')}/>
                </div>

                <div className="suppl-butn-new large wide clickable"
                     disabled={!isReady()}
                     style={{marginTop: 40}}
                     onClick={nextStep}
                >
                    Next &nbsp; <i className="fa fa-angle-right"></i>
                </div>

                <div style={{margin: 'auto'}}/>

                <div className="anon-line"/>
                <p style={{marginLeft: 'auto'}} className="linkable">
                    <Link href="/"><i className="fa fa-angle-left"/> &nbsp; Already have an account? Sign in!</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(JoinStep1)