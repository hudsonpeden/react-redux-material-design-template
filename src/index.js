import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import './style/index.css';
import App from './components/App';
import Dash from './components/sub/dash';
import Sub1 from './components/sub/sub1';

import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <div>
            <App/>    
        </div>
    </Provider>
    , document.getElementById('root'));
    
registerServiceWorker();
