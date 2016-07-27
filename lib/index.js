import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/index.js';
import { CLOCK_TICK } from './constants/clock.js';
import { ALARM_SET_TIME } from './constants/alarm.js';
import { toTimeString } from './utils/index.js';
import { ringEvent } from './events/index.js';
import App from './app';

const middleware = (store) => (next) => (action) => {
  if (action.type === CLOCK_TICK) {
    const alarmTime = store.getState().alarmReducer.alarmTime;
    const currentTime = store.getState().clockReducer.currentTime;
    const isAlarmPlaying = store.getState().alarmReducer.isAlarmPlaying;

    if (!alarmTime) {
      return next(action);
    }

    const alarmTimeString = toTimeString(alarmTime);
    const currentTimeString = toTimeString(currentTime);

    if (alarmTimeString === currentTimeString && !isAlarmPlaying) {
      window.dispatchEvent(ringEvent);
    }
  }

  return next(action);
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
