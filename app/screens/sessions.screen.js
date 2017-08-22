import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-component';
import * as _ from 'lodash';

import * as ACTIONS from '../constants/actions.constants';
import SubHeader from '../components/sub-header/sub-header';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';
import {SessionList, getSessionTime, getAudioById} from '../services/session.service';
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
                <div className="flex flex-row">
                    <Sidebar screen="sessions"/>
                    <div data-content className="flex flex-max">
                        <Header/>
                        <div className="content-area" style={{paddingTop: 0}}>
                            <div className="content-content">

                                <div className="block light" style={{backgroundImage:`url('/statics/svg/hero/sessions-hero.svg')`}}>
                                    <div className="flex flex-row flex-between">
                                        <div>
                                            <div className="thin-heading">Sessions</div>
                                            <div className="thin-subheading">Great to have you realigning.</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="thin-heading-2">Foundation</div>
                                {/*<div className="sub-sub-heading-2" style={{marginTop: 5}}>Each session builds on the one before it.</div>*/}

                                <div className="flex flex-cols flex-cols-large">
                                    <div className="flex-col">
                                        <Promo size="mid" sessionId={'sitting'}/>
                                    </div>
                                    <div className="flex-col">
                                        <Promo size="mid" sessionId={'standing'}/>
                                    </div>
                                </div>


                                <div className="thin-heading-2">Minis</div>
                                {/*<div className="sub-sub-heading-2" style={{marginTop: 5}}>Too busy? Spend 1 minute focusing on relaigning your body and mind.  </div>*/}

                                <div className="flex flex-cols flex-cols-large">
                                    <div className="flex-col">
                                        <Promo size="mid" sessionId={'back'}/>
                                    </div>
                                    <div className="flex-col">
                                        <Promo size="mid" sessionId={'neck'}/>
                                    </div>
                                    <div className="flex-col">
                                        <Promo size="mid" sessionId={'shoulders'}/>
                                    </div>
                                </div>

                                <div className="flex flex-cols flex-cols-large">
                                    <div className="flex-col">
                                        <Promo size="mid" sessionId={seriesList['Mini Series'][1].slug}/>
                                    </div>
                                    <div className="flex-col">
                                        <Promo size="mid" sessionId={seriesList['Mini Series'][1].slug}/>
                                    </div>
                                    <div className="flex-col">
                                        <Promo size="mid" sessionId={seriesList['Mini Series'][1].slug}/>
                                    </div>
                                </div>

                                <div className="flex flex-cols flex-cols-large">
                                    <div className="flex-col">
                                        <Promo size="mid" sessionId={seriesList['Mini Series'][2].slug}/>
                                    </div>
                                    <div className="flex-col">
                                        <Promo size="mid" sessionId={seriesList['Mini Series'][2].slug}/>
                                    </div>
                                    <div className="flex-col">
                                        <Promo size="mid" sessionId={seriesList['Mini Series'][2].slug}/>
                                    </div>
                                </div>


                                <div className="thin-heading-2">Growth</div>
                                {/*<div className="sub-sub-heading-2" style={{marginTop: 5}}>Finished with fundamentals? Extend your range and motion and perfect your posture.</div>*/}

                                <div className="flex flex-cols flex-cols-large">
                                    <div className="flex-col">
                                        <Promo size="mid" sessionId={seriesList['Mini Series'][0].slug}/>
                                    </div>
                                    <div className="flex-col">
                                        <Promo size="mid" sessionId={seriesList['Mini Series'][0].slug}/>
                                    </div>
                                    <div className="flex-col">
                                        <Promo size="mid" sessionId={seriesList['Mini Series'][0].slug}/>
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