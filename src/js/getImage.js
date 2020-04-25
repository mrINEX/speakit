function getImage(image) {
  const url = `./src/assets/${image}`;
  return `<img class="word-image" src="${url}">`;
}

const image = {
  getCorrectImage: () => {
    const img = document.createElement('img');
    img.setAttribute('style', 'height: 100%;');
    img.setAttribute('src', './src/assets/img/yes.jpg');
    img.setAttribute('class', 'event-none');
    return img;
  },
  getNotCorrectImage: () => {
    const img = document.createElement('img');
    img.setAttribute('style', 'height: 100%;');
    img.setAttribute('src', './src/assets/img/no.jpg');
    img.setAttribute('class', 'event-none');
    const errors = document.querySelector('.errors-speech');
    errors.textContent = Number(errors.textContent) + 1;
    return img;
  },
};

module.exports = {
  getImage,
  image,
};
