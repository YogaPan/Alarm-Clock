import React, { Component, PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Timer extends Component {
  constructor(...props) {
    super(...props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const timeNode = this.refs.time;
    const timeString = timeNode.value;

    if (timeString.length === 0) {
      return;
    }

    const { alarmSetTime } = this.props;

    const alarmTime = new Date;
    const [hour, minute] = timeString.split(':');

    alarmTime.setHours(hour);
    alarmTime.setMinutes(minute);

    alarmSetTime(alarmTime);
  }

  get styles() {
    return StyleSheet.create({
      input: {

      },
      container: {

      },
    });
  }

  render() {
    const { styles } = this;

    return (
      <div className={css(styles.container)}>
        <form onSubmit={this.handleSubmit}>
          <h1>Set your alarm time</h1>
          <input type="time" ref="time" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

Timer.propTypes = {
  alarmSetTime: PropTypes.func.isRequired,
};

export default Timer;
