import React from 'react';

import * as ACTIONS from '../../constants/actions.constants';

import {connect} from "react-redux";

require('./header.scss');

class Header extends React.Component {

    getUserFirstName() {
        return this.props.user.isLoggedIn ? 'Nathan' : 'Anonymous';
    }

    render() {
        return (
            <div className="header-component">
                <div className="suppl-logo">SUPPL</div>
                <div className="user-logo">N</div>
                <div className="user-hello" onClick={this.props.login}>Welcome back {this.getUserFirstName()}!</div>
                <div className="header-menu">
                    <div className="menu-item"><i className="icon-heart"></i> Refer a friend</div>
                    <div className="menu-item">
                        <div className="suppl-dropdown">
                            <div className="dropdown-item">
                                <div className="item-icon icon-user"></div>
                                <div className="item-text">Your profile</div>
                            </div>
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
        })
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)