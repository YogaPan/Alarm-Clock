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
