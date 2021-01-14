export const createHeaderButton = (className) => {
  const btn = document.createElement('button');
  btn.classList.add('game-area__header-button', ...className);
  return btn;
};