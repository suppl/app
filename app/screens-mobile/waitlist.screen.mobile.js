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

class WaitlistScreenMobile extends React.Component {

    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active-screen';
            this.forceUpdate();
        }, 1);

        if (this.props._query.ref) {
            Dispatch({type: ACTIONS.SET_WAITLIST_REF, ref: this.props._query.ref});
        }

    }

    render() {
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

                    <div data-mobile-content>
                        <div className="register-heading">
                            <div style={{fontSize: '30px', marginBottom: '5px'}}>Hey <strong>Superstar!</strong></div>
                            Join our early access community
                        </div>


                        <div className="suppl-form" style={{marginTop: '10px'}}>
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
                                <Link href={`/waitlist/check`} style={{
                                    textAlign: 'center',
                                    display  : 'block'
                                }}>Check my place in the queue</Link>
                            </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(WaitlistScreenMobile)