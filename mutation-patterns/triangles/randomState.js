import times from 'lodash/times';
import { scratch } from '../../utils/canvas.js';
import { N } from '../../constants.js';
import triangle from '../../shapes/triangle.js';

const width = scratch.getWidth();
const height = scratch.getHeight();

const randomState = () => times(N, randomTriangle);

const randomTriangle = () => triangle(
  Math.randomInRange(0, width),
  Math.randomInRange(0, height),
  Math.randomInRange(0, width),
  Math.randomInRange(0, height),
  Math.randomInRange(0, width),
  Math.randomInRange(0, height),
);

export default randomState;
