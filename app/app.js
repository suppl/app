import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux'

import Router from 'react-router-component'
const Locations = Router.Locations;
const Location = Router.Location;

import Dashboard from './screens/dashboard.screen';
import Player from './screens/player.screen';
import Splash from './screens/splash.screen';
import Profile from './screens/profile.screen';

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
                <Location path="/" handler={Splash}/>
                <Location path="/dashboard" handler={Dashboard}/>
                <Location path="/player(/*)" handler={Player}/>
                <Location path="/profile" handler={Profile}/>
            </Locations>
        </div>

    </Provider>,
    document.getElementById('app')
);