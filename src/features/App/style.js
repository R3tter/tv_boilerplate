import { StyleSheet } from 'aphrodite/no-important';

export const regular = StyleSheet.create({
  app: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    width: '500px',
    height: '500px',
    boxShadow: '1px 0px 16px 0 rgba(0,0,0,.1)',
    cursor: 'pointer',
    ':hover': {
      boxShadow: '2px 0px 32px 0 rgba(0,0,0,.2)'
    }
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minWidth: '150px',
    height: '50px',
    boxShadow: '1px 1px 12px 1px rgba(0,0,0,.1)',
    transition: 'all .3s ease-in-out',
    outline: 'none',
    ':focus': {
      boxShadow: '1px 1px 12px 5px rgba(0,0,0,.2)'
    }
  }
});
