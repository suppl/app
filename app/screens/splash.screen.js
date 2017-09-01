import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-component';
import {SetUrl} from '../services/helper.service';
import * as ACTIONS from '../constants/actions.constants';
import {Dispatch} from "../services/dispatch.service";


class Splash extends React.Component {
    loginImageIndex = _.random(1, 2);

    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active-screen';
            this.forceUpdate();
        }, 1);
    }

    render() {
        const signInEnter = (event) => {
            if (event.key == 'Enter') Dispatch(ACTIONS.SIGN_IN);

        };

        return (
            <div data-screen className={`register-screen ${this.activeClass}`}>

                <div className="flex flex-row">

                    <div className="register-left">
                        <div className="register-header">
                            <Link href="/" className="header-logo clickable">
                                <img src="/statics/images/suppl-favicon.png" alt="Suppl Logo"/>
                            </Link>
                            <Link href="/" className="header-logo-text clickable">SUPPL</Link>
                            <div className="header-page">Get Started</div>
                        </div>


                        <div className="register-heading">
                            <div style={{fontSize: '30px', marginBottom: '5px'}}>Sign in to <strong>Suppl </strong>
                            </div>
                            Enter your details below
                        </div>


                        <div className="suppl-form" style={{marginTop: '40px'}}>
                            <div className="suppl-label">Your email</div>

                            <div className="suppl-input large">
                                <div className="input-icon icon-uniE90A"/>
                                <input type="email" autoFocus={true} placeholder="E.g. barry@work.com" value={this.props.user.email} onChange={this.props.updateLoginEmail}/>
                            </div>


                            <div className="suppl-label">Your password</div>

                            <div className="suppl-input large">
                                <div className="input-icon icon-uniE720"/>
                                <input type="password" placeholder="Password" value={this.props.user.password} onKeyPress={signInEnter} onChange={this.props.updateLoginPassword}/>
                            </div>
                            <p className="clearfix">
                                <a className="pull-right" onClick={this.props.showResetPassword}>Forgot your password?</a>
                            </p>

                            <div className="butn large" style={{marginLeft: 'auto'}} tabIndex={0} onClick={this.props.signIn}>Sign in</div>

                            <div className="line"/>

                            <Link className="butn mid white pull-right" href="/waitlist">Get started</Link>
                            <div className="butn mid white transparent">Don't have an account?</div>

                        </div>
                    </div>

                    <div className="register-right" style={{backgroundColor: '#f7fafc'}}>
                        <img className="register-img" src={`/statics/svg/splash/login-0${this.loginImageIndex}.svg`} style={{
                            top         : "-10px",
                            marginBottom: "auto"
                        }}/>
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

const mapDispatchToProps = dispatch => ({
    showResetPassword: () => dispatch({
        type     : ACTIONS.SHOW_POPUP,
        popupType: 'resetPassword',
    }),

    updateLoginEmail: (event) => dispatch({
        type : ACTIONS.UPDATE_LOGIN_EMAIL,
        email: event.target.value,
    }),

    updateLoginPassword: (event) => dispatch({
        type    : ACTIONS.UPDATE_LOGIN_PASSWORD,
        password: event.target.value,
    }),

    signIn: () => dispatch({
        type: ACTIONS.SIGN_IN
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash)