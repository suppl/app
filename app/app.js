import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux'

import Router from 'react-router-component'
const Locations = Router.Locations;
const Location  = Router.Location;

import {IsDesktop, IsMobile, IsTablet, If} from './services/helper.service';

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
import AwardsScreen from './screens/awards.screen';
import CommunityScreen from './screens/community.screen';
import WaitlistScreen from './screens/waitlist.screen';
import PositionScreen from './screens/position.screen';
import ShareScreen from './screens/share.screen';
import BumpScreen from './screens/bump.screen';


import WaitlistScreenMobile from './screens-mobile/waitlist.screen.mobile';
import PositionScreenMobile from './screens-mobile/position.screen.mobile';
import BumpScreenMobile from './screens-mobile/bump.screen.mobile';
import ShareScreenMobile from './screens-mobile/share.screen.mobile';
import RegisterScreenMobile from './screens-mobile/register.screen.mobile';
import DashboardScreenMobile from './screens-mobile/dashboard.screen.mobile';
import SplashScreenMobile from './screens-mobile/splash.screen.mobile';

import PopupPassword from './components/popup-password/popup-password';
import PopupStandard from './components/popup-standard/popup-standard';
import Notification from './components/notification/notification';
import Player from './components/player/player.component';
import Loader from './components/loader/loader';
import Award from './components/award/award';

import HeaderMobile from './components/header/header.mobile';

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
});

export const store = createStore(reducer);

require('./app.scss');

class App extends React.Component {

    componentWillMount() {
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
                    <Loader/>
                    <PopupPassword/>
                    <PopupStandard/>
                    <Award/>


                    <If condition={IsDesktop()}>
                        <Locations>
                            <Location path="/" handler={SplashScreen}/>
                            <Location path="/register" handler={RegisterScreen}/>
                            <Location path="/register-password" handler={RegisterPasswordScreen}/>
                            <Location path="/register-job" handler={RegisterJobScreen}/>
                            <Location path="/register-style" handler={RegisterStyleScreen}/>
                            <Location path="/awards" handler={AwardsScreen}/>
                            <Location path="/progress" handler={ProgressScreen}/>
                            <Location path="/sessions" handler={SessionsScreen}/>
                            <Location path="/sessions/:sessionId" handler={SessionScreen}/>
                            <Location path="/dashboard(/*)" handler={DashboardScreen}/>
                            <Location path="/home(/*)" handler={DashboardScreen}/>
                            <Location path="/profile" handler={ProfileScreen}/>
                            <Location path="/community" handler={CommunityScreen}/>
                            <Location path="/waitlist" handler={WaitlistScreen}/>
                            <Location path="/waitlist/check" handler={PositionScreen}/>
                            <Location path="/waitlist/share" handler={ShareScreen}/>
                            <Location path="/waitlist/bump" handler={BumpScreen}/>
                        </Locations>
                    </If>



                    <If condition={IsTablet() || IsMobile()}>
                        <Locations>
                            <Location path="/" handler={SplashScreenMobile}/>
                            <Location path="/register" handler={RegisterScreenMobile}/>
                            <Location path="/register-password" handler={RegisterPasswordScreen}/>
                            <Location path="/register-job" handler={RegisterJobScreen}/>
                            <Location path="/register-style" handler={RegisterStyleScreen}/>
                            <Location path="/awards" handler={AwardsScreen}/>
                            <Location path="/progress" handler={ProgressScreen}/>
                            <Location path="/sessions" handler={SessionsScreen}/>
                            <Location path="/sessions/:sessionId" handler={SessionScreen}/>
                            <Location path="/dashboard(/*)" handler={DashboardScreenMobile}/>
                            <Location path="/home(/*)" handler={DashboardScreenMobile}/>
                            <Location path="/profile" handler={ProfileScreen}/>
                            <Location path="/community" handler={CommunityScreen}/>
                            <Location path="/waitlist" handler={WaitlistScreenMobile}/>
                            <Location path="/waitlist/check" handler={PositionScreenMobile}/>
                            <Location path="/waitlist/share" handler={ShareScreenMobile}/>
                            <Location path="/waitlist/bump" handler={BumpScreenMobile}/>
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

