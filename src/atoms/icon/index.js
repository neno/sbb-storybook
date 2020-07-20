import React from 'react';

import IconAngleDown from './icons/angle-down';
import IconWorld from './icons/world';

const icons = {
  world: IconWorld,
  'angle-down': IconAngleDown,
};

const Icon = ({ name }) => {
  const Ico = icons[name];
  return <Ico />;
};

export default Icon;
