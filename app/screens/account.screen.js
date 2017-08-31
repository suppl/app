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
    currentTab = 'personal';

    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active-screen';
            this.forceUpdate();
        }, 1);

        Dispatch(ACTIONS.LOAD_ACCOUNT_DETAILS)
    }

    render() {
        const Account       = this.props.account;
        const workHoursList = ["5-8", "8-12", "12+"];
        const workStyleList = ["Sat down", "Stood up"];

        const update = (field, value) => {
            return (e) => {
                Dispatch({type: ACTIONS.SET_ACCOUNT_DETAILS, [field]: value ? value : e.target.value});
            }
        };

        const save = () => {
            Dispatch({type: ACTIONS.SAVE_ACCOUNT_DETAILS});
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
                                        <div className="header-tab clickable" data-active={Account.currentTab == 'personal'} onClick={update('currentTab', 'personal')}>Personal details</div>
                                        <div className="header-tab clickable" data-active={Account.currentTab == 'about'} onClick={update('currentTab', 'about')}>About you</div>
                                        <div className="header-tab clickable" data-active={Account.currentTab == 'billing'} onClick={update('currentTab', 'billing')}>Billing</div>
                                        <div className="header-tab empty linkable" style={{marginLeft: 'auto'}}>Extreme measures</div>
                                    </div>

                                    <div className="panel-content">

                                        <div className="content-tab" data-visible={Account.currentTab == 'personal'}>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="suppl-label" style={{margin: 0}}>Username</div>
                                                    <div className="suppl-input">
                                                        <input type="text" value={Account.username} onChange={update('username')}/>
                                                    </div>

                                                    <div className="suppl-label">Full name</div>
                                                    <div className="suppl-input">
                                                        <input type="text" value={Account.name} onChange={update('name')}/>
                                                    </div>

                                                    <div className="suppl-label">Email</div>
                                                    <div className="suppl-input">
                                                        <input type="email" value={Account.email} onChange={update('email')}/>
                                                    </div>

                                                    <div className="suppl-butn-new clickable" style={{marginTop: 40}} onClick={save}>Save</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="content-tab" data-visible={Account.currentTab == 'about'}>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="suppl-label" style={{margin: 0}}>Your role</div>

                                                    <div className="suppl-input">
                                                        {/*<div className="input-icon icon-tie"/>*/}
                                                        <input type="text" placeholder="E.g. Accountant" value={Account.role} onChange={update('role')}/>
                                                    </div>

                                                    <div className="suppl-label">Daily work hours</div>

                                                    <div className="suppl-multi">
                                                        {workHoursList.map(workHours =>
                                                            <div key={workHours} className={`multi-item`}
                                                                 data-active={Account.workHours == workHours}
                                                                 onClick={update('workHours', workHours)}
                                                            >{workHours}</div>
                                                        )}
                                                    </div>

                                                    <div className="suppl-label">Regular position</div>

                                                    <div className="suppl-multi">
                                                        {workStyleList.map(workStyle =>
                                                            <div key={workStyle} className={`multi-item`}
                                                                 data-active={Account.workStyle == workStyle}
                                                                 onClick={update('workStyle', workStyle)}
                                                            >{workStyle}</div>
                                                        )}
                                                    </div>

                                                    <div className="suppl-butn-new clickable" style={{marginTop: 40}} onClick={save}>Save</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="content-tab" data-visible={Account.currentTab == 'billing'}>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="suppl-label" style={{margin: 0}}>Suppl plan</div>

                                                    <div className="suppl-input">
                                                        <input type="text" readOnly='readonly' value="BASIC -  FREE FOREVER"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


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

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AccountScreen)