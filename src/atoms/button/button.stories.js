import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import './button.scss';
import buttonHtml from './button.html';
// import { iconWorld } from '../icon/icon.stories';
import Button from './button.js';

export default {
  title: '01 - Atoms/Button',
};

// export const primary = () => button('Primary Button', ['a-btn--primary']);
export const primary = () =>
  renderToStaticMarkup(
    <Button
      label='Primary Button'
      classes={['a-btn--primary']}
      attrs={{ 'aria-expanded': 'false' }}
      disabled
    />
  );

export const htmlButton = () => buttonHtml;

// export const buttonIconLabel = () =>
//   button('Button with Icon', [], iconWorld());

export const buttonIconLabel = () =>
  renderToStaticMarkup(
    <Button label='Button with Icon' iconName='iconWorld' />
  );
