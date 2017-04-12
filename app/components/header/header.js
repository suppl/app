import React from 'react';

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
                    <div className="menu-item"><i className="icon-cog"></i> Settings
                        <i className="icon-chevron-down"></i></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('mapStateToProps', state)

    return {
        actions: state.actions,
        user: state.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch({
            type: 'LOGIN'
        })
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)