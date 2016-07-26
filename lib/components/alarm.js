import React, { Component, PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PlayerContainer from '../containers/player.js';
import TimerContainer from '../containers/timer.js';

class Alarm extends Component {
  get styles() {
    return StyleSheet.create({

    });
  }

  render() {
    return (
      <div>
        <PlayerContainer />
        <TimerContainer />
      </div>
    );
  }
}

Alarm.propTypes = {
  // soundPath: PropTypes.string.isRequired,
};

export default Alarm;
