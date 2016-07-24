import React, { Component } from 'react';
import { render } from 'react-dom';
import { remote } from 'electron';
import path from 'path';

const { app, dialog } = remote;

class Clock extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      timeString: this.getTimeString()
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        timeString: this.getTimeString()
      });
    }, 1000);
  }

  render() {
    return (
      <h1>{this.state.timeString}</h1>
    );
  }

  getTimeString() {
    const time = new Date;
    let timeString;

    let hourString = time.getHours().toString();
    let minuteString = time.getMinutes().toString();
    let secondString = time.getSeconds().toString();

    if (hourString.length === 1)
      hourString = '0' + hourString;
    if (minuteString.length === 1)
      minuteString = '0' + minuteString;
    if (secondString === 1)
      secondString = '0' + secondString;

    timeString = `${hourString}:${minuteString}:${secondString}`;

    return timeString;
  }
}

class Player extends Component {
  constructor(...props) {
    super(...props);

    const ringPath = path.join(app.getAppPath(), 'app/assets/kirikiri.mp3');
    this.ring = new Audio(ringPath);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePlay}>Play</button>
        <button onClick={this.handleUpload}>Upload</button>
      </div>
    );
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
        'openFile'
      ],
      filters: [
        { name: 'audio', extensions: [ 'mp3', 'wav' ] }
      ]
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
}

class App extends Component {
  constructor(...props) {
    super(...props);
  }

  render() {
    return (
      <div>
        <Clock />
        <Player />
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('mount')
);
