export const setSettings = (row, column, minesCount, settings) => {
  settings.size.row = row;
  settings.size.column = column;
  settings.minesCount = minesCount;
};