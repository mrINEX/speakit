require('./js/createMainPage');
const { nodeDOM } = require('./js/cachingDecorator');
const { translate } = require('./js/translate');
const { speechInput } = require('./js/speechInput');
const { getWords } = require('./js/getWords');
const { getAudio, audio } = require('./js/getAudio');
const { getImage, image } = require('./js/getImage');
const { storageGame } = require('./js/allGames');

window.onload = () => {
  getWords(0);

  const games = window.localStorage.getItem('games');
  if (games) {
    const arr = JSON.parse(games);
    document.querySelector('.all-result-words').textContent = arr.length;
    const allResult = document.querySelector('.all_statistics');
    arr.forEach((node) => {
      const wrapper = document.createElement('div');
      wrapper.setAttribute('class', 'wrapper_current-allgame');
      wrapper.innerHTML = node;
      allResult.append(wrapper);
    });
  }

  nodeDOM('.intro-btn').onclick = () => {
    nodeDOM('.main').classList.remove('hidden');
    nodeDOM('.intro').classList.add('hidden');
  };

  nodeDOM('.level_range').addEventListener('change', ({ target }) => {
    storageGame(document.querySelector('.wrapper_current').cloneNode(true));
    nodeDOM('.level_chapter').textContent = `level ${Number(target.value) + 1}`;
    nodeDOM('.wrapper_image').innerHTML = '<img class="word-image" src="./src/assets/img/blank.jpg">';
    nodeDOM('.main__node-words').innerHTML = '';
    nodeDOM('.summary_translate').innerHTML = '';
    nodeDOM('.statistics-image').innerHTML = '';
    nodeDOM('.user-speach').classList.remove('button-continue');
    nodeDOM('.user-speach').textContent = 'start speak';
    nodeDOM('.current_statistics').innerHTML = '';
    nodeDOM('.know').textContent = 0;
    nodeDOM('.pending').textContent = 0;
    nodeDOM('.errors-speech').textContent = 0;
    getWords(target.value);
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

  nodeDOM('.current_statistics').addEventListener('click', ({ target }) => {
    if (target.classList.contains('statistics__word')) {
      getAudio(target.getAttribute('data-audio')).play();
    }
  });

  nodeDOM('.restart').addEventListener('click', () => {
    storageGame(document.querySelector('.wrapper_current').cloneNode(true));
    nodeDOM('.wrapper_image').innerHTML = '<img class="word-image" src="./src/assets/img/blank.jpg">';
    nodeDOM('.main__node-words').innerHTML = '';
    nodeDOM('.summary_translate').innerHTML = '';
    nodeDOM('.statistics-image').innerHTML = '';
    nodeDOM('.user-speach').classList.remove('button-continue');
    nodeDOM('.user-speach').textContent = 'start speak';
    nodeDOM('.current_statistics').innerHTML = '';
    nodeDOM('.know').textContent = 0;
    nodeDOM('.pending').textContent = 0;
    nodeDOM('.errors-speech').textContent = 0;
    getWords(/[0-9]/.exec(nodeDOM('.level_chapter').textContent)[0]);
  });

  nodeDOM('.new').addEventListener('click', () => {
    storageGame(document.querySelector('.wrapper_current').cloneNode(true));
    nodeDOM('.wrapper_image').innerHTML = '<img class="word-image" src="./src/assets/img/blank.jpg">';
    nodeDOM('.main__node-words').innerHTML = '';
    nodeDOM('.summary_translate').innerHTML = '';
    nodeDOM('.statistics-image').innerHTML = '';
    nodeDOM('.user-speach').classList.remove('button-continue');
    nodeDOM('.user-speach').textContent = 'start speak';
    nodeDOM('.main').classList.remove('hidden');
    nodeDOM('.statistics').classList.add('hidden');
    nodeDOM('.current_statistics').innerHTML = '';
    nodeDOM('.know').textContent = 0;
    nodeDOM('.pending').textContent = 0;
    nodeDOM('.errors-speech').textContent = 0;
    getWords(/[0-9]/.exec(nodeDOM('.level_chapter').textContent)[0]);
  });

  nodeDOM('.return').addEventListener('click', () => {
    nodeDOM('.main').classList.remove('hidden');
    nodeDOM('.statistics').classList.add('hidden');
  });

  nodeDOM('.result').addEventListener('click', () => {
    nodeDOM('.main').classList.add('hidden');
    nodeDOM('.statistics').classList.remove('hidden');
  });

  nodeDOM('.user-speach').addEventListener('click', ({ target }) => {
    const nodeWords = document.querySelectorAll('.word-node');
    nodeDOM('.user-speach').textContent = 'click to continue';
    const know = document.querySelector('.know');
    const pending = document.querySelector('.pending');

    target.classList.add('button-continue');
    if (!document.querySelector('.input-voice')) {
      nodeDOM('.summary_translate').innerHTML = '<input class="input-voice">';
    }
    const input = document.querySelector('.input-voice');
    input.focus();
    input.onclick = (event) => {
      const isCorrect = [...nodeWords].filter((node) => node.getAttribute('data-word') === event.target.value);
      if (isCorrect.length) {
        nodeDOM('.wrapper_image').innerHTML = getImage(isCorrect[0].getAttribute('data-image'));
        getAudio(isCorrect[0].getAttribute('data-audio')).play();
        isCorrect[0].classList.add('correct-speech');
        audio.correct().play();
        nodeDOM('.statistics-image').prepend(image.getCorrectImage());

        const current = [...document.querySelectorAll('[data-word-statistics]')];
        const nodeStatistics = current.filter((node) => node.getAttribute('data-word-statistics') === event.target.value);
        nodeStatistics[0].append(image.getCorrectImage());
        nodeStatistics[0].classList.add('correct-speech');
      } else {
        audio.error().play();
        image.error();
      }
      setTimeout(() => { input.value = ''; }, 500);

      const isEnd = [...nodeWords].filter((node) => node.classList.contains('correct-speech'));
      know.textContent = isEnd.length;
      pending.textContent = 10 - Number(isEnd.length);
      if (isEnd.length === 10) {
        nodeDOM('.main').classList.add('hidden');
        nodeDOM('.statistics').classList.remove('hidden');
      }
    };

    nodeWords.forEach((node) => {
      if (!node.classList.contains('correct-speech')) {
        node.classList.add('voice-active');
      }
      node.classList.remove('word-node_active', 'node');
    });
    speechInput(nodeWords);
  });
};
