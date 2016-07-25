import {
  CLOCK_TICK,
  CLOCK_ALARM,
  CLOCK_CHANGE_SOUND,
} from '../constants/clock.js';

export function clockTick() {
  return {
    type: CLOCK_TICK,
  };
}

export function clockAlarm() {
  return {
    type: CLOCK_ALARM,
  };
}

export function clockChangeSound(soundPath) {
  return {
    type: CLOCK_CHANGE_SOUND,
    soundPath,
  };
}
