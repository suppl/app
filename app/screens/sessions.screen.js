import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-component';
import * as _ from 'lodash';

import * as ACTIONS from '../constants/actions.constants';
import SubHeader from '../components/sub-header/sub-header';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';
import {SessionList, getSessionTime} from '../services/session.service';
import {SetUrl} from '../services/helper.service';
import Promo from '../components/promo/promo';


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
                    <Sidebar screen="sessions"/>
                    <div data-content className="flex flex-max">

                        <div className="content-area" style={{paddingTop: 0}}>
                            <div className="content-content">
                                <SubHeader text="Sessions"/>
                                {Object.keys(seriesList).map((category) =>
                                    <div>
                                        <div className="line-heading">{category}</div>
                                        <div className="flex flex-cols">
                                            {seriesList[category].map((series, seriesIndex) => (
                                                <div className="flex-col">
                                                    <Promo size="mid" sessionId={series.slug} audioId={series.audios[0]}/>
                                                </div>
                                            ))}
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
        if (!user) SetUrl('/');
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