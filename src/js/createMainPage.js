
const intro = document.createElement('div');
intro.setAttribute('class', 'intro');
intro.innerHTML = `
    <h1 class="title">SpeakIt</h1>
    <p class="intro-text">
        Click on the words to hear them sound.<br>
        Click on the button and speak the words into the microphone.
    </p>
    <a class="btn intro-btn">Start</a>
`;
document.querySelector('body').append(intro);

const header = document.createElement('header');
header.setAttribute('class', 'header');
header.innerHTML = `
    <div class="wrapper header__wrapper">
        <div class="header__level">
            <input class="level_range" type="range" value="0" min="0" max="5" step="1" list="tickmarks">
            <datalist id="tickmarks">
                <option value="0">
                <option value="1">
                <option value="2">
                <option value="3">
                <option value="4">
                <option value="5">
            </datalist>
        </div>
        <h2 class="level_chapter"> level 1</h2>
    </div>
`;
document.querySelector('body').append(header);

const main = document.createElement('main');
main.setAttribute('class', 'main hidden');
main.innerHTML = `
    <div class="wrapper main__wrapper">
        <div class="wrapper statistics-image"></div>
        <div class="main__summary">
            <div class="wrapper_image" >
                <img class="word-image" src="./src/assets/img/blank.jpg">
            </div>
            <div class="summary_translate"></div>
        </div>
        <div class="main__node-words"></div>
        <div class="main__activity">
            <a class="btn restart">Restart</a>
            <a class="btn voice user-speach">start speak</a>
            <a class="btn result">Results</a>
        </div>
    </div>
`;
document.querySelector('body').append(main);

const statistics = document.createElement('div');
statistics.setAttribute('class', 'statistics hidden');
statistics.innerHTML = `
    <div class="statistics__results">
        <div class="wrapper_current">
            <div class="title-results">
                know: <strong class="know">0</strong>
                pending: <strong class="pending">10</strong>
                errors speech: <strong class="errors-speech">0</strong>
            </div>
            <div class="current_statistics">
            </div>
        </div>
        <div class="wrapper_all">
            <div class="title-results">
                all words: <strong class="all-result-words">10</strong>
            </div>
            <div class="all_statistics">
            </div>
        </div>
    </div>
    <div>
        <a class="btn return">return</a>
        <a class="btn new">new</a>
    </div>
`;
document.querySelector('body').append(statistics);
