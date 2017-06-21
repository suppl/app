import React from 'react';
import {connect} from "react-redux";
import * as ACTIONS from '../constants/actions.constants';
import {Link} from 'react-router-component';
import {SetUrl} from '../services/helper.service';

class RegisterPassword extends React.Component {
    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active-screen';
            this.forceUpdate();
        }, 1);
    }

    render() {

        const isValid = () => this.props.user.register.password && this.props.user.register.password.length > 6;

        return (
            <div data-screen className={`register-screen ${this.activeClass}`}>

                <div className="register-left">
                    <div className="register-header">
                        <div className="header-logo">
                            <img src="/statics/images/suppl-favicon.png" alt="Suppl Logo"/>
                        </div>
                        <div className="header-logo-text">SUPPL</div>
                        <div className="header-page">Get Started</div>
                    </div>d

                    <div className="register-heading"><strong>Nice one</strong>! Ok, Set a secure password</div>


                    <div className="suppl-form" style={{marginTop:'40px'}}>
                        <div className="suppl-label">Password</div>

                        <div className="suppl-input large">
                            <div className="input-icon icon-lock"/>
                            <input type="password" placeholder="Password" autoFocus={true} value={this.props.user.register.password} onChange={this.props.updateRegisterPassword}/>
                        </div>
                        <p>If you forget you can always change this later ;)</p>

                        <Link className="butn large" style={{marginLeft: 'auto'}} disabled={!isValid()} tabIndex={0} href="/register-job">Next</Link>

                        <p className="clearfix">
                            {/*<Link href="/" className="pull-left">Login</Link>*/}
                            <Link href="/register" className="pull-right">Back</Link>
                        </p>
                    </div>
                </div>

                <div className="register-right">
                    <img className="register-img" src="/statics/images/login-two.svg" style={{marginLeft:"auto",marginRight:"-50px"}}/>
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

    updateRegisterPassword: (event) => dispatch({
        type: ACTIONS.UPDATE_REGISTER_PASSWORD,
        password: event.target.value,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPassword)