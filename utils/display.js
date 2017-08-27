function updateImprovementsDisplay(i) {
  updateDisplay(
    'desc_improvements',
    `improvements: ${i}`
  );
}

function updateGenerationsDisplay(g) {
  updateDisplay(
    'desc_generations',
    `generations: ${g}`
  );
}

function updateBestSimilarityDisplay(s) {
  updateDisplay(
    'best_desc_similarity',
    `${s}% similar`
  );
}

function updateScratchSimilarityDisplay(s) {
  updateDisplay(
    'scratch_desc_similarity',
    `${s}% similar`
  );
}

function updateScratchPhaseIdDisplay(id, n) {
  updateDisplay(
    'scratch_desc_phasenum',
    `phase: ${id + 1} / ${n}`
  );
}

function updateScratchTemperatureDisplay(t) {
  updateDisplay(
    'scratch_desc_temp',
    `temperature: ${t}`
  );
}

function updateScratchPhasePercentageDisplay(tries, max) {
  const percentDone = (100 * tries / max).toFixed()
  updateDisplay(
    'scratch_desc_phase_percentage',
    `phase progress: ${percentDone}%`
  );
}

function updateDisplay(name, value) {
  document.getElementById(name).innerHTML = value;
}

export {
  updateImprovementsDisplay,
  updateGenerationsDisplay,
  updateBestSimilarityDisplay,
  updateScratchSimilarityDisplay,
  updateScratchPhaseIdDisplay,
  updateScratchTemperatureDisplay,
  updateScratchPhasePercentageDisplay,
};
