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
    alarmTime.setSeconds(0);

    alarmSetTime(alarmTime);
  }

  get styles() {
    return StyleSheet.create({
      container: {
        height: '200px',
        width: '100%',
        marginTop: '30px',
        textAlign: 'center',
      },
      input: {
        padding: '10px 10px',
        maring: '',
        backgroundColor: '#333333',
        border: '3px solid #333333',
        borderRadius: '10px',
        fontSize: '20px',
        fontWeight: '200',
        color: '#eee',
      },
      button: {
        padding: '10px 20px',
        margin: '10px 10px',
        backgroundColor: '#333333',
        border: '3px solid #eee',
        borderRadius: '10px',
        fontSize: '20px',
        fontWeight: '200',
        color: '#eee',
      },
      info: {
        fontSize: '40px',
        fontFamily: 'sans-serif',
        color: '#eee',
      },
    });
  }

  render() {
    const { styles } = this;

    return (
      <div className={css(styles.container)}>
        <form onSubmit={this.handleSubmit}>
          <h1 className={css(styles.info)}>Set your alarm time</h1>
          <input className={css(styles.input)} type="time" ref="time" />
          <button className={css(styles.button)} type="submit">Set Alarm Time</button>
        </form>
      </div>
    );
  }
}

Timer.propTypes = {
  alarmSetTime: PropTypes.func.isRequired,
};

export default Timer;
