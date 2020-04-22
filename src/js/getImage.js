function getImage(image) {
  const url = `https://raw.githubusercontent.com/mrINEX/rslang-data/master/${image}`;
  return `<img class="word-image" src="${url}">`;
}

module.exports = {
  getImage,
};
