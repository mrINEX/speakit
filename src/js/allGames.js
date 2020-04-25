const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function walkTree(node, dateStorage) {
  if (node == null) {
    return;
  }
  for (let i = 0; i < node.childNodes.length; i += 1) {
    if (node.classList.contains('wrapper_current')) {
      node.removeAttribute('class');
      node.setAttribute('class', 'wrapper_current-allgame');
      node.prepend(dateStorage);
    }
    if (node.classList.contains('title-results')) {
      node.removeAttribute('class');
      node.setAttribute('class', 'title-results-allgame');
    }
    if (node.classList.contains('current_statistics')) {
      node.removeAttribute('class');
      node.setAttribute('class', 'game-ten-words');
    }
    if (node.classList.contains('statistics__word')) {
      node.removeAttribute('class');
      node.setAttribute('class', 'all-game-word');
    }
    if (node.classList.contains('micro-word')) {
      node.classList.add('hidden');
    }
    walkTree(node.childNodes[i]);
  }
}

function storageGame(storage) {
  const date = new Date();
  const currentDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  const hour = `${date.getHours()}`;
  const minute = `${Number(date.getMinutes()) >= 10 ? date.getMinutes() : 0 + String(date.getMinutes())}`;
  const second = `${Number(date.getSeconds()) >= 10 ? date.getSeconds() : 0 + String(date.getSeconds())}`;
  const full = `${currentDate} ${hour}:${minute}:${second}`;
  const dateStorage = document.createElement('div');
  dateStorage.setAttribute('class', 'date-stapm-game');
  dateStorage.textContent = full;

  walkTree(storage, dateStorage);
  const all = document.querySelector('.all_statistics');
  all.append(storage);
  document.querySelector('.all-result-words').textContent = all.childElementCount;

  const games = window.localStorage.getItem('games');
  if (games) {
    const arr = JSON.parse(games);
    arr.push(storage.innerHTML);
    window.localStorage.setItem('games', JSON.stringify(arr));
  } else {
    window.localStorage.setItem('games', JSON.stringify([storage.innerHTML]));
  }
}

module.exports = {
  storageGame,
};
