import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers } from 'redux'

import details from './data/details.json';
import offers from './data/offers.json';

function getOffers() {
  return fetch('https://raw.githubusercontent.com/alintulu/LilSebastian/master/output/offers3plants.json')
    .then(response => response.json())
    .then(data => {
      return data;
    });
}

const initialState = {
  details: details,
  offers: offers
}

const store = createStore(combineReducers({}), initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));
serviceWorker.register();
