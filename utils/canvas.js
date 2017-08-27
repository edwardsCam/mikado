const scratchCanvas = document.getElementById('canvas_scratch');
const scratchContext = scratchCanvas.getContext('2d');

const bestCanvas = document.getElementById('canvas_best');
const bestContext = bestCanvas.getContext('2d');

const scratch = {
  getContext: () => scratchContext,
  getWidth: () => scratchCanvas.width,
  getHeight: () => scratchCanvas.height,
};

const best = {
  getContext: () => bestContext,
  getWidth: () => bestCanvas.width,
  getHeight: () => bestCanvas.height,
};

export { scratch, best };
