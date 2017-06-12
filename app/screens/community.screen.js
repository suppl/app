import React from 'react';

import * as ACTIONS from '../constants/actions.constants';

import {connect} from "react-redux";

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

    render() {
        return (
            <div data-screen className={`${this.activeClass}`}>
                <Header/>
                <div className="flex flex-row">
                    <Sidebar/>
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
                                    <div className="hori list-row">
                                        <div className="col col-70">
                                            <div className="community-dot"></div>
                                        </div>
                                        <div className="col col-70"></div>
                                        <div className="col community-name">Zander</div>
                                        <div className="col col-70  community-name">5</div>
                                        <div className="col"></div>
                                        <div className="col col-70 community-view">
                                            <i className="fa fa-angle-right"></i>
                                        </div>
                                    </div>
                                    <div className="hori list-row">
                                        <div className="col col-70">
                                            <div className="community-dot"></div>
                                        </div>
                                        <div className="col col-70"></div>
                                        <div className="col community-name">Dave</div>
                                        <div className="col col-70  community-name">7</div>
                                        <div className="col"></div>
                                        <div className="col col-70 community-view">
                                            <i className="fa fa-angle-right"></i>
                                        </div>
                                    </div>
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
        type       : ACTIONS.SET_DISPLAY_NAME,
        displayName: event.target.value,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Community)