import { StyleSheet } from 'aphrodite/no-important';

import { navigationTypes } from 'Navigation/constants';

export const regular = StyleSheet.create({
  root: {
    display: 'flex',
    outline: 'none',
    ':focus': {
      border: '2px solid red'
    }
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '150px',
    height: '50px',
    outline: 'none',
    boxShadow: '1px 1px 12px 1px rgba(0,0,0,.1)',
    transition: 'all .3s ease-in-out',
    ':not(:first-child)': {
      marginLeft: '25px'
    },
    ':focus': {
      boxShadow: '1px 1px 12px 5px rgba(0,0,0,.2)'
    }
  }
});

export const root = (type) =>
  StyleSheet.create({
    _: {
      display: 'flex',
      outline: 'none',
      ...(navigationTypes.vertical === type ? { flexDirection: 'column' } : {})
    }
  });
