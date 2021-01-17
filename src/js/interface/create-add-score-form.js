export const createAddScoreForm = (config) => {
  const form = document.createElement('form');
  form.classList.add('add-score-form', 'invisible');
  form.innerHTML = '<div>CONGRATULATIONS!!!</div>'
    + `<div>your result: ${config.currentGame.timer.time}s</div>`;
  const input = document.createElement('input');
  input.setAttribute('placeholder', 'your name');
  const button = document.createElement('button');
  button.textContent = 'Done';
  form.append(input, button);
  return form;
};