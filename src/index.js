require('./js/createMainPage');
const { nodeDOM } = require('./js/cachingDecorator');
const { translate } = require('./js/translate');
const { speechInput } = require('./js/speechInput');
const { getWords } = require('./js/getWords');
const { getAudio } = require('./js/getAudio');
const { getImage } = require('./js/getImage');

window.onload = () => {
  getWords(1);
  nodeDOM('.main').classList.remove('hidden');

  //   nodeDOM('.intro-btn').onclick = () => {
  //     nodeDOM('.main').classList.remove('hidden');
  //     nodeDOM('.intro').classList.add('hidden');
  //   };
  const nodes = nodeDOM('.main__node-words').children;
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
    target.classList.add('voice-active');
    if (!document.querySelector('.input-voice')) {
      nodeDOM('.summary_translate').innerHTML = '<input class="input-voice">';
    }
    nodeDOM('.input-voice').focus();
    nodeDOM('.input-voice').onclick = (event) => {
      const speechResult = event.target.value;
      console.log(speechResult);
    };
    for (let i = 0; i < nodes.length; i += 1) {
      nodes[i].classList.add('voice-active');
      nodes[i].classList.remove('word-node_active', 'node');
    }
    speechInput(nodes);
  });
};
