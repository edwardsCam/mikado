import { scratch, best } from '../utils/canvas.js';

function draw(lines, contextId) {
  const pane = contextId === 0 ? scratch : best;
  const ctx = pane.getContext();
  const width = pane.getWidth();
  const height = pane.getHeight();
  ctx.clearRect(0, 0, width, height);
  ctx.beginPath();
  lines.forEach(l => {
    ctx.moveTo(l[0].x, l[0].y);
    ctx.lineTo(l[1].x, l[1].y);
    ctx.stroke();
  });
}

export { draw };
