import resemble from 'resemblejs';

const format = mismatch => (100 - Number(mismatch)).toFixed(2);

const getSimilarityAsPercentage = (file1, file2) => (
  new Promise((resolve, reject) => {
    resemble(file1).compareTo(file2)
      .scaleToSameSize()
      .ignoreColors()
      .onComplete(data => resolve(
        format(data.misMatchPercentage)
      ));
  })
);

export { getSimilarityAsPercentage };
