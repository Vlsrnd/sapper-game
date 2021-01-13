export const mainSettings = {
  size: {
    row: 16,
    column: 30,
  },
  minesCount: 99,
  closedMinesCount: 99,
  minefield: null,
  cells: new Map(),
  gameArea: null,
  menu: null,
  winFunction: () => alert('you win'),
  loseFunction: () => alert('you lose'),
  score: {
    top9x9: (new Array(10)).fill([]),
    top16x16: (new Array(10)).fill([]),
    top16x30: (new Array(10)).fill([]), 
  },
  gameAreaHeaderElements: {
    menu: null,
    timer: null,
    pause: null,
    minesLeft: null,
  },
  currentGame: {
    isRun: false,
    isPaused: true,
    timer: null,
    minesCounter: null,
  },
};

