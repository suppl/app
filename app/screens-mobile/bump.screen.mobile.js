import React from 'react';
import {Link} from 'react-router-component';
import * as _ from 'lodash';

import * as ACTIONS from '../constants/actions.constants';

import {connect} from "react-redux";

import {Dispatch, State} from './../services/dispatch.service';
import {SetUrl} from '../services/helper.service';
import SubHeader from '../components/sub-header/sub-header';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';

class BumpScreenMobile extends React.Component {

    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active-screen';
            this.forceUpdate();
        }, 1);

        Dispatch({type: ACTIONS.SET_WAITLIST_EMAIL, email: this.props._query.email});
        Dispatch({type: ACTIONS.LOAD_WAITLIST_USER});
    }

    referralEmails = ['', '', ''];
    user           = this.props.waitlist.user ? this.props.waitlist.user : {};

    updateReferralEmails = (e, index) => {
        this.referralEmails[index] = e.target.value;
        Dispatch({
            type          : ACTIONS.SET_WAITLIST_REFERRAL_EMAILS,
            referralEmails: this.referralEmails,
        });
    };


    render() {
        const firstName = this.props.waitlist.user ? this.props.waitlist.user.name.split(' ')[0] : '';
        const email     = this.props._query.email;
        const user      = this.props.waitlist.user ? this.props.waitlist.user : {};

        return (
            <div data-screen className={`register-screen ${this.activeClass}`}>
                <div data-mobile-screen>
                    <div className="register-header">
                        <Link href="/" className="header-logo clickable">
                            <img src="/statics/images/suppl-favicon.png" alt="Suppl Logo"/>
                        </Link>
                        <Link href="/" className="header-logo-text clickable">SUPPL</Link>
                        <div className="header-page">Early access</div>
                    </div>

                    <div className="bump-register">

                        <div className="bump-info">
                            <div className="bump-number">{user.position - 1}</div>
                            <div className="bump-text">People ahead of you</div>
                            <div className="bump-text" style={{marginTop: '20px'}}>
                                <strong>Move up the queue to get early access to Suppl as soon as the app is ready.</strong>
                            </div>
                            <Link href={`/waitlist/share?email=${this.props._query.email}`} className="bump-button clickable">Bump the queue NOW</Link>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    // firebase.auth().onAuthStateChanged(function (user) {
    //     if (!user) SetUrl('/');
    // });
    //
    return state
};

const mapDispatchToProps = dispatch => ({

    sendReferral: (event) => dispatch({
        type: ACTIONS.SEND_WAITLIST_REFERRAL
    }),

    signUp: () => dispatch({
        type: ACTIONS.SUBMIT_WAITLIST_SIGNUP
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(BumpScreenMobile)