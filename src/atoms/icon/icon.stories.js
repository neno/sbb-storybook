import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import './icon.scss';
import Icon from './index';

export default {
  title: '01 - Atoms/Icons',
};

export const iconAngleDown = () =>
  renderToStaticMarkup(<Icon name='angle-down' />);
export const iconWorld = () => renderToStaticMarkup(<Icon name='world' />);
