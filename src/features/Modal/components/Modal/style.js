import { StyleSheet } from 'aphrodite/no-important';
import {
  darkBlue,
  white
} from 'core/styles';

export const wrapper = width =>
  StyleSheet.create({
    _: {
      position: 'relative',
      width: '100%',
      maxWidth: width ? `${width}px` : '400px',
      boxSizing: 'border-box',
      borderRadius: '5px',
      boxShadow: '5px 8px 40px 0 rgba(0,0,0, 0.12)',
      background: white
    }
  });

export const regular = StyleSheet.create({
  root: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vh',
    zIndex: '20'
  },
  icon: {
    position: 'absolute',
    top: '5px',
    right: '5px',
    cursor: 'pointer'
  },
  default: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: '25px 15px',
    boxSizing: 'border-box'
  },
  text: {
    fontSize: '16px',
    textAlign: 'center',
    color: darkBlue
  }
});
