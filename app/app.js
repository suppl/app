import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux'

import Router from 'react-router-component'
const Locations = Router.Locations;
const Location  = Router.Location;

import {IsDesktop, IsMobile, IsTablet, If} from './services/helper.service';

import JoinScreen from './screens/join.screen';
import SignInScreen from './screens/sign-in.screen';
import SessionsScreen from './screens/sessions.screen';
import SessionScreen from './screens/session.screen';
import DashboardScreen from './screens/dashboard.screen';
import SplashScreen from './screens/splash.screen';
import ProfileScreen from './screens/profile.screen';
import RegisterScreen from './screens/register.screen';
import RegisterPasswordScreen from './screens/register-password.screen';
import RegisterJobScreen from './screens/register-job.screen';
import RegisterStyleScreen from './screens/register-style.screen';
import ProgressScreen from './screens/progress.screen';
import PerformanceScreen from './screens/performance.screen';
import JourneyScreen from './screens/journey.screen';
import CommunityScreen from './screens/community.screen';
import TeamScreen from './screens/team.screen';
import WaitlistScreen from './screens/waitlist.screen';
import PositionScreen from './screens/position.screen';
import ShareScreen from './screens/share.screen';
import BumpScreen from './screens/bump.screen';
import AccountScreen from './screens/account.screen';


import JoinScreenMobile from './screens-mobile/join.screen.mobile';
import SignInScreenMobile from './screens-mobile/sign-in.screen.mobile';
import ProfileScreenMobile from './screens-mobile/profile.screen.mobile';
import PerformanceScreenMobile from './screens-mobile/performance.screen.mobile';
import JourneyScreenMobile from './screens-mobile/journey.screen.mobile';
import WaitlistScreenMobile from './screens-mobile/waitlist.screen.mobile';
import PositionScreenMobile from './screens-mobile/position.screen.mobile';
import BumpScreenMobile from './screens-mobile/bump.screen.mobile';
import ShareScreenMobile from './screens-mobile/share.screen.mobile';
import RegisterScreenMobile from './screens-mobile/register.screen.mobile';
import DashboardScreenMobile from './screens-mobile/dashboard.screen.mobile';
import SessionsScreenMobile from './screens-mobile/sessions.screen.mobile';
import SessionScreenMobile from './screens-mobile/session.screen.mobile';
import SplashScreenMobile from './screens-mobile/splash.screen.mobile';
import CommunityScreenMobile from './screens-mobile/community.screen.mobile';
import TeamScreenMobile from './screens-mobile/team.screen.mobile';
import AccountScreenMobile from './screens-mobile/account.screen.mobile';


import PopupPassword from './components/popup-password/popup-password';
import PopupStandard from './components/popup-standard/popup-standard';
import Notification from './components/notification/notification';
import Complete from './components/complete/complete.component';
import Player from './components/player/player.component';
import Loader from './components/loader/loader';
import Award from './components/award/award';
import Onboarding from './components/onboarding/onboarding.component';


import userReducer from './reducers/user.reducer';
import requestReducer from './reducers/request.reducer';
import notificationReducer from './reducers/notification.reducer';
import popupReducer from './reducers/popup.reducer';
import settingsReducer from './reducers/settings.reducer';
import awardReducer from './reducers/award.reducer';
import publicReducer from './reducers/public.reducer';
import waitlistReducer from './reducers/waitlist.reducer';
import communityReducer from './reducers/community.reducer';
import feedReducer from './reducers/feed.reducer';
import OnboardingReducer from './reducers/onboarding.reducer';
import ProfileReducer from './reducers/profile.reducer';
import AccountReducer from './reducers/account.reducer';
import SignInReducer from './reducers/sign-in.reducer';
import JoinReducer from './reducers/join.reducer';


const reducer = combineReducers({
    user        : userReducer,
    request     : requestReducer,
    notification: notificationReducer,
    popup       : popupReducer,
    settings    : settingsReducer,
    award       : awardReducer,
    'public'    : publicReducer,
    waitlist    : waitlistReducer,
    community   : communityReducer,
    feed        : feedReducer,
    onboarding  : OnboardingReducer,
    profile     : ProfileReducer,
    account     : AccountReducer,
    signIn      : SignInReducer,
    join        : JoinReducer,
});

export const store = createStore(reducer);

require('./app.scss');

class App extends React.Component {

