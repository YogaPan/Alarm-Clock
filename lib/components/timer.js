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
        height: '150px',
        width: '100%',
        marginTop: '30px',
        textAlign: 'center',
      },
      input: {
        padding: '10px 10px',
        maring: '',
        backgroundColor: '#333',
        border: '2px solid #eee',
        borderRadius: '10px',
        fontSize: '20px',
        fontWeight: '200',
        color: '#eee',
        ':focus': {
          outline: 'none',
        },
      },
      button: {
        padding: '10px 20px',
        margin: '20px 20px',
        backgroundColor: '#333333',
        border: '3px solid #eee',
        borderRadius: '20px',
        fontSize: '20px',
        fontWeight: '200',
        color: '#eee',
        transitionDuration: '.5s',
        ':hover': {
          color: '#000',
          backgroundColor: '#eee',
          cursor: 'pointer',
        },
        ':focus': {
          outline: 'none',
        },
      },
      info: {
        fontSize: '40px',
        fontFamily: 'sans-serif',
        fontWeight: '100',
        color: '#eee',
      },
    });
  }

  render() {
    const { styles } = this;

    return (
      <div className={css(styles.container)}>
        <form onSubmit={this.handleSubmit}>
          <p className={css(styles.info)}>Set your alarm time</p>
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
