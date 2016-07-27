import path from 'path';
import { remote } from 'electron';

const { app } = remote;

export function toTimeString(time) {
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

export function getDefaultSoundPath() {
  const defaultSound = '甲土豆.mp3';

  return path.join(app.getAppPath(), 'assets/', defaultSound);
}

export function getBeamedNoteImagePath() {
  const beamedNoteImage = 'beamed-note.svg';

  return path.join(app.getAppPath(), 'assets/', beamedNoteImage);
}

export function getFolderMusicImagePath() {
  const folderMusicImage = 'folder-music.svg';

  return path.join(app.getAppPath(), 'assets/', folderMusicImage);
}

export function getBellImagePath() {
  const bellImage = 'bell.svg';

  return path.join(app.getAppPath(), 'assets/', bellImage);
}

export function getStopWatchImagePath() {
  const stopWatchImage = 'stopwatch.svg';

  return path.join(app.getAppPath(), 'assets/', stopWatchImage);
}

export function getControllPlayImagePath() {
  const controlPlayImage = 'controller-play.svg';

  return path.join(app.getAppPath(), 'assets/', controlPlayImage);
}

export function getControlPausImagePath() {
  const controlPausImage = 'controller-paus.svg';

  return path.join(app.getAppPath(), 'assets/', controlPausImage);
}

export function getCircleWithCrossImagePath() {
  const circleWithCrossimage = 'circle-with-cross.svg';

  return path.join(app.getAppPath(), 'assets/', circleWithCrossimage);
}
