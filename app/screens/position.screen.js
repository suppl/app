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

        Dispatch({type: ACTIONS.SET_WAITLIST_EMAIL, email: this.props._query.email});
        Dispatch({type: ACTIONS.LOAD_WAITLIST_USER});
    }

    render() {
        const firstName = this.props.waitlist.user ? this.props.waitlist.user.name.split(' ')[0] : '';
        const email = this.props._query.email;
        console.log('email', email);
        console.log('this.props.waitlist', this.props.waitlist);

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

                        <div className="register-heading">
                            Bump the <strong>queue</strong> {firstName}!
                            <br/>
                            <strong>Invite your friends</strong> to Suppl and we’ll bump you up the queue by
                            <strong>20 places</strong> per sign up!
                        </div>


                        <div className="suppl-form" style={{marginTop: '40px'}}>
                            <div className="suppl-label">Best friend</div>

                            <div className="suppl-input large">
                                <div className="input-icon icon-user"/>
                                <input type="text"
                                       placeholder="E.g. Barry Johnson"
                                       autoFocus={true}
                                />
                            </div>

                            <div className="suppl-label">Good friend</div>

                            <div className="suppl-input large">
                                <div className="input-icon icon-envelope"/>
                                <input type="email"
                                       placeholder="E.g. barry@work.com"
                                />
                            </div>

                            <div className="suppl-label">Oldest friend</div>

                            <div className="suppl-input large">
                                <div className="input-icon icon-envelope"/>
                                <input type="email"
                                       placeholder="E.g. barry@work.com"
                                />
                            </div>

                            {/*<div className="butn large" style={{maxWidth: 'none'}} onClick={this.props.signUp}>Request FREE Early Access!</div>*/}


                            {/*<p className="clearfix">*/}
                                {/*/!*<Link href="/" className="pull-left">Login</Link>*!/*/}
                                {/*<Link href="/" style={{*/}
                                    {/*textAlign: 'center',*/}
                                    {/*display  : 'block'*/}
                                {/*}}>Check my place in the queue</Link>*/}
                            {/*</p>*/}
                        </div>w


                    </div>

                    <div className="register-right" style={{backgroundColor: '#f7fafc'}}>
                        hello
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