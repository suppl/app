import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux'
// import {
//     BrowserRouter as Router,
//     Route,
//     Link
// } from 'react-router-dom'

import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import SubHeader from './components/sub-header/sub-header';

import actions from './reducers/actions';
import user from './reducers/user';

// console.log('reducers', reducers);

const reducer = combineReducers({
    actions,
    user
});

console.log('reducer', reducer);
const store = createStore(reducer);

require('./app.scss');

class App extends React.Component {
    render() {
        return (
            <div className="flex flex-max">
                <Header/>
                <div className="flex flex-row">
                    <Sidebar/>
                    <div className="flex flex-max">
                        <SubHeader/>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);