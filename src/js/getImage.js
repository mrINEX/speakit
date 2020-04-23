function getImage(image) {
  const url = `https://raw.githubusercontent.com/mrINEX/rslang-data/master/${image}`;
  return `<img class="word-image" src="${url}">`;
}

const image = {
  getCorrectImage: () => {
    const img = document.createElement('img');
    img.setAttribute('style', 'height: 100%;');
    img.setAttribute('src', './src/assets/img/yes.jpg');
    return img;
  },
  getNotCorrectImage: () => {
    const img = document.createElement('img');
    img.setAttribute('style', 'height: 100%;');
    img.setAttribute('src', './src/assets/img/no.jpg');
    return img;
  },
};

module.exports = {
  getImage,
  image,
};
