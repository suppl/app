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

class PositionScreen extends React.Component {

    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active-screen';
            this.forceUpdate();
        }, 1);
    }

    checkPosition() {
        if (!this.props.waitlist.email) {
            Dispatch({type: ACTIONS.SHOW_NOTIFICATION, message: 'email address required', style: 'error'});
            return;
        }
    }

    render() {
        const waitlist = this.props.waitlist;

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
                            <div style={{fontSize: '30px', marginBottom: '5px'}}>
                                Check your <strong> Position!</strong>
                            </div>

                            Find out how you are placed…
                        </div>


                        <div className="suppl-form" style={{marginTop: '40px'}}>
                            <div className="suppl-label">Your email</div>

                            <div className="suppl-input large">
                                <div className="input-icon icon-user"/>
                                <input type="email"
                                       placeholder="E.g. chris@gmail.com"
                                       autoFocus={true}
                                       value={this.props.waitlist.email}
                                       onChange={this.props.setEmail}
                                />
                            </div>

                            <Link className="butn large" style={{maxWidth: 'none'}} href={`/waitlist/bump?email=${this.props.waitlist.email}`}>Check my position</Link>


                            <p className="clearfix">
                                {/*<Link href="/" className="pull-left">Login</Link>*/}
                                <Link href={`/waitlist`} style={{
                                    textAlign: 'center',
                                    display  : 'block'
                                }}>Join our early access community</Link>
                            </p>
                        </div>


                    </div>

                    <div className="register-right" style={{backgroundColor: '#f7fafc'}}>
                        <img className="register-img" src="/statics/svg/waitlist/check-position.svg" style={{
                            marginTop   : "auto",
                            marginBottom: "auto"
                        }}/>
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

    setName: (event) => dispatch({
        type: ACTIONS.SET_WAITLIST_NAME,
        name: event.target.value,
    }),

    setEmail: (event) => dispatch({
        type : ACTIONS.SET_WAITLIST_EMAIL,
        email: event.target.value,
    }),

    signUp: () => dispatch({
        type: ACTIONS.SUBMIT_WAITLIST_SIGNUP
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(PositionScreen)