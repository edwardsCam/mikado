import { scratch } from '../utils/canvas.js';

const ctx = scratch.getContext();
const width = scratch.getWidth();
const height = scratch.getHeight();

const workingCanvas = () => ctx.getImageData(0, 0, width, height);

export { workingCanvas };
