import React from 'react';
import {connect} from "react-redux";

import * as ACTIONS from '../../constants/actions.constants';


require('./popup-password.scss');

class PopupPassword extends React.Component {
    render() {
        const getClasses = () => [
            this.props.popup.visible && this.props.popup.popupType === 'resetPassword' ? 'active' : ''
        ].join(' ');

        return (
            <div className={`popup-component ${getClasses()}`}>
                <div className="popup-box">
                    <div className="popup-close icon-cross" onClick={this.props.hidePopup}/>
                    <div className="popup-middle">
                        <div className="popup-title">Forgot your Password? No stress…</div>
                        <p>Enter your email and we will fire you a reset link. </p>

                        <div className="suppl-form" style={{marginTop: '20px'}}>
                            <div className="suppl-label">Your email</div>

                            <div className="suppl-input ">
                                <div className="input-icon icon-envelope"/>
                                <input type="email"
                                       autoFocus={true}
                                       placeholder="E.g. barry@work.com"
                                       value={this.props.popup.resetEmail}
                                       onChange={this.props.updateResetPasswordEmail}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="popup-bottom">
                        <div className="butn transparent no-margin" style={{cursor: 'pointer'}} onClick={this.props.hidePopup}>Cancel</div>
                        <div className="butn no-margin" style={{marginLeft: 'auto'}} onClick={this.props.sendResetPasswordEmail}>Reset Password</div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    hidePopup: () => dispatch({
        type: ACTIONS.HIDE_POPUP
    }),

    updateResetPasswordEmail: (event) => dispatch({
        type: ACTIONS.UPDATE_RESET_PASSWORD_EMAIL,
        email: event.target.value
    }),

    sendResetPasswordEmail: () => dispatch({
        type: ACTIONS.SEND_RESET_PASSWORD_EMAIL
    })
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PopupPassword)