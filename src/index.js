import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import registerServiceWorker from './registerServiceWorker';

import './style/index.css';
import App from './components/App';

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
