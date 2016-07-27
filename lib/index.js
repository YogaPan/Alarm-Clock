import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/index.js';
import { CLOCK_TICK } from './constants/clock.js';
import { ALARM_SET_TIME } from './constants/alarm.js';
import { toHourMinuteString } from './utils/index.js';
import App from './app';

const ringEvent = new CustomEvent('ring');

const middleware = (store) => (next) => (action) => {
  if (action.type == CLOCK_TICK) {
    const alarmTime = store.getState().alarmReducer.alarmTime;
    const currentTime = store.getState().clockReducer.currentTime;
    const playing = store.getState().alarmReducer.playing;

    if (!alarmTime) {
      return next(action);
    }

    const alarmTimeString = toHourMinuteString(alarmTime);
    const currentTimeString = toHourMinuteString(currentTime);

    if (alarmTimeString === currentTimeString && !playing) {
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
