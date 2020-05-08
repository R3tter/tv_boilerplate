import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important';
import { styles } from './style';

export const App = ({ children }) => {
  useEffect(() => {
    // eslint-disable-next-line
    console.log(`%c current version is: ${VERSION}`, 'color: orange; font-size: 13px;');
  }, []);
  return (
    <div className={css(styles.app)}>
      <div className={css(styles.wrapper)}>{children}</div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node
};
