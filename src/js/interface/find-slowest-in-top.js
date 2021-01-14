export const findSlowestInTop = (settings) => {
  const {row, column} = settings.size;
  const top = settings.score[`top${row}x${column}`];
  return top[top.length - 1];
};