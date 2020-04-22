
// const intro = document.createElement('div');
// intro.setAttribute('class', 'intro');
// intro.innerHTML = `
//     <h1 class="title">SpeakIt</h1>
//     <p class="intro-text">
//         Click on the words to hear them sound.<br>
//         Click on the button and speak the words into the microphone.
//     </p>
//     <a class="btn intro-btn">Start</a>
// `;
// document.querySelector('body').append(intro);

const header = document.createElement('header');
header.setAttribute('class', 'header');
header.innerHTML = `
    <div class="wrapper header__wrapper">
        <span> ... dots ... </span> <h2 class="level"> level 1</h2>
    </div>
`;
document.querySelector('body').append(header);

const main = document.createElement('main');
main.setAttribute('class', 'main hidden');
main.innerHTML = `
    <div class="wrapper main__wrapper">
        <div class="main__summary">
            <div class="wrapper_image" >
                <img class="word-image" src="./src/assets/img/blank.jpg">
            </div>
            <div class="summary_translate"></div>
        </div>
        <div class="main__node-words"></div>
        <div class="main__activity">
            <a class="btn restart">Restart</a>
            <a class="btn voice user-speach">Speak please</a>
            <a class="btn result">Results</a>
        </div>
    </div>
`;
document.querySelector('body').append(main);
