function speechInput(nodesWords) {
  window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
  const recognition = new window.SpeechRecognition();
  recognition.interimResults = true;
  recognition.maxAlternatives = 10;
  recognition.onend = () => {
    nodesWords.forEach((node) => {
      node.classList.remove('voice-active');
    });
    document.querySelector('.user-speach').classList.remove('voice-active');
    document.querySelector('.input-voice').click();
  };
  const storageLanguage = localStorage.getItem('language');
  recognition.lang = storageLanguage;
  recognition.onresult = (event) => {
    const speechToText = event.results[0][0].transcript;
    document.querySelector('.input-voice').value = speechToText.toLowerCase();
  };
  recognition.start();
}

module.exports = {
  speechInput,
};
