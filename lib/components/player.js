import React, { Component, PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { remote } from 'electron';
import {
  getBeamedNoteImagePath,
} from '../utils/index.js';
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
        padding: '10px 20px',
        margin: '20px 20px',
        backgroundColor: '#333333',
        border: '3px solid #ccc',
        borderRadius: '20px',
        fontSize: '20px',
        fontWeight: '200',
        color: '#ccc',
        transitionDuration: '.5s',
        ':hover': {
          color: '#000',
          backgroundColor: '#ccc',
          cursor: 'pointer',
        },
        ':focus': {
          outline: 'none',
        },
      },
      path: {
        display: 'inline',
        margin: '10px 30px',
        fontSize: '30px',
        fontFamily: 'Sans-Serif',
        fontWeight: '100',
        verticalAlign: 'middle',
        color: '#ccc',
      },
      container: {
        textAlign: 'center',
        width: '100%',
      },
      icon: {
        height: '50px',
        width: '50px',
        verticalAlign: 'middle',
        filter: 'invert(70%)',
      },
    });
  }

  render() {
    const { styles, handlePlay, handleUpload } = this;
    const { alarmSoundPath } = this.props;
    const alarmSoundName = path.basename(alarmSoundPath);

    return (
      <div className={css(styles.container)}>
        <div className={css(styles.container)}>
          <object
            type="image/svg+xml"
            data={getBeamedNoteImagePath()}
            className={css(styles.icon)}
          ></object>
          <p className={css(styles.path)}>{alarmSoundName}</p>
        </div>
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
  isAlarmPlaying: PropTypes.bool.isRequired,
  alarmChangeSoundPath: PropTypes.func.isRequired,
  alarmToggle: PropTypes.func.isRequired,
};

export default Player;
