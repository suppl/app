import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux'

import Router from 'react-router-component'
const Locations = Router.Locations;
const Location = Router.Location;

import DashboardScreen from './screens/dashboard.screen';
import PlayerScreen from './screens/player.screen';
import SplashScreen from './screens/splash.screen';
import ProfileScreen from './screens/profile.screen';
import RegisterScreen from './screens/register.screen';
import RegisterPasswordScreen from './screens/register-password.screen';
import RegisterJobScreen from './screens/register-job.screen';
import RegisterStyleScreen from './screens/register-style.screen';

import Notification from './components/notification/notification';
import Session from './components/session/session.component';
import Loader from './components/loader/loader';

import userReducer from './reducers/user.reducer';
import requestReducer from './reducers/request.reducer';
import notificationReducer from './reducers/notification.reducer';
import settingsReducer from './reducers/settings.reducer';


const reducer = combineReducers({
    user: userReducer,
    request: requestReducer,
    notification: notificationReducer,
    settings: settingsReducer,
});

export const store = createStore(reducer);

require('./app.scss');

ReactDOM.render(
    <Provider store={store}>
        <div className="flex flex-max">
            <Notification/>
            <Session/>
            <Loader/>
            <Locations hash>
                <Location path="/" handler={SplashScreen}/>
                <Location path="/register" handler={RegisterScreen}/>
                <Location path="/register-password" handler={RegisterPasswordScreen}/>
                <Location path="/register-job" handler={RegisterJobScreen}/>
                <Location path="/register-style" handler={RegisterStyleScreen}/>
                <Location path="/dashboard" handler={DashboardScreen}/>
                <Location path="/player(/*)" handler={PlayerScreen}/>
                <Location path="/profile" handler={ProfileScreen}/>
            </Locations>
        </div>

    </Provider>,
    document.getElementById('app')
);