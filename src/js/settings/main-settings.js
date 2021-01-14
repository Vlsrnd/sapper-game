export const mainSettings = {
  size: {
    row: 16,
    column: 30,
  },
  colors: ['transparent', 'blue', 'green', 'red', 'darkblue', 'darkred', 'darkred', 'darkred', 'darkred'],
  minesCount: 99,
  minefield: null,
  cells: new Map(),
  gameArea: null,
  menu: null,
  winFunction: null,
  loseFunction: null,
  score: {
    top9x9: (new Array(10)).fill([]),
    top16x16: (new Array(10)).fill([]),
    top16x30: (new Array(10)).fill([]), 
  },
  gameAreaHeaderElements: {
    menu: null,
    timer: null,
    restart: null,
    pause: null,
    minesLeft: null,
  },
  currentGame: {
    isRun: false,
    isEnd: false,
    isPaused: true,
    timer: null,
    minesCounter: null,
    closedMinesCount: null,
  },
  winAnimationSettings: null,
};

