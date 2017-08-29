import clone from 'lodash/clone';
import line from '../../utils/line.js';
import phase from '../../utils/phase.js';

function mutate(state) {
  phase.step();
  const newLines = clone(state);
  newLines[phase.id] = mutateLine(newLines[phase.id]);
  return newLines;
}

function mutateLine(l) {
  if (phase.isFinished) {
    phase.beginNew();
    return phase.bestState;
  } else {
    phase.setCurr(l);
    return line(
      l[0].x + Math.randomInRange(-phase.temp, phase.temp),
      l[0].y + Math.randomInRange(-phase.temp, phase.temp),
      l[1].x + Math.randomInRange(-phase.temp, phase.temp),
      l[1].y + Math.randomInRange(-phase.temp, phase.temp)
    );
  }
}

function phaseFoundNewBest() {
  phase.setBest(phase.currState);
}

export {
  mutate,
  phaseFoundNewBest,
};
