import React from 'react';

import * as ACTIONS from '../../constants/actions.constants';

import {connect} from "react-redux";

import classNames from 'classnames';


require('./header.scss');

class Header extends React.Component {

    getUserFirstName() {
        return this.props.user.user.displayName ? this.props.user.user.displayName.split(' ')[0] : 'Anonymous';
    }

    render() {
        const settingsClass = classNames({
            active: this.props.settings.settingsVisible,
        });

        return (
            <div className="header-component">
                <div className="suppl-logo">SUPPL</div>
                <a className="user-logo" href="#/profile">N</a>
                <a className="user-hello" href="#/profile" onClick={this.props.login}>Welcome back {this.getUserFirstName()}!</a>
                <div className="header-menu">
                    <div className="menu-item"><i className="icon-heart"></i> Refer a friend</div>
                    <div className="menu-item ${settingsClass}" onClick={this.props.toggleSettings}>
                        <div className={`suppl-dropdown ${settingsClass}`}>
                            <a className="dropdown-item" href="#/profile">
                                <div className="item-icon icon-user"></div>
                                <div className="item-text">Your profile</div>
                            </a>
                            <div className="dropdown-item">
                                <div className="item-icon icon-cog"></div>
                                <div className="item-text">Settings</div>
                            </div>
                            <div className="dropdown-item" onClick={this.props.logout}>
                                <div className="item-icon icon-exit"></div>
                                <div className="item-text">Logout</div>
                            </div>

                        </div>
                        <i className="icon-cog"></i>
                        Settings
                        <i className="icon-chevron-down"></i>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('mapStateToProps', state)

    return state;
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch({
            type: ACTIONS.SIGN_OUT
        }),

        toggleSettings: () => dispatch({
            type: ACTIONS.TOGGLE_SETTINGS
        }),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)