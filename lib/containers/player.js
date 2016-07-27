import { connect } from 'react-redux';
import Player from '../components/player.js';
import {
  alarmChangeSoundPath,
  alarmToggle,
} from '../actions/alarm.js';

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
      alarmToggle: () => {
        return dispatch(alarmToggle());
      },
    };
  }
)(Player);

export default PlayerContainer;
