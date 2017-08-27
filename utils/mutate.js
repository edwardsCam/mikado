import clone from 'lodash/clone';
import phase from './phase.js';

function mutate(lines) {
  phase.step();
  const newLines = clone(lines);
  newLines[phase.id] = mutateLine(newLines[phase.id]);
  return newLines;
}

function mutateLine(l) {
  if (phase.isFinished) {
    phase.beginNew();
    return phase.bestLine;
  } else {
    phase.currLine = l;
    return {
      x1: l.x1 + Math.randomInRange(-phase.temp, phase.temp),
      y1: l.y1 + Math.randomInRange(-phase.temp, phase.temp),
      x2: l.x2 + Math.randomInRange(-phase.temp, phase.temp),
      y2: l.y2 + Math.randomInRange(-phase.temp, phase.temp),
    };
  }
}

function phaseFoundNewBest() {
  phase.bestLine = phase.currLine;
}

export { mutate, phaseFoundNewBest };
