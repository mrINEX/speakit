
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
            <p class="level_1">1</p>
            <p class="level_2">2</p>
            <p class="level_3">3</p>
            <p class="level_4">4</p>
            <p class="level_5">5</p>
            <p class="level_6">6</p>
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
    <div class=" wrapper statistics__results">
        <div class="wrapper_current">
            <div class="title-results-current">
                <p>know: <strong class="know">0</strong></p>
                <p>pending: <strong class="pending">10</strong></p>
                <p>errors speech: <strong class="errors-speech">0</strong></p>
            </div>
            <div class="current_statistics">
            </div>
        </div>
        <div class="wrapper_all">
            <div class="title-results-all">
                all games: <strong class="all-result-words">0</strong>
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
