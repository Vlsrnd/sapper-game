import { shuffleArray } from "./shuffle-array";

export const generateMinefield = (config) => {
  const {size, minesCount} = config;
  const indexes = [];
  let arrLength = size.row * size.column;
  const flatArr = new Array(arrLength);
  while (arrLength > 0) {
    indexes.push(--arrLength);
  };
  const minesIndexes = shuffleArray(indexes);
  minesIndexes.length = minesCount;
  flatArr.fill(0);
  minesIndexes.forEach(i => flatArr[i] = 'm');
  const newMinefield = [];
  for (let i = 0; i < flatArr.length; i += size.column) {
    newMinefield.push(flatArr.slice(i, i + size.column))
  }
  for (let y = 0; y < size.row; y++){
    for (let x = 0; x < size.column; x++) {
      if (newMinefield[y][x] === 'm') continue;
      newMinefield[y][x] = [
        newMinefield[y - 1]?.[x - 1], newMinefield[y - 1]?.[x], newMinefield[y - 1]?.[x + 1],
        newMinefield[y][x - 1], newMinefield[y][x + 1],
        newMinefield[y + 1]?.[x - 1], newMinefield[y + 1]?.[x], newMinefield[y + 1]?.[x + 1]
      ].filter(e => e === 'm').length;
    }
  }
  config.minefield = newMinefield;
  return config;
};