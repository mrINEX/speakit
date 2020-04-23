class Word {
  constructor({
    audio, image, transcription, word, textExample, textMeaning,
  }) {
    this.audio = audio;
    this.image = image;
    this.transcription = transcription;
    this.word = word;
    this.textExample = textExample;
    this.textMeaning = textMeaning;
  }

  getWordNode(isSpeech) {
    const div = document.createElement('div');
    if (isSpeech) {
      div.setAttribute('class', 'word-node');
    } else {
      div.setAttribute('class', 'word-node node');
    }
    div.setAttribute('data-audio', `${this.audio.replace(/files/, 'data')}`);
    div.setAttribute('data-image', `${this.image.replace(/files/, 'data')}`);
    div.setAttribute('data-word', `${this.word}`);
    const template = `
        <span class="word-node__sound event-none">
            <svg xmlns="http://www.w3.org/2000/svg" style="width: 40px;height: 40px;" viewBox="0 0 32 32"><path fill="currentColor" d="M15.788 13.007a3 3 0 110 5.985c.571 3.312 2.064 5.675 3.815 5.675 2.244 0 4.064-3.88 4.064-8.667 0-4.786-1.82-8.667-4.064-8.667-1.751 0-3.244 2.363-3.815 5.674zM19 26c-3.314 0-12-4.144-12-10S15.686 6 19 6s6 4.477 6 10-2.686 10-6 10z" fill-rule="evenodd"></path></svg>
        </span>
        <div class="word-node__content event-none">
            <h2>${this.word}</h2>
            <h3>${this.transcription}</h3>
        </div>
    `;
    div.innerHTML = template;
    const add = document.querySelector('.main__node-words');
    add.append(div);
  }
}

module.exports = {
  Word,
};
