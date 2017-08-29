import './utils/mathExtensions.js';
import { getSimilarityAsPercentage } from './utils/similarity.js';
import { workingCanvas } from './utils/toImg.js';
import { draw } from './utils/draw.js';
import {
  updateGenerationsDisplay,
  updateImprovementsDisplay,
  updateBestSimilarityDisplay,
  updateScratchSimilarityDisplay,
} from './utils/display.js';
import { mutate, phaseFoundNewBest } from './mutation-patterns/triangles/mutation.js';
import randomState from './mutation-patterns/triangles/randomState.js';
import { IMG_PATH } from './constants.js';

const drawScratch = () => draw(scratchState, 0, 'triangles');
const drawBest = () => draw(bestState, 1, 'triangles');

let scratchState = randomState();
let bestState = scratchState;
let bestFitness = 0;

let generations = 0;
let improvements = 0;

drawScratch();
drawBest();
updateGenerationsDisplay(0);
requestAnimationFrame(newGeneration);

setInterval(() => updateGenerationsDisplay(generations), 1500);

let isPaused = false;
const pauseBtn = document.getElementById('btn_pause');
pauseBtn.addEventListener('click', function togglePause() {
  isPaused = !isPaused;
  pauseBtn.innerHTML = isPaused ? 'Resume' : 'Pause';
});

function newGeneration() {
  if (isPaused) {
    requestAnimationFrame(newGeneration);
    return;
  }
  generations++;
  scratchState = mutate(bestState);
  drawScratch();

  getSimilarityAsPercentage(IMG_PATH, workingCanvas()).then(similarity => {
    if (similarity > bestFitness) {
      foundNewBest(similarity);
    }
    updateScratchSimilarityDisplay(similarity);
    requestAnimationFrame(newGeneration);
  });
}

function foundNewBest(similarity) {
  improvements++;
  bestState = scratchState;
  bestFitness = similarity;
  drawBest();
  phaseFoundNewBest();
  updateImprovementsDisplay(improvements);
  updateBestSimilarityDisplay(bestFitness);
}
