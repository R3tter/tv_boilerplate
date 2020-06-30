import { StyleSheet } from 'aphrodite/no-important';
import { navigationTypes } from 'Navigation/constants';

export const root = (type) =>
  StyleSheet.create({
    _: {
      display: 'flex',
      outline: 'none',
      ...(navigationTypes.vertical === type ? { flexDirection: 'column' } : {})
    }
  });
