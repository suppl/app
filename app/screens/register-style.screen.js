import React from 'react';
import {connect} from "react-redux";
import * as ACTIONS from '../constants/actions.constants';

class RegisterStyle extends React.Component {
    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active-screen';
            this.forceUpdate();
        }, 1);
    }

    render() {

        const isValid = () => this.props.user.register.workStyle;

        const isActiveStyle = (style) => {
            if (this.props.user.register.workStyle === style) return "active";
        };

        const workStyles = ["Sat down", "Stood up"];

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

                    <div className="register-heading"><strong>WOOHOO</strong>! Time to get started on Suppl…</div>


                    <div className="suppl-form" style={{marginTop:'40px'}}>

                        <div className="suppl-label">How do you work?</div>

                        <div className="suppl-multi">
                            {workStyles.map(workStyle =>
                                <div key={workStyle} className={`multi-item ${isActiveStyle(workStyle)}`} onClick={() => this.props.updateRegisterWorkStyle(workStyle)}>{workStyle}</div>
                            )}
                        </div>

                        <a className="butn large" style={{marginLeft: 'auto'}} disabled={!isValid()} tabIndex={0} onClick={this.props.registerUser}>Start using Suppl</a>

                        <p className="clearfix">
                            {/*<a href="#/" className="pull-left">Login</a>*/}
                            <a href="#/register-job" className="pull-right">Back</a>
                        </p>
                    </div>
                </div>

                <div className="register-right">


                </div>


            </div>
        )
    }
}

const mapStateToProps = state => {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) window.location.hash = '/dashboard';
    });

    return state
};

const mapDispatchToProps = dispatch => ({

    updateRegisterWorkStyle: (workStyle) => dispatch({
        type: ACTIONS.UPDATE_REGISTER_WORK_STYLE,
        workStyle
    }),

    registerUser: () => dispatch({
        type: ACTIONS.REGISTER_USER
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterStyle)