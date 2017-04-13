import React from 'react';

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
                    </div>
                </div>
            </div>
        );
    }
}



const mapStateToProps = state => {
    console.log('mapStateToProps', state);
    if (!state.user.isLoggedIn) window.location.hash = '/';

    return state
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard)