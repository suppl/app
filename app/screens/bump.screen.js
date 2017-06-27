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

class BumpScreen extends React.Component {

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
        const firstName = this.props.waitlist.user ? this.props.waitlist.user.name.split(' ')[0] : ' ';
        const email     = this.props._query.email;
        const user      = this.props.waitlist.user ? this.props.waitlist.user : {};
        const position  = this.props.waitlist.user ? this.props.waitlist.user.position - 1 : ' ';

        return (
            <div data-screen className={`register-screen ${this.activeClass}`}>
                <div className="flex flex-row">
                    <div className="register-left">
                        <div className="register-header">
                            <Link href="/" className="header-logo clickable">
                                <img src="/statics/images/suppl-favicon.png" alt="Suppl Logo"/>
                            </Link>
                            <Link href="/" className="header-logo-text clickable">SUPPL</Link>
                            <div className="header-page">Early access</div>
                        </div>

                        <div className="register-heading">
                            <div style={{fontSize: '30px', marginBottom: '15px'}}>Bump the
                                <strong> queue</strong> {firstName}!
                            </div>

                            <strong>Invite your friends</strong> to Suppl and we’ll bump you up the queue by
                            <strong> 100 places</strong> per sign up!
                        </div>


                        <div className="suppl-form" style={{marginTop: '40px'}}>
                            <div className="suppl-label">Best friend</div>

                            <div className="suppl-input">
                                <div className="input-icon icon-envelope"/>
                                <input type="email"
                                       placeholder="E.g. harry@myfriend.com"
                                       autoFocus={true}
                                       value={this.referralEmails[0]}
                                       onChange={(e) => this.updateReferralEmails(e, 0)}
                                />
                            </div>

                            <div className="suppl-label">Good friend</div>

                            <div className="suppl-input">
                                <div className="input-icon icon-envelope"/>
                                <input type="email"
                                       placeholder="E.g. sally@myfriend.com"
                                       value={this.referralEmails[1]}
                                       onChange={(e) => this.updateReferralEmails(e, 1)}
                                />
                            </div>

                            <div className="suppl-label">Oldest friend</div>

                            <div className="suppl-input">
                                <div className="input-icon icon-envelope"/>
                                <input type="email"
                                       placeholder="E.g. jerry@myfriend.com"
                                       value={this.referralEmails[2]}
                                       onChange={(e) => this.updateReferralEmails(e, 2)}
                                />
                            </div>

                            <div className="butn large pull-right" onClick={this.props.sendReferral}>Invite my friends!</div>
                        </div>


                    </div>



                    <div className="bump-register">

                        <div className="bump-info">
                            <div className="bump-number">{position}</div>
                            <div className="bump-text">People are ahead of you</div>
                            <div className="bump-text">
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

export default connect(mapStateToProps, mapDispatchToProps)(BumpScreen)