import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/index.js';
import { CLOCK_TICK } from './constants/clock.js';
import App from './app';

const middleware = (store) => (next) => (action) => {
  if (action.type !== CLOCK_TICK) {
    console.log(action);
  }
  next(action);
};

const store = createStore(rootReducer, compose(
  applyMiddleware(middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('mount')
);
