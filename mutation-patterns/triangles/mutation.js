import clone from 'lodash/clone';
import phase from '../../utils/phase.js';
import triangle from '../../shapes/triangle.js';

function mutate(state) {
  phase.step();
  const newState = clone(state);
  newState[phase.id] = mutateTriangle(newState[phase.id]);
  return newState;
}

function mutateTriangle(t) {
  if (phase.isFinished) {
    phase.beginNew();
    return phase.bestState;
  } else {
    phase.setCurr(t);
    return triangle(
      t[0].x + Math.randomInRange(-phase.temp, phase.temp),
      t[0].y + Math.randomInRange(-phase.temp, phase.temp),
      t[1].x + Math.randomInRange(-phase.temp, phase.temp),
      t[1].y + Math.randomInRange(-phase.temp, phase.temp),
      t[2].x + Math.randomInRange(-phase.temp, phase.temp),
      t[2].y + Math.randomInRange(-phase.temp, phase.temp),
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
