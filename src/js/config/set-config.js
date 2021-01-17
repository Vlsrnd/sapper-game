export const setConfig = (row, column, minesCount, config) => {
  config.size.row = row;
  config.size.column = column;
  config.minesCount = minesCount;
};