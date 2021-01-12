'use strict';
import '../css/style.css';
import '../index.html';
import { createGameArea } from './create-game-area';
import { createElements } from './create-elements';
import { generateMinefield } from './generate-mine-field';
import { mainSettings } from './main-settings';
import { Menu } from './interface/menu';

const root = document.getElementById('root');
//16*30(99) 16*16(40) 9*9(10)

const menu = new Menu(mainSettings);
menu.append(root)
window.menu = menu;





// generateMinefield(mainSettings);
// createElements(mainSettings);
// const gameArea = createGameArea(mainSettings);
// root.append(gameArea);

// gameArea.addEventListener('mousedown', (event) => {
  // event.preventDefault();
// });

// gameArea.addEventListener('mouseup', (event) => {
  // if (event.target.classList.contains('cell-element')){
    // mainSettings.cells.get(event.target).open();
  // }
// });