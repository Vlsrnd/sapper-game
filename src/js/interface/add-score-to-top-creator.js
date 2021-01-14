export const addScoreToTopCreator = (settings) => (event) => {
  event.preventDefault();
  const name = event.target.querySelector('input').value;
  const {row, column} = settings.size;
  const top = settings.score[`top${row}x${column}`];
  top.pop();
  top.push([name, settings.currentGame.timer.time]);
  top.sort((a, b) => a[1] - b[1]);
  settings.menu.top10Structure = settings.menu.createTop10Element();
};