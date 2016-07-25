import React, { Component, PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { toTimeString } from '../utils/index.js';

class Clock extends Component {
  componentDidMount() {
    const { clockTick } = this.props;

    setInterval(() => {
      clockTick();
    }, 1000);
  }

  get styles() {
    return StyleSheet.create({
      timeString: {
        fontSize: '100px',
        fontWeight: '300',
        fontFamily: 'Sans-Serif',
        color: '#fff',
        maringTop: '30px',
      },
      container: {
        width: '100%',
        height: '100px',
        textAlign: 'center',
      },
    });
  }

  render() {
    const { styles } = this;
    const { currentTime } = this.props;

    return (
      <div className={css(styles.container)}>
        <h1 className={css(styles.timeString)}>{toTimeString(currentTime)}</h1>
      </div>
    );
  }
}

Clock.propTypes = {
  currentTime: PropTypes.instanceOf(Date).isRequired,
  clockTick: PropTypes.func.isRequired,
};

export default Clock;
