import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-component';
import {SetUrl} from '../services/helper.service';
import * as ACTIONS from '../constants/actions.constants';


class Splash extends React.Component {
    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active-screen';
            this.forceUpdate();
        }, 1);
    }

    render() {

        return (
        <div data-screen className={`register-screen ${this.activeClass}`}>

            <div className="register-left">
                <div className="register-header">
                    <div className="header-logo">
                        <img src="/statics/images/favicon.png" alt="Suppl Logo"/>
                    </div>
                    <div className="header-logo-text">SUPPL</div>
                    <div className="header-page">Get Started</div>
                </div>

                <div className="register-heading"><strong>Sign in to Suppl</strong></div>
                <div className="register-sub-heading">Enter your details below</div>


                <div className="suppl-form" style={{marginTop:'40px'}}>
                    <div className="suppl-label">Your email</div>

                    <div className="suppl-input large">
                        <div className="input-icon icon-envelope"/>
                        <input type="email" autoFocus={true} placeholder="E.g. barry@work.com" value={this.props.user.email} onChange={this.props.updateLoginEmail}/>
                    </div>


                    <div className="suppl-label">Your email</div>

                    <div className="suppl-input large">
                        <div className="input-icon icon-lock"/>
                        <input type="password" placeholder="Password" value={this.props.user.password} onChange={this.props.updateLoginPassword}/>
                    </div>
                    <p className="clearfix"><Link className="pull-right" onClick={this.props.showResetPassword}>Forgot your password?</Link></p>

                    <div className="butn large" style={{marginLeft: 'auto'}} tabIndex={0} onClick={this.props.signIn}>Sign in</div>

                    <div className="line"/>

                    <Link className="butn mid white pull-right" href="/register">Get started</Link>
                    <div className="butn mid white transparent">Don't have an account?</div>

                </div>
            </div>

            <div className="register-right" style={{backgroundColor: '#ffefba'}}>
                <img src="/statics/images/suppl-superstar.png"/>
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
        type: ACTIONS.SHOW_POPUP
    }),

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
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash)