import times from 'lodash/times';
import { scratch } from '../utils/canvas.js';
import { N } from '../constants.js';

const width = scratch.getWidth();
const height = scratch.getHeight();

const randomState = () => times(N, () => ({
  x1: Math.randomInRange(0, width),
  y1: Math.randomInRange(0, height),
  x2: Math.randomInRange(0, width),
  y2: Math.randomInRange(0, height),
}));

export { randomState };
