import Immutable from 'seamless-immutable';
import {
  ALARM_CHANGE_SOUND_PATH,
  ALARM_SET_TIME,
  ALARM_TOGGLE,
} from '../constants/alarm.js';
import { getDefaultSoundPath } from '../utils/index.js';


const initialState = Immutable({
  alarmTime: null,
  alarmSoundPath: getDefaultSoundPath(),
  isAlarmPlaying: false,
});

function alarmReducer(state = initialState, action) {
  switch (action.type) {
    case ALARM_CHANGE_SOUND_PATH:
      return state.merge({
        alarmSoundPath: action.soundPath,
      });
    case ALARM_SET_TIME:
      return state.merge({
        alarmTime: action.time,
      });
    case ALARM_TOGGLE:
      return state.merge({
        isAlarmPlaying: !state.isAlarmPlaying,
      });
    default:
      return state;
  }
}

export default alarmReducer;
