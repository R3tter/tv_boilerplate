import React, { useEffect, useState } from 'react';
import { css } from 'aphrodite/no-important';

import { Navigation, NavigationWrapper } from 'Navigation';
import { NavigationContext, navigationNames } from 'Navigation/constants';

import * as styles from './style';

export const App = () => {
  const [activeNavigationName, setActiveNavigation] = useState(null);

  useEffect(() => {
    // eslint-disable-next-line
    console.log(`%c current version is: ${VERSION}`, 'color: orange; font-size: 13px;');
    setActiveNavigation(navigationNames.first);
  }, []);

  return (
    <NavigationContext.Provider value={{ activeNavigationName, setActiveNavigation }}>
      <NavigationWrapper navigations={[[navigationNames.first], [navigationNames.second]]}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Navigation
            name={navigationNames.first}
            customStyles={{
              root: {
                width: '100%',
                marginTop: '25px',
                gridGap: '25px'
              }
            }}
          >
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <span tabIndex={0} className={css(styles.regular.item)}>
                  {index}
                </span>
              ))}
          </Navigation>
          <Navigation
            name={navigationNames.second}
            columnsCount={3}
            customStyles={{
              root: {
                width: '100%',
                marginTop: '25px',
                gridGap: '25px'
              }
            }}
          >
            {Array(16)
              .fill(null)
              .map((_, index) => (
                <span tabIndex={0} className={css(styles.regular.item)} onClick={() => console.log('here')}>
                  {index}
                </span>
              ))}
          </Navigation>
        </div>
      </NavigationWrapper>
    </NavigationContext.Provider>
  );
};
