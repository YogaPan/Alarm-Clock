import { connect } from 'react-redux';
import Player from '../components/player.js';
import { alarmChangeSoundPath } from '../actions/alarm.js';

const PlayerContainer = connect(
  (state) => {
    return {
      alarmSoundPath: state.alarmReducer.alarmSoundPath,
    };
  },
  (dispatch) => {
    return {
      alarmChangeSoundPath: (soundPath) => {
        return dispatch(alarmChangeSoundPath(soundPath));
      },
    };
  }
)(Player);

export default PlayerContainer;
