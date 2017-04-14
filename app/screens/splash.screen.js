import React from 'react';
import {connect} from "react-redux";
import * as ACTIONS from '../constants/actions.constants';


class Splash extends React.Component {
    render() {
        setTimeout(() => {
            this.activeClass = 'active';
            this.forceUpdate();
        }, 1);

        return (
            <div data-screen className={`splash ${this.activeClass}`}>

                <div className="splash-header">
                    <div className="header-logo">
                        <img src="/statics/images/favicon.png" alt="Suppl Logo"/>
                    </div>
                    <div className="header-logo-text">SUPPL</div>
                    <div className="header-page">Sign In</div>
                </div>

                <div className="splash-heading" onClick={this.props.showNotification}>Sign in and stay supple</div>
                <div className="box">

                    <div className="suppl-form">
                        <div className="suppl-label">Your email</div>

                        <div className="suppl-input">
                            <div className="input-icon icon-envelope"></div>
                            <input type="email" placeholder="E.g. barry@work.com" value={this.props.user.email} onChange={this.props.updateLoginEmail}/>
                        </div>
                        <div className="suppl-label">Your password</div>

                        <div className="suppl-input">
                            <div className="input-icon icon-lock"></div>
                            <input type="password" placeholder="Password" value={this.props.user.password} onChange={this.props.updateLoginPassword}/>
                        </div>

                        <div className="butn" style={{marginLeft: 'auto'}} tabIndex={0} onClick={this.props.signIn}>Sign in</div>
                        <p className="clearfix">
                            <a href="#/forgot" className="pull-left">Forgot Password</a>
                            <a href="#/get-started" className="pull-right">Register</a>
                        </p>
                    </div>


                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('mapStateToProps', state);

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) window.location.hash = '/dashboard';
    });

    return state
};

const mapDispatchToProps = dispatch => ({
    updateLoginEmail: (event) => dispatch({
        type: ACTIONS.UPDATE_LOGIN_EMAIL,
        email: event.target.value,
    }),

    updateLoginPassword: (event) => dispatch({
        type: ACTIONS.UPDATE_LOGIN_PASSWORD,
        password: event.target.value,
    }),

    signIn: () => dispatch({
        type: ACTIONS.SIGN_IN
    }),

    showNotification: () => dispatch({
        type: 'SHOW',
        message: 'MEEE'
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash)