import { StyleSheet } from 'aphrodite/no-important';

export const wrapper = width =>
  StyleSheet.create({
    _: {
      position: 'relative',
      width: '100%',
      maxWidth: width ? `${width}px` : '400px',
      boxSizing: 'border-box',
      borderRadius: '5px',
      boxShadow: '5px 8px 40px 0 rgba(0,0,0, 0.12)',
      background: 'white'
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
    zIndex: '20',
    background: 'rgba(0,0,0, 0.2)',
  },
  icon: {
    position: 'absolute',
    width: '15px',
    height: '15px',
    top: '10px',
    right: '10px',
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
    color: 'black'
  }
});
