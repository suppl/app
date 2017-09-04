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
import JoinStep1 from './join.step-1.partial';
import JoinStep2 from './join.step-2.partial';
import JoinStep3 from './join.step-3.partial';
import JoinStep4 from './join.step-4.partial';

class JoinScreen extends React.Component {
    local = {
        name    : '',
        email   : '',
        password: '',
    };

    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active-screen';
            this.forceUpdate();
        }, 1);
    }

    render() {
        const Join = this.props.join;

        const background = {
            'step-1': '#f9fbff',
            'step-2': '#edfffc',
            'step-3': '#fffaf1',
            'step-4': '#ebf9ff',
        };

        const isTab = (tab) => tab == Join.currentTab;

        return (
            <div data-screen className={`${this.activeClass}`}>
                <div className="suppl-anon">
                    <div className="anon-left">
                        <Link href="/" className="anon-icon clickable">
                            <img src="/statics/images/suppl-favicon.png"/>
                        </Link>

                        <div className="suppl-panel">
                            <div className="panel-content flush">
                                <div className="content-tab" data-visible={isTab('step-1')}>
                                    <JoinStep1/>
                                </div>
                                <div className="content-tab" data-visible={isTab('step-2')}>
                                    <JoinStep2/>
                                </div>
                                <div className="content-tab" data-visible={isTab('step-3')}>
                                    <JoinStep3/>
                                </div>
                                <div className="content-tab" data-visible={isTab('step-4')}>
                                    <JoinStep4/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="anon-right" style={{backgroundColor:background[Join.currentTab]}}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    firebase.auth().onAuthStateChanged(user => (user) && SetUrl('/dashboard'));
    return state
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(JoinScreen)