import React from 'react';
import icon from '../icon/icon';

const Button = ({
  label = '',
  classes = [],
  iconName = '',
  disabled = false,
  attrs,
}) => {
  let cls = ['a-btn'];

  if (label && icon) {
    cls.push('btn--icon-label');
  } else if (!label && icon) {
    cls.push('btn--icon');
  }

  if (classes.length) {
    cls = [...cls, ...classes];
  }

  // const ico = iconName && icon(iconName);

  return (
    <button className={cls.join(' ')} disabled={disabled} {...attrs}>
      <span>{label}</span>
    </button>
  );
};

export default Button;
