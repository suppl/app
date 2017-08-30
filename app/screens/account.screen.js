import React from 'react';
import {Link} from 'react-router-component';
import * as _ from 'lodash';

import * as ACTIONS from '../constants/actions.constants';

import {connect} from "react-redux";

import {Dispatch, State} from './../services/dispatch.service';
import {CalcComplete, CalcStreak, CalcTotals, SetUrl} from '../services/helper.service';
import SubHeader from '../components/sub-header/sub-header';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';

class AccountScreen extends React.Component {
    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active-screen';
            this.forceUpdate();
        }, 1);
    }

    render() {

        const activeStreak = (number) => {
            return number <= CalcStreak(this.props.public.user) ? 'active' : ''
        };

        return (
            <div data-screen className={`${this.activeClass}`}>
                <div className="flex flex-row">
                    <Sidebar screen="account"/>
                    <div data-content className="flex flex-max">
                        <Header/>
                        <div className="content-area" style={{paddingTop: 0}}>
                            <div className="content-content">

                                <div className="block light">
                                    <div className="flex flex-row flex-between">
                                        <div>
                                            <div className="thin-heading">Account</div>
                                            <div className="thin-subheading">Everything you need, and don’t worry only you can see this</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="suppl-panel">
                                    <div className="panel-header">
                                        <div className="header-tab clickable">Personal details</div>
                                        <div className="header-tab clickable">About you</div>
                                        <div className="header-tab clickable">Billing</div>
                                        <div className="header-tab empty clickable" style={{marginLeft:'auto'}}>Extreme measures</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    firebase.auth().onAuthStateChanged(function (user) {
        if (!user) SetUrl('/');
    });

    return state
};

const mapDispatchToProps = dispatch => ({

    giveAward: (awardId) => dispatch({
        type   : ACTIONS.GIVE_AWARD,
        awardId: awardId,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountScreen)