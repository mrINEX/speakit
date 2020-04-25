function getAudio(audio) {
  const url = `./src/assets/${audio}`;// `https://raw.githubusercontent.com/mrINEX/rslang-data/master/${audio}`;
  return new Audio(url);
}

const audio = {
  correct: () => new Audio('./src/assets/audio/correct.mp3'),
  error: () => new Audio('./src/assets/audio/error.mp3'),
};

module.exports = {
  getAudio,
  audio,
};
