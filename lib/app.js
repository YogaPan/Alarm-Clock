import React from 'react';
import ClockContainer from './containers/clock';
import Alarm from './components/alarm';

export default function AlarmClock() {
  return (
    <div>
      <ClockContainer />
      <Alarm />
    </div>
  );
}
