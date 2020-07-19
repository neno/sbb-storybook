import './button.scss';
import buttonHtml from './button.html';
import { iconWorld } from '../icon/icon.stories';
import button from './button.js';

export default {
  title: '01 - Atoms/Button',
};

export const primary = () => button('Primary Button', ['a-btn--primary']);

export const htmlButton = () => buttonHtml;

export const buttonIconLabel = () =>
  button('Button with Icon', [], iconWorld());
