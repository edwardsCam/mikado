import { scratch, best } from '../utils/canvas.js';

function drawAll(lines, contextId) {
  const pane = contextId === 0 ? scratch : best;
  const ctx = pane.getContext();
  const width = pane.getWidth();
  const height = pane.getHeight();
  ctx.clearRect(0, 0, width, height);
  ctx.beginPath();
  lines.forEach(l => {
    ctx.moveTo(l.x1, l.y1);
    ctx.lineTo(l.x2, l.y2);
    ctx.stroke();
  });
}

export { drawAll };
