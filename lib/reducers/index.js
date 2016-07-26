import { combineReducers } from 'redux';
import clockReducer from './clock';
import alarmReducer from './alarm.js';

export default combineReducers({
  clockReducer,
  alarmReducer,
});
