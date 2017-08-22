import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-component';
import Router from 'react-router-component'
const Locations = Router.Locations;
const Location  = Router.Location;

import SubHeader from '../components/sub-header/sub-header';
import Header from '../components/header/header';
import HeaderMobile from '../components/header/header.mobile';
import FooterMobile from '../components/footer/footer.mobile';
import Promo from '../components/promo/promo';
import Sidebar from '../components/sidebar/sidebar';
import FeedItem from '../components/feed-item/feed-item'
import PlayerList from '../components/player-list/player-list.component';
import Dispatch from '../services/dispatch.service'
import * as ACTIONS from '../constants/actions.constants'
import {SetUrl, CalcStreak, CalcComplete} from '../services/helper.service';

import _ from 'lodash';
import {SessionList} from '../services/session.service';


class SessionsScreenMobile extends React.Component {
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
                <div data-mobile-screen>

                    <HeaderMobile/>
                    <FooterMobile screen="sessions"/>
                    <div data-mobile-content style={{padding: 0}}>
                        <div className="content-area" style={{paddingTop: 0}}>
                            <div className="content-content">

                                <div className="block light" style={{backgroundImage:`url('/statics/svg/hero/sessions-hero.svg')`}}>
                                    <div className="flex flex-row flex-between">
                                        <div>
                                            <div className="thin-heading">Sessions</div>
                                            <div className="thin-subheading">Select a session for you</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="thin-heading-2">Foundation</div>

                                <div className="flex">
                                    <Promo size="mid" sessionId={'sitting'}/>
                                    <Promo size="mid" sessionId={'standing'}/>
                                </div>

                                <div className="thin-heading-2">Minis</div>

                                <div className="flex">
                                    <Promo size="mid" sessionId={'back'}/>
                                    <Promo size="mid" sessionId={'neck'}/>
                                    <Promo size="mid" sessionId={'shoulders'}/>
                                </div>

                                <div className="flex">
                                    <Promo size="mid" sessionId={seriesList['Mini Series'][1].slug}/>
                                    <Promo size="mid" sessionId={seriesList['Mini Series'][1].slug}/>
                                    <Promo size="mid" sessionId={seriesList['Mini Series'][1].slug}/>
                                </div>

                                <div className="flex">
                                    <Promo size="mid" sessionId={seriesList['Mini Series'][2].slug}/>
                                    <Promo size="mid" sessionId={seriesList['Mini Series'][2].slug}/>
                                    <Promo size="mid" sessionId={seriesList['Mini Series'][2].slug}/>
                                </div>


                                <div className="thin-heading-2">Growth</div>

                                <div className="flex">
                                    <Promo size="mid" sessionId={seriesList['Mini Series'][0].slug}/>
                                    <Promo size="mid" sessionId={seriesList['Mini Series'][0].slug}/>
                                    <Promo size="mid" sessionId={seriesList['Mini Series'][0].slug}/>
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

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionsScreenMobile)