import React from 'react';
import {connect} from "react-redux";

import * as ACTIONS from '../constants/actions.constants';
import SubHeader from '../components/sub-header/sub-header';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';
import {SessionList} from '../services/session.service';


class Dashboard extends React.Component {
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
                        <SubHeader text="Dashboard"/>

                        <div className="content-area">
                            <div className="panels">
                                {SessionList.map((session, index) =>
                                    <a className="panel" href={`#/player/${session.slug}`} key={session.slug}>
                                        <div className="panel-icon">
                                            <div className={session.icon}></div>
                                        </div>
                                        <div className="panel-heading">{session.name}</div>
                                        <div className="panel-line"></div>
                                        <div className="panel-text">{session.description}</div>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    firebase.auth().onAuthStateChanged(function (user) {
        if (!user) window.location.hash = '/';
    });

    return state
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard)