import { createContext } from 'react';

export const NavigationContext = new createContext(null);

export const navigationTypes = {
  horizontal: 'horizontal',
  vertical: 'vertical'
};

export const navigationKeys = {
  horizontal: ['ArrowLeft', 'ArrowRight'],
  vertical: ['ArrowUp', 'ArrowDown']
};

export const navigationModificators = {
  ArrowLeft: -1,
  ArrowRight: 1,
  ArrowUp: -1,
  ArrowDown: 1
};

export const navigationNames = {
  first: 'sideBar',
  second: 'main',
  asdsd: 'asd',
  ddd: 'dd'
};
