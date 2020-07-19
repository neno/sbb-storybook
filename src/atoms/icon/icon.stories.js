import world from './world.html';
import angleDown from './angle-down.html';

export default {
  title: '01 - Atoms/Icons',
};

const icon = (fileName) => {
  const i = require(`./${fileName}.html`);
  return i;
};

export const iconAngleDown = icon('angle-down');

export const iconWorld = icon('world');
