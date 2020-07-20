import React from 'react';

const Button = ({
  children,
  classNames = [],
  disabled = false,
  dataset = {},
}) => {
  const cls = ['a-btn', ...classNames];

  return (
    <button className={cls.join(' ')} disabled={disabled} {...dataset}>
      {children}
    </button>
  );
};

export default Button;
