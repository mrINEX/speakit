require('./js/createMainPage');
const { nodeDOM } = require('./js/cachingDecorator');
const { translate } = require('./js/translate');
const { speechInput } = require('./js/speechInput');
const { getWords } = require('./js/getWords');
const { getAudio, audio } = require('./js/getAudio');
const { getImage, image } = require('./js/getImage');

window.onload = () => {
  getWords(0);
  nodeDOM('.main').classList.remove('hidden');

  //   nodeDOM('.intro-btn').onclick = () => {
  //     nodeDOM('.main').classList.remove('hidden');
  //     nodeDOM('.intro').classList.add('hidden');
  //   };

  nodeDOM('.level_range').addEventListener('change', ({ target }) => {
    nodeDOM('.level_chapter').textContent = `level ${Number(target.value) + 1}`;
    nodeDOM('.wrapper_image').innerHTML = '<img class="word-image" src="./src/assets/img/blank.jpg">';
    nodeDOM('.main__node-words').innerHTML = '';
    getWords(target.value, !!document.querySelector('.input-voice'));
    if (!document.querySelector('.input-voice')) {
      nodeDOM('.summary_translate').innerHTML = '';
    }
  });

  nodeDOM('.main__node-words').addEventListener('click', ({ target }) => {
    if (target.classList.contains('node')) {
      const active = document.querySelector('.word-node_active');
      if (active) {
        active.classList.remove('word-node_active');
      }
      target.classList.add('word-node_active');

      getAudio(target.getAttribute('data-audio')).play();
      nodeDOM('.wrapper_image').innerHTML = getImage(target.getAttribute('data-image'));
      translate(target.getAttribute('data-word'));
    }
  });

  nodeDOM('.user-speach').addEventListener('click', ({ target }) => {
    const nodeWords = document.querySelectorAll('.word-node');
    nodeDOM('.user-speach').textContent = 'click to continue';

    target.classList.add('button-continue');
    if (!document.querySelector('.input-voice')) {
      nodeDOM('.summary_translate').innerHTML = '<input class="input-voice">';
    }
    nodeDOM('.input-voice').focus();
    nodeDOM('.input-voice').onclick = (event) => {
      const isCorrect = [...nodeWords].filter((node) => node.getAttribute('data-word') === event.target.value);
      if (isCorrect.length) {
        // nodeDOM('.wrapper_image').innerHTML = getImage(isCorrect[0].getAttribute('data-image'));
        // getAudio(isCorrect[0].getAttribute('data-audio')).play();
        isCorrect[0].classList.add('correct-speech');
        audio.correct().play();
        nodeDOM('.statistics-image').append(image.getCorrectImage());
      } else {
        audio.error().play();
        nodeDOM('.statistics-image').append(image.getNotCorrectImage());
      }
      setTimeout(() => { nodeDOM('.input-voice').value = ''; }, 1500);
    };

    nodeWords.forEach((node) => {
      node.classList.add('voice-active');
      node.classList.remove('word-node_active', 'node');
    });
    speechInput(nodeWords);
  });
};
