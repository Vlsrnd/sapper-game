export const shuffleArray = (arr) => {
  const putToCache = (elem, cache) => {
    if (~cache.indexOf(elem)) return;
    const i = Math.floor(Math.random() * (cache.length + 1));
    cache.splice(i, 0, elem);
  };
  const randomCompare = () => {
    const cache = [];
    return (a, b) => {
      putToCache(a, cache);
      putToCache(b, cache);
      return cache.indexOf(b) - cache.indexOf(a);
    }
  };
  return arr.sort(randomCompare());
};