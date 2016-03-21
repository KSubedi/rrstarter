// Expose jQuery and Bootstrap JS
require('expose?$!expose?jQuery!jquery');
require("bootstrap/dist/js/bootstrap.min.js");

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from "redux-promise";

import App from './components/app';
import reducers from './reducers';
import {Router, browserHistory} from 'react-router';
import routes from "./routes";

const createStoreWithMiddleware = applyMiddleware(
	promise
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container'));
