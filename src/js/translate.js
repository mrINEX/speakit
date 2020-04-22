const API_KEY = 'trnsl.1.1.20191212T163559Z.5976e236f00df928.df3aab73e789795377c7f6b4f57195e585fb0e53';
const URL_API = 'https://translate.yandex.net/';

function translate(text) {
  const url = `${URL_API}api/v1.5/tr.json/translate?lang=ru&key=${API_KEY}&text=${text}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      document.querySelector('.summary_translate').textContent = data.text;
    });
}

module.exports = {
  translate,
};
