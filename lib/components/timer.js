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
    const time = timeNode.value;

    console.log(time);
    console.log(typeof time);
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
  // soundPath: PropTypes.string.isRequired,
};

export default Timer;
