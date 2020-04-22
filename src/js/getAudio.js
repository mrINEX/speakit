function getAudio(audio) {
  const url = `https://raw.githubusercontent.com/mrINEX/rslang-data/master/${audio}`;
  return new Audio(url);
}

// function getActivitySong() {
//   return new Audio('./src/assets/audio/please-say.mp3');
// }

module.exports = {
  getAudio,
};
