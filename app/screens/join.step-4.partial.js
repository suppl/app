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

class JoinStep4 extends React.Component {
    local = {
        workStyle: '',
    };

    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active-screen';
            this.forceUpdate();
        }, 1);
    }

    render() {
        const Join          = this.props.join;
        const workStyleList = ["Sat down", "Stood up"];

        const updateLocal = (field, value) => (e) => {
            this.local[field] = value ? value : e.target.value;
            this.forceUpdate();
        };

        const update = (field, value) => (e) => Dispatch({
            type   : ACTIONS.SET_JOIN_DETAILS,
            [field]: value ? value : e.target.value
        });

        const isReady = () => this.local.workStyle;

        const nextStep = () => {
            Dispatch({type: ACTIONS.SET_JOIN_DETAILS, ...this.local});


        };

        return (
            <div>
                <div className="anon-title">Woohoo! It’s time to start using Suppl</div>

                <p>Lets get your first session setup</p>

                <div className="suppl-label" style={{marginTop: 40}}>How do you typically work?</div>

                <div className="suppl-multi">
                    {workStyleList.map(workStyle =>
                        <div key={workStyle} className={`multi-item`}
                             data-active={this.local.workStyle == workStyle}
                             onClick={updateLocal('workStyle', workStyle)}
                        >{workStyle}</div>
                    )}
                </div>

                <div className="suppl-butn-new large wide clickable"
                     disabled={!isReady()}
                     style={{marginTop: 40}}
                     onClick={nextStep}
                >
                    Start using Suppl!
                </div>

                <div style={{margin: 'auto'}}/>

                <div className="anon-line"/>
                <p style={{marginLeft: 'auto'}} className="linkable">
                    <span onClick={update('currentTab', 'step-3')}><i className="fa fa-angle-left"/> &nbsp; Back</span>
                </p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) SetUrl('/dashboard');
    });

    return state
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(JoinStep4)