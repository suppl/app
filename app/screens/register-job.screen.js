import React from 'react';
import {connect} from "react-redux";
import * as ACTIONS from '../constants/actions.constants';
import {State} from '../services/dispatch.service';

class RegisterJob extends React.Component {
    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active-screen';
            this.forceUpdate();
        }, 1);
    }

    render() {

        const isActiveStyle = (style) => {
            if (this.props.user.register.workHours === style) return "active";
        };

        const workHoursList = ["5-8", "8-12", "12+"];

        const isValid = () => this.props.user.register.workHours  && this.props.user.register.role;

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

                    <div className="register-heading"><strong>Good job</strong>! Tell us a bit about yourself…</div>


                    <div className="suppl-form" style={{marginTop: '40px'}}>
                        <div className="suppl-label">Your role</div>

                        <div className="suppl-input large">
                            <div className="input-icon icon-tie"/>
                            <input type="text" placeholder="E.g. Accountant" autoFocus={true} value={this.props.user.register.role} onChange={this.props.updateRegisterRole}/>
                        </div>

                        <div className="suppl-label">How many hours do you work per day?</div>

                        <div className="suppl-multi">
                            {workHoursList.map(workHours =>
                                <div key={workHours} className={`multi-item ${isActiveStyle(workHours)}`} onClick={() => this.props.updateRegisterWorkHours(workHours)}>{workHours}</div>
                            )}
                        </div>

                        <a className="butn large" style={{marginLeft: 'auto'}} disabled={!isValid()} tabIndex={0} href="#/register-style">Next</a>

                        <p className="clearfix">
                            {/*<a href="#/" className="pull-left">Login</a>*/}
                            <a href="#/register-password" className="pull-right">Back</a>
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

    updateRegisterRole: (event) => dispatch({
        type: ACTIONS.UPDATE_REGISTER_ROLE,
        role: event.target.value,
    }),

    updateRegisterWorkHours: (workHours) => {
        if (workHours == State().user.register.workHours) workHours = undefined;

        return dispatch({
            type: ACTIONS.UPDATE_REGISTER_WORK_HOURS,
            workHours
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterJob)