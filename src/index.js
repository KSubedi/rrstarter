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

const createStoreWithMiddleware = applyMiddleware(
	promise
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
