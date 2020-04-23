function cachingDecorator(func) {
  const cache = new Map();

  return function dec(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
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
