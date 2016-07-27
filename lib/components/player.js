import React, { Component, PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { remote } from 'electron';
import path from 'path';

const { dialog } = remote;

class Player extends Component {
  constructor(...props) {
    super(...props);

    this.sound = new Audio(this.props.alarmSoundPath);

    this.handlePlay = this.handlePlay.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  componentDidMount() {
    window.addEventListener('ring', this.handlePlay);
  }

  handlePlay() {
    const { sound } = this;
    const { alarmToggle } = this.props;

    if (sound.paused) {
      sound.currentTime = 0;
      sound.loop = true;
      sound.play();
    } else {
      sound.pause();
    }

    alarmToggle();
  }

  handleUpload() {
    const { sound } = this;
    const { alarmChangeSoundPath } = this.props;

    dialog.showOpenDialog({
      properties: [
        'openFile',
      ],
      filters: [
        { name: 'sound', extensions: ['mp3', 'wav'] },
      ],
    }, (soundPaths) => {
      if (soundPaths) {
        const soundPath = soundPaths[0];

        alarmChangeSoundPath(soundPath);
        sound.src = soundPath;

        return this.handlePlay();
      }
    });
  }

  get styles() {
    return StyleSheet.create({
      button: {
        fontSize: '20px',
        fontWeight: '200',
        color: '#eee',
        backgroundColor: '#333333',
        padding: '10px 20px',
        margin: '20px 20px',
        border: '3px solid #eee',
        borderRadius: '20px',
        transitionDuration: '.5s',
        ':hover': {
          color: 'black',
          backgroundColor: '#eee',
        },
        ':focus': {
          outline: 'none',
        },
      },
      path: {
        color: '#ddd',
        fontSize: '30px',
        fontWeight: '400',
        fontFamily: 'Sans-Serif',
        margin: '10px 30px',
      },
      container: {
        textAlign: 'center',
        width: '100%',
        height: '100px',
      },
    });
  }

  render() {
    const { styles, handlePlay, handleUpload } = this;
    const { alarmSoundPath } = this.props;
    const alarmSoundName = path.basename(alarmSoundPath);

    return (
      <div className={css(styles.container)}>
        <h1 className={css(styles.path)}>{alarmSoundName}</h1>
        <button
          className={css(styles.button)}
          onClick={handlePlay}
        >Play</button>
        <button
          className={css(styles.button)}
          onClick={handleUpload}
        >Upload</button>
      </div>
    );
  }
}

Player.propTypes = {
  alarmSoundPath: PropTypes.string.isRequired,
  alarmIsPlaying: PropTypes.bool.isRequired,
  alarmChangeSoundPath: PropTypes.func.isRequired,
  alarmToggle: PropTypes.func.isRequired,
};

export default Player;
