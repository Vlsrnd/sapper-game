export const findSlowestInTop = (settings) => {
  const {row, column} = settings.size;
  const top = settings.isWideResolution ?
    settings.score[`top${row}x${column}`]
    : settings.score[`top${column}x${row}`];
  return top[top.length - 1];
};