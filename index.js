import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogicMiddleware } from 'redux-logic';
import {
  fetchPollsLogic0,
  fetchPollsLogic1,
  fetchPollsLogic2,
  fetchPollsLogic3,
  fetchPollsLogic4,
  fetchPollsLogic5,
  fetchPollsLogic6,
  fetchPollsLogic7
} from './logic'

import App from './App'
import { counter } from './reducers'

const logicMiddleware = createLogicMiddleware([
  fetchPollsLogic0,
  fetchPollsLogic1,
  fetchPollsLogic2,
  fetchPollsLogic3,
  fetchPollsLogic4,
  fetchPollsLogic5,
  fetchPollsLogic6,
  fetchPollsLogic7
]);

// Store
const store = createStore(counter, applyMiddleware(
  logicMiddleware
))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
