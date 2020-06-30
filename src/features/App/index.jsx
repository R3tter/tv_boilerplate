import React, { useEffect } from 'react';
import { css } from 'aphrodite/no-important';

import { Navigation } from 'Common';
import { navigationTypes } from 'constants/index.js';

import * as styles from './style';

export const App = () => {
  useEffect(() => {
    // eslint-disable-next-line
    console.log(`%c current version is: ${VERSION}`, 'color: orange; font-size: 13px;');
  }, []);

  return (
    <div className={css(styles.regular.app)}>
      <Navigation name="test" type={navigationTypes.horizontal} isRoot>
        {[<span>1</span>, <span>2</span>, <span>3</span>, <span>4</span>]}
      </Navigation>
    </div>
  );
};
