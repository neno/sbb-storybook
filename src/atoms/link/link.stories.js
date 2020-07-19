// import './button.scss';
// import buttonHtml from './button.html';
// import { iconWorld } from '../icon/icon.stories';
// import button from './button.js';

import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

export default {
  title: '01 - Atoms/Link',
};

const Link = ({ label, href = '#' }) => <a href={href}>{label}</a>;

export const primary = renderToStaticMarkup(<Link label='My Link' />);
