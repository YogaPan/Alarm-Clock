import { connect } from 'react-redux';
import Timer from '../components/timer.js';
import { alarmSetTime } from '../actions/alarm.js';

const TimerContainer = connect(
  (state) => {
    return {
      /* TODO */
    };
  },
  (dispatch) => {
    return {
      alarmSetTime: (time) => {
        return dispatch(alarmSetTime(time));
      },
    };
  }
)(Timer);

export default TimerContainer;