    componentWillMount() {
        if (!window.location.protocol.match('s') && !window.location.host.match('localhost')) {
            window.location.protocol = 'https:'
        } else {
            console.log = () => {};
            console.info = () => {};
        }

        $(window).resize(() => {
            console.log('resize');
            this.forceUpdate();
        });
    }

    styleClasses = () => [
        IsDesktop() ? 'desktop' : 'not-desktop',
        IsMobile() ? 'mobile' : 'not-mobile',
        IsTablet() ? 'tablet' : 'not-tablet',
    ].join(' ');

    render() {
        return (
            <Provider store={store}>
                <div className={`flex flex-max ${this.styleClasses()}`}>
                    <Notification/>
                    <Player/>
                    <Complete/>
                    <Loader/>
                    <PopupPassword/>
                    <PopupStandard/>
                    <Onboarding/>
                    <Award/>
                    {/*<FooterMobile/>*/}


                    <If condition={IsDesktop()}>
                        <Locations>
                            <Location path="/" handler={SignInScreen}/>
                            {/*<Location path="/" handler={SplashScreen}/>*/}
                            <Location path="/join" handler={JoinScreen}/>
                            <Location path="/register" handler={RegisterScreen}/>
                            <Location path="/register-password" handler={RegisterPasswordScreen}/>
                            <Location path="/register-job" handler={RegisterJobScreen}/>
                            <Location path="/register-style" handler={RegisterStyleScreen}/>
                            <Location path="/account" handler={AccountScreen}/>
                            <Location path="/performance" handler={PerformanceScreen}/>
                            <Location path="/journey" handler={JourneyScreen}/>
                            <Location path="/progress" handler={ProgressScreen}/>
                            <Location path="/sessions" handler={SessionsScreen}/>
                            <Location path="/sessions/:sessionId" handler={SessionScreen}/>
                            <Location path="/dashboard(/*)" handler={DashboardScreen}/>
                            <Location path="/home(/*)" handler={DashboardScreen}/>
                            <Location path="/profile" handler={ProfileScreen}/>
                            <Location path="/profile/:profileId" handler={ProfileScreen}/>
                            <Location path="/community" handler={TeamScreen}/>
                            <Location path="/team" handler={TeamScreen}/>
                            <Location path="/waitlist" handler={WaitlistScreen}/>
                            <Location path="/waitlist/check" handler={PositionScreen}/>
                            <Location path="/waitlist/share" handler={ShareScreen}/>
                            <Location path="/waitlist/bump" handler={BumpScreen}/>
                            <Location path="**" handler={SplashScreenMobile}/>
                        </Locations>
                    </If>

                    <If condition={IsTablet() || IsMobile()}>
                        <Locations>
                            {/*<Location path="/" handler={SplashScreenMobile}/>*/}
                            <Location path="/" handler={SignInScreenMobile}/>
                            <Location path="/join" handler={JoinScreenMobile}/>
                            <Location path="/register" handler={RegisterScreenMobile}/>
                            <Location path="/register-password" handler={RegisterPasswordScreen}/>
                            <Location path="/register-job" handler={RegisterJobScreen}/>
                            <Location path="/register-style" handler={RegisterStyleScreen}/>
                            <Location path="/account" handler={AccountScreenMobile}/>
                            <Location path="/performance" handler={PerformanceScreenMobile}/>
                            <Location path="/journey" handler={JourneyScreenMobile}/>
                            <Location path="/progress" handler={CommunityScreenMobile}/>
                            <Location path="/sessions" handler={SessionsScreenMobile}/>
                            <Location path="/sessions/:sessionId" handler={SessionScreenMobile}/>
                            <Location path="/dashboard(/*)" handler={DashboardScreenMobile}/>
                            <Location path="/home(/*)" handler={DashboardScreenMobile}/>
                            <Location path="/profile" handler={ProfileScreenMobile}/>
                            <Location path="/profile/:profileId" handler={ProfileScreenMobile}/>
                            <Location path="/community" handler={TeamScreenMobile}/>
                            <Location path="/team" handler={TeamScreenMobile}/>
                            <Location path="/waitlist" handler={WaitlistScreenMobile}/>
                            <Location path="/waitlist/check" handler={PositionScreenMobile}/>
                            <Location path="/waitlist/share" handler={ShareScreenMobile}/>
                            <Location path="/waitlist/bump" handler={BumpScreenMobile}/>
                            <Location path="**" handler={SplashScreenMobile}/>
                        </Locations>
                    </If>
                </div>

            </Provider>
        )
    }
}

ReactDOM.render(
    React.createElement(App),
    document.getElementById('app')
);

