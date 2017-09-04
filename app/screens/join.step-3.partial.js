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

class JoinStep3 extends React.Component {
    local = {
        role    : '',
        workTeam: '',
    };

    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active-screen';
            this.forceUpdate();
        }, 1);
    }

    render() {
        const Join          = this.props.join;
        const workTeamList  = ["Solo", "Team"];
        const workStyleList = ["Sat down", "Stood up"];

        const updateLocal = (field, value) => (e) => {
            this.local[field] = value ? value : e.target.value;
            this.forceUpdate();
        };

        const update = (field, value) => (e) => Dispatch({
            type   : ACTIONS.SET_JOIN_DETAILS,
            [field]: value ? value : e.target.value
        });

        const isReady = () => this.local.workTeam && this.local.role;

        const nextStep = () => {
            Dispatch({type: ACTIONS.SET_JOIN_DETAILS, currentTab: 'step-4', ...this.local});
        };

        return (
            <div>
                <div className="anon-title">Tell us about yourself</div>

                <p>This helps us customise Suppl to fit your needs</p>

                <div className="suppl-label" style={{marginTop: 40}}>Your role</div>
                <div className="suppl-input wide">
                    <input type="text" placeholder="E.g. Graphic Designer" onChange={updateLocal('role')}/>
                </div>

                <div className="suppl-label" style={{marginTop: 40}}>Do you work solo or in a team?</div>

                <div className="suppl-multi">
                    {workTeamList.map(workTeam =>
                        <div key={workTeam} className={`multi-item`}
                             data-active={this.local.workTeam == workTeam}
                             onClick={updateLocal('workTeam', workTeam)}
                        >{workTeam}</div>
                    )}
                </div>

                <div className="suppl-butn-new large wide clickable"
                     disabled={!isReady()}
                     style={{marginTop: 40}}
                     onClick={nextStep}
                >
                    Next &nbsp; <i className="fa fa-angle-right"></i>
                </div>

                <div style={{margin: 'auto'}}/>

                <div className="anon-line"/>
                <p style={{marginLeft: 'auto'}} className="linkable">
                    <span onClick={update('currentTab', 'step-2')}><i className="fa fa-angle-left"/> &nbsp; Back</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(JoinStep3)