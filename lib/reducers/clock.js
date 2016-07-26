import Immutable from 'seamless-immutable';
import { CLOCK_TICK } from '../constants/clock';
import { getDefaultSoundPath } from '../utils/index.js';

const initialState = Immutable({
  currentTime: new Date,
});

function clockReducer(state = initialState, action) {
  switch (action.type) {
    case CLOCK_TICK:
      return state.merge({
        currentTime: new Date,
      });
    default:
      return state;
  }
}

export default clockReducer;
