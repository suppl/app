import React from 'react';
import {Link} from 'react-router-component';

import * as ACTIONS from '../../constants/actions.constants';

import {connect} from "react-redux";

import classNames from 'classnames';


require('./header.scss');

class HeaderMobile extends React.Component {

    getUserFirstName() {
        return this.props.user.user.displayName ? this.props.user.user.displayName.split(' ')[0] : 'Anonymous';
    }

    getUserFirstLetter() {
        return this.props.user.user.displayName ? this.props.user.user.displayName.split('')[0] : 'A';
    }

    render() {
        const settingsClass = classNames({
            active: this.props.settings.settingsVisible,
        });

        return (
            <div className="header-component">
                <Link className="suppl-logo" href="/home"><img src="/statics/images/suppl-favicon.png" style={{height:22}}/></Link>
                <Link className="user-logo" href="/profile">{this.getUserFirstLetter()}</Link>
                <div className="header-menu">
                    <div className="menu-item"><i className="flaticon-bell"></i></div>
                    <div className="menu-item ${settingsClass}" onClick={this.props.toggleSettings}>
                        <div className={`suppl-dropdown ${settingsClass}`}>
                            <Link className="dropdown-item" href="/profile">
                                <div className="item-icon icon-user"></div>
                                <div className="item-text">Your profile</div>
                            </Link>
                            <div className="dropdown-item">
                                <div className="item-icon icon-cog"></div>
                                <div className="item-text">Settings</div>
                            </div>
                            <div className="dropdown-item" onClick={this.props.logout}>
                                <div className="item-icon icon-exit"></div>
                                <div className="item-text">Logout</div>
                            </div>
                        </div>
                        <i className="flaticon-cog"></i>
                        {/*<i className="icon-chevron-down"></i>*/}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state;

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
)(HeaderMobile)