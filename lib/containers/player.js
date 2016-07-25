import { connect } from 'react-redux';
import Player from '../components/player.js';
import { clockChangeSound } from '../actions/clock.js';

const PlayerContainer = connect(
  (state) => {
    return {
      soundPath: state.clockReducer.soundPath,
    };
  },
  (dispatch) => {
    return {
      clockChangeSound: (soundPath) => {
        return dispatch(clockChangeSound(soundPath));
      },
    };
  }
)(Player);

export default PlayerContainer;
