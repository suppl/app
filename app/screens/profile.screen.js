import React from 'react';

import * as ACTIONS from '../constants/actions.constants';

import {connect} from "react-redux";

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
                    <Sidebar/>
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
                                        <a href="#/forgot" className="pull-right">Reset Password</a>
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
    //console.log('', state);

    firebase.auth().onAuthStateChanged(function (user) {
        if (!user) window.location.hash = '/';
    });

    return state
};

const mapDispatchToProps = dispatch => ({

    updateName: (event) => dispatch({
        type: ACTIONS.UPDATE_NAME,
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