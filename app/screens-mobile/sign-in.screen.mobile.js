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

class SignInScreenMobile extends React.Component {
    local = {
        email   : '',
        password: '',
    };

    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active-screen';
            this.forceUpdate();
        }, 50);
    }

    render() {
        const updateLocal = (field, value) => (e) => this.local[field] = value ? value : e.target.value;

        const signInEnter = (event) => event.key == 'Enter' ? signIn() : null;

        const showResetPassword = () => Dispatch({type: ACTIONS.SHOW_POPUP, popupType: 'resetPassword',});

        const signIn = () => Dispatch({
            type    : ACTIONS.SIGN_IN_NEW,
            email   : this.local.email,
            password: this.local.password
        });

        return (
            <div data-screen className={`${this.activeClass}`}>
                <div data-mobile-screen>
                    <div className="suppl-anon">
                        <div className="anon-left">
                            <div className="anon-logo">
                                <img src="/statics/images/suppl-favicon.png"/>
                                <div>SUPPL</div>
                            </div>

                            <p>Please enter your details to sign in</p>

                            <div className="suppl-label" style={{marginTop: 40}}>Email address</div>
                            <div className="suppl-input wide">
                                <input type="email" placeholder="barry@work.com" onChange={updateLocal('email')}/>
                            </div>

                            <div className="suppl-label" style={{marginTop: 30}}>
                                <div>Password</div>
                                <div className="label-small linkable" onClick={showResetPassword}>Forgot password?</div>
                            </div>
                            <div className="suppl-input wide">
                                <input type="password" placeholder="Enter your password..." onKeyPress={signInEnter} onChange={updateLocal('password')}/>
                            </div>

                            <div className="suppl-butn-new large wide clickable" style={{marginTop: 40}} onClick={signIn}>Sign in</div>

                            {/*<div style={{margin: 'auto'}}/>*/}

                            <div className="anon-line"/>
                            <p style={{marginLeft: 'auto'}} className="linkable">
                                <Link href="/waitlist">Need an account? Get started!</Link>
                            </p>
                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreenMobile)