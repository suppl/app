import React from 'react';

import * as ACTIONS from '../constants/actions.constants';

import {connect} from "react-redux";

import SubHeader from '../components/sub-header/sub-header';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';


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
                                <a className="panel" href="#/player">
                                    <div className="panel-icon">
                                        <div className="icon-loudspeaker"></div>

                                    </div>
                                    <div className="panel-heading">Take 3</div>
                                    <div className="panel-line"></div>
                                    <div className="panel-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, sunt.
                                    </div>
                                </a>

                                <div className="panel">
                                    <div className="panel-icon">
                                        <div className="icon-city"></div>

                                    </div>
                                    <div className="panel-heading">Work Wellness</div>
                                    <div className="panel-line"></div>
                                    <div className="panel-text">
                                        Dolorem doloribus facere quaerat tenetur!
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    console.log('mapStateToProps', state);

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