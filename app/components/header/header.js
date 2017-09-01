import React from 'react';
import {Link} from 'react-router-component';

import * as ACTIONS from '../../constants/actions.constants';

import {connect} from "react-redux";

import classNames from 'classnames';
import {State} from "../../services/dispatch.service";


require('./header.scss');

class Header extends React.Component {

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
                {/*<div className="suppl-logo">SUPPL</div>*/}
                <Link className="user-logo clickable"
                      href="/profile"
                      style={{backgroundImage: `url('${State().public.user.avatar}')`}}
                ></Link>
                <Link className="user-hello" href="/profile" onClick={this.props.login}>{this.getUserFirstName()}</Link>

                {/*<div className={`dropdown-background ${settingsClass}`} onClick={this.props.toggleSettings}/>*/}
                <div className={`suppl-dropdown ${settingsClass}`} onClick={this.props.toggleSettings}>
                    <Link className="dropdown-item" href="/profile">
                        {/*<div className="item-icon icon-user"></div>*/}
                        <div className="item-text">Your profile</div>
                    </Link>
                    <Link className="dropdown-item" href="/account">
                        {/*<div className="item-icon icon-cog"></div>*/}
                        <div className="item-text">Your account</div>
                    </Link>
                    <div className="dropdown-item" onClick={this.props.logout}>
                        {/*<div className="item-icon icon-exit"></div>*/}
                        <div className="item-text">Logout</div>
                    </div>
                </div>
                <div className="header-menu">
                    <div className="menu-item clickable" onClick={this.props.toggleSettings}>
                        <i className="flaticon-cog"/>
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
)(Header)