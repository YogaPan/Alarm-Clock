import { connect } from 'react-redux';
import Clock from '../components/clock.js';
import { clockTick } from '../actions/clock.js';

const ClockContainer = connect(
  (state) => {
    return {
      currentTime: state.clockReducer.currentTime,
    };
  },
  (dispatch) => {
    return {
      clockTick: () => {
        return dispatch(clockTick());
      },
    };
  }
)(Clock);

export default ClockContainer;
