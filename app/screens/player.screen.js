import React from 'react';
import {connect} from "react-redux";
import Router from 'react-router-component'
const Locations = Router.Locations;
const Location = Router.Location;
import SubHeader from '../components/sub-header/sub-header';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';
import PlayerList from '../components/player-list/player-list.component';

import _ from 'lodash';
import {AudioList} from '../services/audio.service';


class Player extends React.Component {
    render() {
        setTimeout(() => {
            this.activeClass = 'active';
            this.forceUpdate();
        }, 1);

        const getSession = () => {
            return this.props._ ? _.find(AudioList, {slug:this.props._[0]}) : "Player";
        };


        return (
            <div data-screen className={`${this.activeClass}`}>
                <Header/>
                <div className="flex flex-row">
                    <Sidebar/>
                    <div data-content className="flex flex-max">
                        <SubHeader text={getSession().name}/>
                        <Locations contextual className="content-area-plain">
                            <Location path="/" handler={PlayerList}/>
                            <Location path="/:sessionSlug" handler={PlayerList}/>
                        </Locations>
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
)(Player)