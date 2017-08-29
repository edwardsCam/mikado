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

function drawTriangles(triangles, contextId) {
  const ctx = reset(contextId);
  triangles.forEach(t => {
    ctx.moveTo(t[0].x, t[0].y);
    ctx.lineTo(t[1].x, t[1].y);
    ctx.lineTo(t[2].x, t[2].y);
    ctx.lineTo(t[0].x, t[0].y);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.closePath();
    ctx.fill();
  });
}

function draw(state, contextId, mode) {
  switch (mode) {
    case 'lines':
      drawLines(state, contextId);
      break;
    case 'triangles':
      drawTriangles(state, contextId);
      break;
  }
}

export { draw };
