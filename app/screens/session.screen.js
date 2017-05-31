import React from 'react';
import {connect} from "react-redux";
import * as _ from 'lodash';

import * as ACTIONS from '../constants/actions.constants';
import SubHeader from '../components/sub-header/sub-header';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';
import {SessionList, isAudioAvailable} from '../services/session.service';


class Sessions extends React.Component {
    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active';
            this.forceUpdate();
        }, 1);
    }

    render() {
        const session = _.find(SessionList, {slug: this.props.sessionId});

        console.log('session props', this.props['sessionId']);

        return (
            <div data-screen className={`${this.activeClass}`}>
                <Header/>
                <div className="flex flex-row">
                    <Sidebar/>
                    <div data-content className="flex flex-max">
                        <SubHeader text="Sessions"/>

                        <div className="content-area" style={{paddingTop:0}}>
                            <div className="line-heading">
                                <a href="#/sessions" className="link"><i className="fa fa-angle-left"></i> &nbsp; {session.category}</a>
                            </div>

                            <div className="session-banner"  style={{background: session.color}}>
                                <div className={`session-icon ${session.icon}`}/>
                                <div className="session-content flex flex-justify">
                                    <strong>{session.name}</strong>
                                    <div>{session.description}</div>
                                </div>

                            </div>

                            <div className="sub-sub-heading">Select your level</div>

                            <div className="session-levels">
                                {session.audios.map((audio, index) =>
                                    <a className="session-level" href={`#/dashboard/${session.slug}`} disabled={!isAudioAvailable(audio)}>
                                        <div className="level-top">
                                            <div className="level-icon" style={{background: session.color}}>
                                                <i className="flaticon-star"></i>
                                            </div>
                                        </div>
                                        <div className="level-bottom">
                                            <div>Level {index + 1}</div>
                                            <i className="fa fa-angle-right"></i>
                                        </div>
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