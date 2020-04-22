function cachingDecorator(func) {
  const cache = new Map();

  return function dec(x) {
    if (cache.has(x)) {
      console.log('cach:', x);
      return cache.get(x);
    }
    console.log('not cach:', x);

    const result = func(x);

    cache.set(x, result);
    return result;
  };
}

function getNodeDOM(name) {
  return document.querySelector(name);
}

const nodeDOM = cachingDecorator(getNodeDOM);

module.exports = {
  nodeDOM,
};
