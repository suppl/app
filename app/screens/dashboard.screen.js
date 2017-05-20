import React from 'react';
import {connect} from "react-redux";
import * as _ from 'lodash';

import * as ACTIONS from '../constants/actions.constants';
import SubHeader from '../components/sub-header/sub-header';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';
import {SessionList} from '../services/session.service';


class Dashboard extends React.Component {
    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active';
            this.forceUpdate();
        }, 1);
    }

    render() {
        const sessionGroup = _.groupBy(SessionList, 'category');
        console.log('sessionGroup', sessionGroup)


        return (
            <div data-screen className={`${this.activeClass}`}>
                <Header/>
                <div className="flex flex-row">
                    <Sidebar/>
                    <div data-content className="flex flex-max">
                        <SubHeader text="Sessions"/>

                        <div className="content-area" style={{paddingTop:0}}>
                            {Object.keys(sessionGroup).map((category) =>
                                <div>
                                    <div className="line-heading">{category}</div>
                                    <div className="panels">
                                        {sessionGroup[category].map((session, index) =>
                                            <a className="panel" href={`#/player/${session.slug}`} key={session.slug}>
                                                <div className="panel-icon" style={{background: session.color}}>
                                                    <div className={session.icon}></div>
                                                </div>
                                                <div className="panel-heading">
                                                    <span>{session.name}</span>
                                                    <span>{session.audios.length}</span>
                                                </div>

                                                <div className="panel-text">
                                                    <span>{session.category}</span>
                                                    <span>Levels</span>
                                                </div>
                                            </a>
                                        )}
                                    </div>

                                </div>
                            )}



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

const mapDispatchToProps = dispatch => ({
    showAward: (awardId) => dispatch({
        type   : ACTIONS.SHOW_AWARD,
        awardId: awardId
    }),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard)