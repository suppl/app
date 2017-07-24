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

                                <div className="series-heading">
                                    <div className="series-icon" style={{backgroundColor: seriesList['Basics'][0].color}}>
                                        <div className="icon-image"></div>
                                    </div>
                                    <div className="flex">
                                        <div className="series-title">Basics Series</div>
                                        <div className="series-text">{seriesList['Basics'][0].description}</div>
                                    </div>
                                </div>
                                <div className="flex flex-cols">
                                    <div className="flex-col">
                                        <Promo size="mid" sessionId={seriesList['Basics'][0].slug}/>
                                    </div>
                                    <div className="flex-col">
                                        <Promo size="mid" sessionId={seriesList['Basics'][1].slug}/>
                                    </div>
                                </div>


                                {/*<div className="series-heading">*/}
                                    {/*<div className="series-icon" style={{backgroundColor: seriesList['Work Series'][0].color}}>*/}
                                        {/*<div className="icon-image"></div>*/}
                                    {/*</div>*/}
                                    {/*<div className="flex">*/}
                                        {/*<div className="series-title">Work Series</div>*/}
                                        {/*<div className="series-text">{seriesList['Work Series'][0].description}</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="flex flex-cols">*/}
                                    {/*<div className="flex-col">*/}
                                        {/*<Promo size="mid" sessionId={seriesList['Work Series'][0].slug}/>*/}
                                    {/*</div>*/}
                                    {/*<div className="flex-col">*/}
                                        {/*<Promo size="mid" sessionId={seriesList['Work Series'][0].slug}/>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="flex flex-cols">*/}
                                    {/*<div className="flex-col">*/}
                                        {/*<Promo size="mid" sessionId={seriesList['Work Series'][0].slug}/>*/}
                                    {/*</div>*/}
                                    {/*<div className="flex-col">*/}
                                        {/*<Promo size="mid" sessionId={seriesList['Work Series'][0].slug}/>*/}
                                    {/*</div>*/}
                                {/*</div>*/}


                                <div className="series-heading">
                                    <div className="series-icon" style={{backgroundColor: seriesList['Mini Series'][0].color}}>
                                        <div className="icon-image"></div>
                                    </div>
                                    <div className="flex">
                                        <div className="series-title">Mini Series</div>
                                        <div className="series-text">{seriesList['Mini Series'][0].description}</div>
                                    </div>
                                </div>
                                <div className="sub-sub-heading-3">Work on your breathing</div>
                                <div className="flex flex-cols">
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
                                <div className="sub-sub-heading-3">Upper body boost</div>
                                <div className="flex flex-cols">
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
                                <div className="sub-sub-heading-3">Lower body brilliance</div>
                                <div className="flex flex-cols">
                                    <div className="flex-col">
                                        <Promo size="small" sessionId={seriesList['Mini Series'][2].slug}/>
                                    </div>
                                    <div className="flex-col">
                                        <Promo size="small" sessionId={seriesList['Mini Series'][2].slug}/>
                                    </div>
                                    <div className="flex-col">
                                        <Promo size="small" sessionId={seriesList['Mini Series'][2].slug}/>
                                    </div>
                                </div>




                                <div className="series-heading">
                                    <div className="series-icon" style={{backgroundColor: seriesList['Sleep Series'][0].color}}>
                                        <div className="icon-image"></div>
                                    </div>
                                    <div className="flex">
                                        <div className="series-title">Sleep Series</div>
                                        <div className="series-text">{seriesList['Sleep Series'][0].description}</div>
                                    </div>
                                </div>
                                <div className="flex flex-cols">
                                    <div className="flex-col">
                                        <Promo size="mid" sessionId={seriesList['Sleep Series'][0].slug}/>
                                    </div>
                                    <div className="flex-col">
                                        <Promo size="mid" sessionId={seriesList['Sleep Series'][0].slug}/>
                                    </div>
                                </div>
                                {/*<div className="flex flex-cols">*/}
                                    {/*<div className="flex-col">*/}
                                        {/*<Promo size="small" sessionId={seriesList['Mini Series'][2].slug}/>*/}
                                    {/*</div>*/}
                                    {/*<div className="flex-col">*/}
                                        {/*<Promo size="small" sessionId={seriesList['Mini Series'][2].slug}/>*/}
                                    {/*</div>*/}
                                    {/*<div className="flex-col">*/}
                                        {/*<Promo size="small" sessionId={seriesList['Mini Series'][2].slug}/>*/}
                                    {/*</div>*/}
                                {/*</div>*/}


                                {/*{Object.keys(seriesList).map((category) =>*/}
                                {/*<div>*/}
                                {/*<div className="series-heading">*/}
                                {/*<div className="series-icon" style={{backgroundColor: seriesList[category][0].color}}>*/}
                                {/*<div className="icon-image"></div>*/}
                                {/*</div>*/}
                                {/*<div className="flex">*/}
                                {/*<div className="series-title">{category}</div>*/}
                                {/*<div className="series-text">{seriesList[category][0].description}</div>*/}
                                {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="flex flex-cols">*/}
                                {/*{seriesList[category].map((series, seriesIndex) => (*/}
                                {/*<div className="flex-col">*/}
                                {/*<Promo size="mid" sessionId={series.slug} audioId={series.audios[0]}/>*/}
                                {/*</div>*/}
                                {/*))}*/}
                                {/*</div>*/}
                                {/*</div>*/}
                                {/*)}*/}
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