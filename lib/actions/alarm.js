import {
  ALARM_SET_TIME,
  ALARM_CHANGE_SOUND_PATH,
} from '../constants/alarm.js';

export function alarmSetTime(time) {
  return {
    type: ALARM_SET_TIME,
    time,
  };
}

export function alarmChangeSoundPath(soundPath) {
  return {
    type: ALARM_CHANGE_SOUND_PATH,
    soundPath,
  };
}
