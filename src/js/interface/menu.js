export class Menu {
  constructor(settings){
    const menu = document.createElement('div');
    menu.classList.add('menu');
    
    this.settings = settings;
    this.btn = {
      newGame: this.createBtn('new game'),
      newGame9x9: this.createBtn('9x9'),
      newGame16x16: this.createBtn('16x16'),
      newGame16x30: this.createBtn('16x30'),
      top10: this.createBtn('top 10 result'),
      back: this.createBtn('back'),
      backToGame: this.createBtn('back to game'),
    };
    this.btn.newGame.onclick = () => this.switchMenu('newGame');
    this.btn.top10.onclick = () => this.switchMenu('top10');
    this.btn.back.onclick = () => this.switchMenu('main');

    this.top10Structure = this.createTop10Element();
    this.structure = {
      main: [this.btn.newGame, this.btn.top10],
      newGame: [this.btn.newGame9x9, this.btn.newGame16x16, this.btn.newGame16x30, this.btn.back],
      top10: [this.top10Structure, this.btn.back],
    };
    
    this.mainElement = menu;
    this.switchMenu('main');
  }
  createBtn = (text) => {
    const newBtn = document.createElement('button');
    newBtn.classList.add('menu__btn');
    newBtn.textContent = text;
    return newBtn
  }
  createTop10Element = () => {
    const topElement = document.createElement('div');
    topElement.classList.add('menu-top');
    const createList = (name, arr) => {
      return (`<div class='list'><p>${name}</p>`
      + '<ul>'
      + arr.map(e => `<li><span>${e[0] || '---'}</span><span>${e[1] || '---'}</span></li>`).join('')
      + '</ul></div>')
    };
    const html = `<div class='table'>`
      + createList('9x9', this.settings.score.top9x9)
      + createList('16x16', this.settings.score.top16x16)
      + createList('16x30', this.settings.score.top16x30)
      + `</div>`;
    topElement.innerHTML = html;
    return topElement;
  }
  switchMenu = (position) => {
    this.mainElement.innerHTML = '';
    this.structure[position].forEach(button => this.mainElement.append(button));
    if (this.settings.currentGame.isRun) this.mainElement.append(this.btn.backToGame);
  }
}