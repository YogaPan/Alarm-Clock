import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

export default class Clock extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      timeString: this.getTimeString(),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        timeString: this.getTimeString(),
      });
    }, 1000);
  }

  getTimeString() {
    const time = new Date;

    let hourString = time.getHours().toString();
    let minuteString = time.getMinutes().toString();
    let secondString = time.getSeconds().toString();

    if (hourString.length === 1) {
      hourString = `0${hourString}`;
    }
    if (minuteString.length === 1) {
      minuteString = `0${minuteString}`;
    }
    if (secondString.length === 1) {
      secondString = `0${secondString}`;
    }

    const timeString = `${hourString}:${minuteString}:${secondString}`;

    return timeString;
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
    return (
      <div className={css(styles.container)}>
        <h1 className={css(styles.timeString)}>{this.state.timeString}</h1>
      </div>
    );
  }
}
