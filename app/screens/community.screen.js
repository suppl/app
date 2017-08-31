import React from 'react';
import Bricklayer from 'bricklayer';

import * as ACTIONS from '../constants/actions.constants';

import {connect} from "react-redux";
import {Link} from 'react-router-component';
import {SetUrl, CalcStreak, If} from '../services/helper.service';

import SubHeader from '../components/sub-header/sub-header';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';


class Community extends React.Component {
    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active-screen';
            this.forceUpdate();
        }, 1);
    }

    isOnline(user) {
        return this.props.public.online[user.uid] !== undefined;
    }

    render() {
        const users = this.props.public.users;

        return (
            <div data-screen className={`${this.activeClass}`}>
                <Header/>
                <div className="flex flex-row">
                    <Sidebar screen="community"/>
                    <div data-content className="flex flex-max">
                        <div className="content-area" style={{paddingTop: 0}}>
                            <div className="content-content">
                                <SubHeader text="Community"/>

                                <div className="session-list community-list">
                                    <div className="hori list-header">
                                        <div className="col col-70">Active</div>
                                        <div className="col col-70">Name</div>
                                        <div className="col"/>
                                        <div className="col col-70">Streak</div>
                                        <div className="col">React</div>
                                        <div className="col col-70">View</div>
                                    </div>

                                    {users.map(user =>
                                        <div className="hori list-row">
                                            <div className="col col-70">
                                                <If condition={!this.isOnline(user)}>
                                                    <div className="community-dot"/>
                                                </If>
                                                <If condition={this.isOnline(user)}>
                                                    <div className="community-dot active"/>
                                                </If>
                                            </div>
                                            <div className="col col-70">
                                                <div className="community-user-icon">{user.name[0]}</div>
                                            </div>
                                            <div className="col community-name">{user.name}</div>
                                            <div className="col col-70  community-name">{CalcStreak(user)}</div>
                                            <div className="col"></div>
                                            <div className="col col-70 community-view">
                                                {/*<i className="fa fa-angle-right"></i>*/}
                                            </div>
                                        </div>
                                    )}

                                    {/*<div className="hori list-row">*/}
                                        {/*<div className="col col-70">*/}
                                            {/*<div className="community-dot"></div>*/}
                                        {/*</div>*/}
                                        {/*<div className="col col-70"></div>*/}
                                        {/*<div className="col community-name">Dave</div>*/}
                                        {/*<div className="col col-70  community-name">7</div>*/}
                                        {/*<div className="col"></div>*/}
                                        {/*<div className="col col-70 community-view">*/}
                                            {/*<i className="fa fa-angle-right"></i>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
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
        if (!user) SetUrl('/');
    });

    return state
};

const mapDispatchToProps = dispatch => ({

    updateName: (event) => dispatch({
        type       : ACTIONS.SET_DISPLAY_NAME,
        displayName: event.target.value,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Community)