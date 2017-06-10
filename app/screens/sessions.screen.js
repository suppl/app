import React from 'react';
import {connect} from "react-redux";
import * as _ from 'lodash';

import * as ACTIONS from '../constants/actions.constants';
import SubHeader from '../components/sub-header/sub-header';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';
import {SessionList, getSessionTime} from '../services/session.service';


class Sessions extends React.Component {
    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active';
            this.forceUpdate();
        }, 1);
    }

    render() {
        const seriesList = _.groupBy(SessionList, 'category');

        return (
            <div data-screen className={`${this.activeClass}`}>
                <Header/>
                <div className="flex flex-row">
                    <Sidebar/>
                    <div data-content className="flex flex-max">

                        <div className="content-area" style={{paddingTop: 0}}>
                            <div className="content-content">
                                <SubHeader text="Sessions"/>
                                {Object.keys(seriesList).map((category) =>
                                    <div>
                                        <div className="line-heading">{category}</div>
                                        <div className="series-list">
                                            {seriesList[category].map((series, index) =>
                                                <a className="series" href={`#/sessions/${series.slug}`} key={series.slug}>
                                                    <div className="series-top">
                                                        <div className={`series-icon ${series.icon}`} style={{color: series.color}}/>
                                                    </div>
                                                    <div className="series-time">
                                                        <div className="time-number">{series.audios.length}</div>
                                                        <div className="time-text">levels</div>
                                                    </div>

                                                    <div className="series-info">
                                                        <div className="flex">
                                                            <div className="info-title">{series.name}</div>
                                                            <div className="info-text">{series.name}</div>
                                                        </div>

                                                        <i className="flaticon-right-chevron go-icon"/>
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
)(Sessions)