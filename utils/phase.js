import {
  updateScratchPhaseIdDisplay,
  updateScratchTemperatureDisplay,
  updateScratchPhasePercentageDisplay,
} from './display.js';
import { N, MIN_TEMP, MAX_TEMP, MAX_TRIES } from '../constants.js';

const phase = {
  id: -1,
  tries: -1,
  currState: null,
  bestState: null,
  beginNew: function() {
    this.tries = -1;
    this.id++;
    if (this.id >= N) {
      this.id = 0;
    }
    this.isFinished = false;
    updateScratchPhaseIdDisplay(this.id, N);
  },
  step: function() {
    this.tries++;
    this.isFinished = (this.tries > MAX_TRIES);
    this.temp = Math.interpolate(
      [0, MAX_TRIES],
      [MIN_TEMP, MAX_TEMP],
      this.tries
    ).toFixed(2);
    updateScratchPhasePercentageDisplay(this.tries, MAX_TRIES);
    updateScratchTemperatureDisplay(this.temp);
  },
  setCurr: function(obj) {
    this.currState = obj;
  },
  setBest: function(obj) {
    this.bestState = obj;
  },
};

phase.beginNew();

export default phase;
