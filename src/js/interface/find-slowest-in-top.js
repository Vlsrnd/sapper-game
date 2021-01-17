export const findSlowestInTop = (config) => {
  const {row, column} = config.size;
  const top = config.isWideResolution ?
    config.score[`top${row}x${column}`]
    : config.score[`top${column}x${row}`];
  return top[top.length - 1];
};