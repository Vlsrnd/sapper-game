export const createAddScoreForm = (settings) => {
  const form = document.createElement('form');
  form.classList.add('win-form', 'invisible');
  form.innerHTML = '<div>CONGRATULATIONS!!!</div>'
    + `<div>your result: ${settings.currentGame.timer.time}s</div>`
    + '<div>input your name:</div>';
  const input = document.createElement('input');
  const button = document.createElement('button');
  button.textContent = 'Done';
  form.append(input, button);
  return form;
};