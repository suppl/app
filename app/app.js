import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

import {BrowserRouter as Router, Route, browserHistory} from 'react-router-dom'

import Dashboard from './screens/dashboard.screen';
import Player from './screens/player.screen';
import Splash from './screens/splash.screen';

import user from './reducers/user.reducer';

const reducer = combineReducers({user});

const store = createStore(reducer, applyMiddleware(thunk));

require('./app.scss');

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <div className="flex flex-max">
                <Route exact path="/" component={Splash}/>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route path="/player" component={Player}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('app')
);