import { scratch, best } from '../utils/canvas.js';

function reset(contextId) {
  const pane = contextId === 0 ? scratch : best;
  const width = pane.getWidth();
  const height = pane.getHeight();
  const ctx = pane.getContext();
  ctx.clearRect(0, 0, width, height);
  ctx.beginPath();
  return ctx;
}

function drawLines(lines, contextId) {
  const ctx = reset(contextId);
  lines.forEach(l => {
    ctx.moveTo(l[0].x, l[0].y);
    ctx.lineTo(l[1].x, l[1].y);
    ctx.stroke();
  });
}

function draw(state, contextId, mode) {
  switch (mode) {
    case 'lines':
      drawLines(state, contextId);
      break;
  }
}

export { draw };
