import './welcome.css';
import welcome from './welcome.html';
import '../src/atoms/button/button.scss';
import button from '../src/atoms/button/button.html';

export default {
  title: 'Welcome',
};

export const Welcome = () => welcome;

export const Button = () => button;
