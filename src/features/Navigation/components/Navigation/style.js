import { StyleSheet } from 'aphrodite/no-important';

export const regular = StyleSheet.create({
  root: {
    display: 'flex',
    outline: 'none',
    ':focus': {
      border: '2px solid red'
    }
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
