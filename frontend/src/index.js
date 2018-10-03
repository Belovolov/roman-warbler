import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import rootReducers from './reducers'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {getUserFromStore} from './actions'


let state={user: null, messages: [], authMessage: '', isMsgLoading: false}
const user = getUserFromStore()

if (user) state={user}

const middleware = [thunk]

if (process.env.NODE_ENV!=='production') {
    middleware.push(createLogger())
}

const store = createStore(rootReducers,state,applyMiddleware(...middleware))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
