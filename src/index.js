import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers } from 'redux'

import names from './data/names.json';
import plants from './data/plants.json';

const initialState = {
  names: names,
  plants: plants
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
