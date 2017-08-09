import React from 'react';
import {Link} from 'react-router-component';

import * as ACTIONS from '../../constants/actions.constants';

import {connect} from "react-redux";

import classNames from 'classnames';


require('./footer.scss');

class FooterMobile extends React.Component {

    getUserFirstName() {
        return this.props.user.user.displayName ? this.props.user.user.displayName.split(' ')[0] : 'Anonymous';
    }

    getUserFirstLetter() {
        return this.props.user.user.displayName ? this.props.user.user.displayName.split('')[0] : 'A';
    }

    render() {
        console.log('footer props', this.props);

        const isScreenClass = (screen) => this.props.screen == screen ? 'active' : '';

        const settingsClass = classNames({
            active: this.props.settings.settingsVisible,
        });

        return (
            <div className="footer-component">
                <Link href="/home" className={`footer-link ${isScreenClass('home')}`}>
                    <i className="link-icon icon-uniE7F1"/>
                    <div className="link-text">Home</div>
                </Link>
                <Link href="/sessions" className={`footer-link ${isScreenClass('sessions')}`}>
                    <i className="link-icon icon-uniE6DC"/>
                    <div className="link-text">Sessions</div>
                </Link>
                <Link href="/awards" className={`footer-link ${isScreenClass('awards')}`}>
                    <i className="link-icon icon-uniE820"/>
                    <div className="link-text">Performance</div>
                </Link>
                <Link href="/journey" className={`footer-link ${isScreenClass('journey')}`}>
                    <i className="link-icon icon-uniE817"/>
                    <div className="link-text">Journey</div>
                </Link>
                <Link href="/community" className={`footer-link ${isScreenClass('community')}`}>
                    <i className="link-icon icon-uniE724"/>
                    <div className="link-text">Community</div>
                </Link>

            </div>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    // logout: () => dispatch({
    //     type: ACTIONS.SIGN_OUT
    // }),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FooterMobile)