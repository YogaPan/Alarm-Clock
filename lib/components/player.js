import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { remote } from 'electron';
import path from 'path';

const { app, dialog } = remote;

export default class Player extends Component {
  constructor(...props) {
    super(...props);

    const ringPath = path.join(app.getAppPath(), 'assets', 'kirikiri.mp3');
    this.ring = new Audio(ringPath);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handlePlay() {
    const ring = this.ring;

    if (ring.paused) {
      ring.currentTime = 0;
      ring.loop = true;
      ring.play();
    } else {
      ring.pause();
    }
  }

  handleUpload() {
    const ring = this.ring;

    dialog.showOpenDialog({
      properties: [
        'openFile',
      ],
      filters: [
        { name: 'audio', extensions: ['mp3', 'wav'] },
      ],
    }, (filenames) => {
      if (filenames) {
        const filename = filenames[0];
        ring.src = filename;

        if (ring.paused) {
          ring.currentTime = 0;
          ring.loop = true;
          ring.play();
        }
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
    });
  }

  render() {
    const { styles, handlePlay, handleUpload } = this;

    return (
      <div>
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
