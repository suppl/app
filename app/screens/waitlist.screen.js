import React from 'react';
import {Link} from 'react-router-component';
import {SetUrl} from '../services/helper.service';
import * as _ from 'lodash';

import * as ACTIONS from '../constants/actions.constants';

import {connect} from "react-redux";

import {Dispatch, State} from './../services/dispatch.service';
import SubHeader from '../components/sub-header/sub-header';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';

class Waitlist extends React.Component {


    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active-screen';
            this.forceUpdate();
        }, 1);

        // Dispatch(ACTIONS.HIDE_AUDIO);
    }

    render() {
        return (
            <div data-screen className={`register-screen ${this.activeClass}`}>
                <div className="flex flex-row">
                    <div className="register-left">
                        <div className="register-header">
                            <div className="header-logo">
                                <img src="/statics/images/favicon.png" alt="Suppl Logo"/>
                            </div>
                            <div className="header-logo-text">SUPPL</div>
                            <div className="header-page">Early access</div>
                        </div>

                        <div className="register-heading">Hey <strong>Superstar!</strong>
                            <br/>Join our early access community
                        </div>


                        <div className="suppl-form" style={{marginTop: '40px'}}>
                            <div className="suppl-label">Your name</div>

                            <div className="suppl-input large">
                                <div className="input-icon icon-user"/>
                                <input type="text"
                                       placeholder="E.g. Barry Johnson"
                                       autoFocus={true}
                                       value={this.props.waitlist.name}
                                       onChange={this.props.setName}
                                />
                            </div>

                            <div className="suppl-label">Your email</div>

                            <div className="suppl-input large">
                                <div className="input-icon icon-envelope"/>
                                <input type="email"
                                       placeholder="E.g. barry@work.com"
                                       value={this.props.waitlist.email}
                                       onChange={this.props.setEmail}
                                />
                            </div>

                            <div className="butn large" style={{maxWidth: 'none'}} onClick={this.props.signUp}>Request FREE Early Access!</div>


                            <p className="clearfix">
                                {/*<Link href="/" className="pull-left">Login</Link>*/}
                                <Link href={`/position?email=${this.props.waitlist.email}`} style={{
                                    textAlign: 'center',
                                    display  : 'block'
                                }}>Check my place in the queue</Link>
                            </p>
                        </div>


                    </div>

                    <div className="register-right" style={{backgroundColor: '#f7fafc'}}>
                        <img className="register-img" src="/statics/svg/waitlist/early-access.01.svg" style={{
                            marginTop   : "auto",
                            marginBottom: "auto"
                        }}/>
                        <img className="register-img" src="/statics/svg/waitlist/early-access-02.svg" style={{
                            top   : "0px",
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
        type: ACTIONS.SET_WAITLIST_EMAIL,
        email: event.target.value,
    }),

    signUp: () => dispatch({
        type: ACTIONS.SUBMIT_WAITLIST_SIGNUP
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waitlist)