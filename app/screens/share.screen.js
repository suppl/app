import React from 'react';
import {Link} from 'react-router-component';
import * as _ from 'lodash';

import * as ACTIONS from '../constants/actions.constants';

import {connect} from "react-redux";

import {Dispatch, State} from './../services/dispatch.service';
import {SetUrl} from '../services/helper.service';
import SubHeader from '../components/sub-header/sub-header';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';

class ShareScreen extends React.Component {

    componentWillMount() {
        setTimeout(() => {
            this.activeClass = 'active-screen';
            this.forceUpdate();
        }, 1);

        Dispatch({type: ACTIONS.SET_WAITLIST_EMAIL, email: this.props._query.email});
        Dispatch({type: ACTIONS.LOAD_WAITLIST_USER});
    }

    referralEmails = ['', '', ''];
    user           = this.props.waitlist.user ? this.props.waitlist.user : {};

    tweet         = () => this.openLink(`https://twitter.com/home?status=I%20just%20signed%20up%20to%20Suppl!%20Correct%20posture,%20pronto%20http%3A//suppl.co/?refcode=${this.props.waitlist.user.affiliate}`);
    shareFacebook = () => this.openLink(`https://www.facebook.com/sharer/sharer.php?u=http%3A//suppl.co/?refcode=${this.user.affiliate}`);
    shareLinkedIn = () => this.openLink(`https://www.linkedin.com/shareArticle?mini=true&url=http%3A//www.suppl.co/?refcode=${this.user.affiliate}&title=I%20just%20signed%20up%20to%20Suppl!&summary=&source=www.suppl.co`);
    openLink      = (link) => window.open(link, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');

    updateReferralEmails = (e, index) => {
        this.referralEmails[index] = e.target.value;
        Dispatch({
            type          : ACTIONS.SET_WAITLIST_REFERRAL_EMAILS,
            referralEmails: this.referralEmails,
        });
    };


    render() {
        const firstName = this.props.waitlist.user ? this.props.waitlist.user.name.split(' ')[0] : '';
        const email     = this.props._query.email;
        const user      = this.props.waitlist.user ? this.props.waitlist.user : {};

        return (
            <div data-screen className={`register-screen ${this.activeClass}`}>
                <div className="flex flex-row">
                    <div className="register-left">
                        <div className="register-header">
                            <Link href="/" className="header-logo clickable">
                                <img src="/statics/images/suppl-favicon.png" alt="Suppl Logo"/>
                            </Link>
                            <Link href="/" className="header-logo-text clickable">SUPPL</Link>
                            <div className="header-page">Early access</div>
                        </div>

                        <div className="register-heading">
                            <div style={{fontSize: '30px', marginBottom: '15px'}}>Bump the
                                <strong> queue</strong> {firstName}!
                            </div>

                            <strong>Invite your friends</strong> to Suppl and we’ll bump you up the queue by
                            <strong> 50 places</strong> per sign up!
                        </div>


                        <div className="suppl-form" style={{marginTop: '40px'}}>
                            <div className="suppl-label">Best friend</div>

                            <div className="suppl-input">
                                <div className="input-icon icon-envelope"/>
                                <input type="email"
                                       placeholder="E.g. harry@myfriend.com"
                                       autoFocus={true}
                                       value={this.referralEmails[0]}
                                       onChange={(e) => this.updateReferralEmails(e, 0)}
                                />
                            </div>

                            <div className="suppl-label">Good friend</div>

                            <div className="suppl-input">
                                <div className="input-icon icon-envelope"/>
                                <input type="email"
                                       placeholder="E.g. sally@myfriend.com"
                                       value={this.referralEmails[1]}
                                       onChange={(e) => this.updateReferralEmails(e, 1)}
                                />
                            </div>

                            <div className="suppl-label">Oldest friend</div>

                            <div className="suppl-input">
                                <div className="input-icon icon-envelope"/>
                                <input type="email"
                                       placeholder="E.g. jerry@myfriend.com"
                                       value={this.referralEmails[2]}
                                       onChange={(e) => this.updateReferralEmails(e, 2)}
                                />
                            </div>

                            <div className="butn large pull-right" onClick={this.props.sendReferral}>Invite my friends!</div>


                            {/*<p className="clearfix">*/}
                            {/*/!*<Link href="/" className="pull-left">Login</Link>*!/*/}
                            {/*<Link href="/" style={{*/}
                            {/*textAlign: 'center',*/}
                            {/*display  : 'block'*/}
                            {/*}}>Check my place in the queue</Link>*/}
                            {/*</p>*/}
                        </div>


                    </div>

                    <div className="register-right" style={{backgroundColor: '#f7fafc'}}>
                        <div className="position-info">
                            <div className="position-18">You are in position</div>
                            <div className="position-number">{user.position}</div>
                            <div className="position-18">On our waiting list</div>
                            <div className="position-line"/>
                            <div className="position-text">
                                <strong>Bump the queue</strong> by inviting your friends with your uniqe invitation code
                            </div>

                            <input className="position-code" readOnly={true} value={`http://www.suppl.co/?refcode=${user.affiliate}`}>

                            </input>

                            <div className="position-buttons">
                                <div className="position-button clickable" onClick={this.tweet}>
                                    <i className="fa fa-twitter"/> Tweet
                                </div>
                                <div className="position-button clickable" onClick={this.shareFacebook}>
                                    <i className="fa fa-facebook"/> Share
                                </div>
                                <div className="position-button clickable" onClick={this.shareLinkedIn}>
                                    <i className="fa fa-linkedin"/> Share
                                </div>
                            </div>

                            <div className="position-line"/>

                            <div className="position-reward">
                                <div className="reward-star">
                                    <i className="fa fa-star" style={{color: '#ffc300'}}/>
                                </div>
                                <div className="flex">
                                    <div className="reward-top">THE TOP 20</div>
                                    <div className="reward-bottom">
                                        Get a <strong>FREE</strong> Lifetime Suppl subscription, a
                                        <strong> FREE</strong> Suppl t-shirt & stickers, plus you’ll be first to use Suppl.
                                    </div>
                                </div>
                            </div>

                            <div className="position-reward">
                                <div className="reward-star">
                                    <i className="fa fa-star" style={{color: '#dddddd'}}/>
                                </div>
                                <div className="flex">
                                    <div className="reward-top">THE TOP 100</div>
                                    <div className="reward-bottom">
                                        Get a 6 month FREE Suppl subscription and FREE Suppl t-shirt.
                                    </div>
                                </div>
                            </div>

                            <div className="position-reward">
                                <div className="reward-star">
                                    <i className="fa fa-star" style={{color: '#d6bd96'}}/>
                                </div>
                                <div className="flex">
                                    <div className="reward-top">THE TOP 500</div>
                                    <div className="reward-bottom">
                                        Get a 3 month FREE Suppl subscription & a whole lotta love.
                                    </div>
                                </div>
                            </div>


                        </div>
                        {/*<img className="register-img" src="/statics/svg/waitlist/early-acess-03.svg" style={{*/}
                        {/*marginTop   : "auto",*/}
                        {/*marginBottom: "auto"*/}
                        {/*}}/>*/}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    // firebase.auth().onAuthStateChanged(function (user) {
    //     if (!user) SetUrl('/');
    // });
    //
    return state
};

const mapDispatchToProps = dispatch => ({

    sendReferral: (event) => dispatch({
        type: ACTIONS.SEND_WAITLIST_REFERRAL
    }),

    signUp: () => dispatch({
        type: ACTIONS.SUBMIT_WAITLIST_SIGNUP
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShareScreen)