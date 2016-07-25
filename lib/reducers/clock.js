import Immutable from 'seamless-immutable';
import {
  CLOCK_TICK,
  CLOCK_ALARM,
  CLOCK_CHANGE_SOUND,
} from '../constants/clock';
import { getDefaultSoundPath } from '../utils/index.js';

const initialState = Immutable({
  currentTime: new Date,
  alarmTime: null,
  soundPath: getDefaultSoundPath(),
});

function clockReducer(state = initialState, action) {
  switch (action.type) {
    case CLOCK_TICK:
      return state.merge({
        currentTime: new Date,
      });
    case CLOCK_ALARM:
      /* TODO */
      break;
    case CLOCK_CHANGE_SOUND:
      return state.merge({
        soundPath: action.soundPath,
      });
    default:
      return state;
  }
}

export default clockReducer;
