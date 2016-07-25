import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/index.js';
import AlarmClock from './components/alarmclock';

const middleware = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

const store = createStore(rootReducer, compose(
  applyMiddleware(middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

render(
  <Provider store={store}>
    <AlarmClock />
  </Provider>,
  document.getElementById('mount')
);
