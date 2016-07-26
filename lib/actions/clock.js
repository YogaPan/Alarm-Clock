import { CLOCK_TICK } from '../constants/clock.js';

export function clockTick() {
  return {
    type: CLOCK_TICK,
  };
}
