import Immutable from 'seamless-immutable';
import {
  CLOCK_TICK,
  CLOCK_ALARM,
  CLOCK_CHANGE_SOUND,
} from '../constants/clock';

const initialState = Immutable({
  currentTime: new Date,
  alarmTime: null,
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
      /* TODO */
      break;
    default:
      return state;
  }
}

export default clockReducer;
