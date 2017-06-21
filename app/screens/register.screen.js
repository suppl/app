import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-component';
import * as ACTIONS from '../constants/actions.constants';
import {SetUrl} from '../services/helper.service';
import * as _ from 'lodash';


class Register extends React.Component {
    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active-screen';
            this.forceUpdate();
        }, 1);
    }

    onEmailChange(event) {
        console.log('this', this)
        event.persist();
        this.props.updateRegisterEmail(event);
        this.checkEmail(event);
    }

    render() {
        const isValid = () => this.props.user.register.name && this.props.user.register.email && this.props.user.register.emailIsOk;

        return (
            <div data-screen className={`register-screen ${this.activeClass}`}>

                <div className="register-left">
                    <div className="register-header">
                        <div className="header-logo">
                            <img src="/statics/images/suppl-favicon.png" alt="Suppl Logo"/>
                        </div>
                        <div className="header-logo-text">SUPPL</div>
                        <div className="header-page">Get Started</div>
                    </div>

                    <div className="register-heading"><strong>Howdy</strong>! Get your <strong>FREE</strong>
                        <br/>Suppl account now!
                    </div>


                    <div className="suppl-form" style={{marginTop: '40px'}}>
                        <div className="suppl-label">Your name</div>

                        <div className="suppl-input large">
                            <div className="input-icon icon-user"/>
                            <input type="text" placeholder="E.g. Barry Johnson" autoFocus={true}  value={this.props.user.register.name} onChange={this.props.updateRegisterName}/>
                        </div>

                        <div className="suppl-label">Your email</div>

                        <div className="suppl-input large">
                            <div className="input-icon icon-envelope"/>
                            <input type="email" placeholder="E.g. barry@work.com" value={this.props.user.register.email} onChange={(event) => {
                                this.props.updateRegisterEmail(event);
                                this.props.updateRegisterCheckEmail(event)
                            }}/>
                        </div>

                        <Link className="butn large" style={{marginLeft: 'auto'}} disabled={!isValid()} tabIndex={0} href={`/register-password`}>Let's get started</Link>


                        <p className="clearfix">
                            {/*<Link href="/" className="pull-left">Login</Link>*/}
                            <Link href="/" className="pull-right">Back to Login</Link>
                        </p>
                    </div>


                </div>

                <div className="register-right">
                    <img className="register-img" src="/statics/images/login-one.svg" style={{marginTop:"auto",marginBottom:"-50px"}}/>
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

    updateRegisterName: (event) => dispatch({
        type: ACTIONS.UPDATE_REGISTER_NAME,
        name: event.target.value,
    }),

    updateRegisterEmail: (event) => dispatch({
        type: ACTIONS.UPDATE_REGISTER_EMAIL,
        email: event.target.value,
    }),

    updateRegisterCheckEmail: (event) => dispatch({
        type: ACTIONS.UPDATE_REGISTER_CHECK_EMAIL,
        email: event.target.value,
    }),

    updateRegisterEmailIsOk: (emailIsOk) => dispatch({
        type: ACTIONS.UPDATE_REGISTER_EMAIL_IS_OK,
        emailIsOk
    }),

    hideNotification: (message) => dispatch({
        type: ACTIONS.HIDE_NOTIFICATION
    }),

    showNotification: (message) => dispatch({
        type: ACTIONS.SHOW_NOTIFICATION,
        theme: 'error',
        message,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register)