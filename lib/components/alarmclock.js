import React from 'react';
import ClockContainer from '../containers/clock';
import PlayerContainer from '../containers/player';

export default function AlarmClock() {
  return (
    <div>
      <ClockContainer />
      <PlayerContainer />
    </div>
  );
}
