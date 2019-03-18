import * as React from 'react';
import { css } from 'aphrodite/no-important';
import { styles } from './style';

export const App = ({ children }) => (
  <div className={css(styles.app)}>
    <div className={css(styles.wrapper)}>
      {children}
    </div>
  </div>
);
