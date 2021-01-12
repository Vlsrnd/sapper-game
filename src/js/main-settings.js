export const mainSettings = {
  size: {
    row: 16,
    column: 30,
  },
  minesCount: 99,
  minefield: null,
  cellSize: {
    width: 20,
    height: 20,
  },
  cells: new Map(),
  gameArea: null,
  menu: null,
  score: {
    top9x9: (new Array(10)).fill([]),
    top16x16: (new Array(10)).fill([]),
    top16x30: (new Array(10)).fill([]),
  },
};

