import React from 'react';

import * as ACTIONS from '../constants/actions.constants';

import {connect} from "react-redux";
import {Link} from 'react-router-component';
import {SetUrl} from '../services/helper.service';

import SubHeader from '../components/sub-header/sub-header';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';

class Profile extends React.Component {
    componentWillUnmount() {
        this.props.reloadProfile();
    }

    render() {
        setTimeout(() => {
            this.activeClass = 'active';
            this.forceUpdate();
        }, 1);

        return (

            <div data-screen className={`${this.activeClass}`}>
                <Header/>
                <div className="flex flex-row">
                    <Sidebar screen="profile"/>
                    <div data-content className="flex flex-max">
                        <SubHeader text="Your Profile"/>

                        <div className="content-area splash flex flex-max">
                            <div className="profile-header">
                                <div className="header-page">Your Profile</div>
                            </div>

                            <div className="box">

                                <div className="suppl-form">
                                    <div className="suppl-label">Your name</div>
                                    <div className="suppl-input">
                                        <div className="input-icon icon-user"></div>
                                        <input type="text" placeholder="Barry Sanders" value={this.props.user.user.displayName} onChange={this.props.updateName}/>
                                    </div>

                                    <div className="suppl-label">Your email</div>
                                    <div className="suppl-input">
                                        <div className="input-icon icon-envelope"></div>
                                        <input type="email" placeholder="E.g. barry@work.com" value={this.props.user.user.email} readOnly={true}/>
                                    </div>

                                    <div className="butn" style={{marginLeft: 'auto'}} tabIndex={0} onClick={this.props.saveProfile}>Update</div>
                                    <p className="clearfix">
                                        <Link className="pull-right" onClick={this.props.showResetPassword}>Reset Password</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    firebase.auth().onAuthStateChanged(function (user) {
        if (!user) SetUrl('/');
    });

    return state
};

const mapDispatchToProps = dispatch => ({
    showResetPassword: () => dispatch({
        type: ACTIONS.SHOW_POPUP
    }),

    updateName: (event) => dispatch({
        type: ACTIONS.SET_DISPLAY_NAME,
        displayName: event.target.value,
    }),

    saveProfile: (event) => dispatch({
        type: ACTIONS.SAVE_PROFILE
    }),

    reloadProfile: (event) => dispatch({
        type: ACTIONS.LOAD_PROFILE
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile)