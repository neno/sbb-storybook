import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import './button.scss';
import Button from './index';
import Icon from '../icon';

export default {
  title: '01 - Atoms/Button',
};

export const standard = () =>
  renderToStaticMarkup(
    <Button>
      <span>Standard Button</span>
    </Button>
  );

export const disabled = () =>
  renderToStaticMarkup(
    <Button disabled>
      <span>Disabled Button</span>
    </Button>
  );

export const withIcon = () =>
  renderToStaticMarkup(
    <Button classNames={['a-btn--ico-lbl']}>
      <Icon name='world' />
      <span>Disabled Button</span>
    </Button>
  );
