import React from 'react';

import * as ACTIONS from '../../constants/actions.constants';

import {connect} from "react-redux";

require('./notification.scss');

class Notification extends React.Component {

    getClasses() {
        return [
            this.props.notification.visible ? 'active' : '',
            this.props.notification.theme
        ].join(' ');
    }

    render() {

        return (
            <div className={`notification-component ${this.getClasses()}`}>
                <div className="notification-content">
                    <div className="notification-close icon-cross" onClick={this.props.hideNotification}/>

                    <div className="notification-icon icon-check"/>
                    <div className="notification-text">{this.props.notification.message}</div>
                </div>


            </div>
        )
    }
}

const mapStateToProps = state => {
    //console.log('', state)

    return state;
};

const mapDispatchToProps = dispatch => {
    return {
        showNotification: () => dispatch({
            type: ACTIONS.SHOW_NOTIFICATION,
            message: 'MEEE'
        }),

        hideNotification: () => dispatch({
            type: ACTIONS.HIDE_NOTIFICATION
        })
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notification)