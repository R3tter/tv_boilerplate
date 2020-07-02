import { StyleSheet } from 'aphrodite/no-important';

import { navigationTypes } from 'Navigation/constants';

export const regular = StyleSheet.create({
  root: {
    display: 'flex',
    outline: 'none',
    ':focus': {
      border: '2px solid red'
    }
  }
});

export const item = (customStyles = {}) =>
  StyleSheet.create({
    _: {
      outline: 'none',
      boxShadow: '1px 1px 12px 1px rgba(0,0,0,.1)',
      transition: 'all .3s ease-in-out',
      ':focus': {
        boxShadow: '1px 1px 12px 5px rgba(0,0,0,.2)'
      },
      ...customStyles
    }
  });

const flowSettings = {
  flexRow: {
    display: 'flex'
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column'
  },
  grid: (length) => ({
    display: 'grid',
    gridTemplateColumns: `repeat(${length}, 1fr)`
  })
};

export const root = (columnsCount, customStyles = {}) =>
  StyleSheet.create({
    _: {
      ...(columnsCount > 1
        ? flowSettings.grid(columnsCount)
        : columnsCount === 1
        ? flowSettings.flexColumn
        : flowSettings.flexRow),
      outline: 'none',
      ...customStyles
    }
  });
