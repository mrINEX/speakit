const { Word } = require('./nodeCardWord');

function getWords(group) {
  const page = Math.floor(0 + Math.random() * (29 + 1 - 0));
  const url = `https://afternoon-falls-25894.herokuapp.com/words?group=${group}&page=${page}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < 10; i += 1) {
        new Word(data[i]).getWordNode();
      }
    });
}

module.exports = {
  getWords,
};
