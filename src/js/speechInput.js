function speechInput(nodes) {
  window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
  const recognition = new window.SpeechRecognition();
  recognition.interimResults = false; // many results
  recognition.maxAlternatives = 10;
  const storageLanguage = localStorage.getItem('language');
  recognition.lang = storageLanguage;
  recognition.onresult = (event) => {
    const speechToText = event.results[0][0].transcript;
    document.querySelector('.input-voice').value = speechToText;
    console.log('from speech:', event);
    for (let i = 0; i < nodes.length; i += 1) {
      nodes[i].classList.remove('voice-active');
    }
    document.querySelector('.user-speach').classList.remove('voice-active');
    document.querySelector('.input-voice').click();
  };
  recognition.start();
}

module.exports = {
  speechInput,
};
