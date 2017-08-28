import times from 'lodash/times';
import { scratch } from '../../utils/canvas.js';
import line from '../../utils/line.js';
import { N } from '../../constants.js';

const width = scratch.getWidth();
const height = scratch.getHeight();

const randomState = () => times(N, randomLine);

const randomLine = () => line(
  Math.randomInRange(0, width),
  Math.randomInRange(0, height),
  Math.randomInRange(0, width),
  Math.randomInRange(0, height),
);

export default randomState;
