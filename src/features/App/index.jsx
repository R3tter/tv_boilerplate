import React, { useEffect, useState } from 'react';
import { css } from 'aphrodite/no-important';

import { Navigation, NavigationWrapper } from 'Navigation';
import { NavigationContext, navigationTypes, navigationNames } from 'Navigation/constants';

import * as styles from './style';

export const App = () => {
  const [activeNavigationName, setActiveNavigation] = useState(null);

  useEffect(() => {
    // eslint-disable-next-line
    console.log(`%c current version is: ${VERSION}`, 'color: orange; font-size: 13px;');
    setActiveNavigation(navigationNames.first);
  }, []);

  return (
    <div className={css(styles.regular.app)}>
      <NavigationContext.Provider value={{ activeNavigationName, setActiveNavigation }}>
        <NavigationWrapper navigations={[[navigationNames.first], [navigationNames.second]]}>
          <div style={{ display: 'flex' }}>
            <Navigation
              name={navigationNames.first}
              type={navigationTypes.horizontal}
              customStyles={{
                item: {
                  width: '150px',
                  height: '50px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }
              }}
            >
              {[<span>1</span>, <span>2</span>, <span>3</span>, <span>4</span>]}
            </Navigation>
          </div>
          <Navigation
            name={navigationNames.second}
            type={navigationTypes.horizontal}
            customStyles={{
              root: {
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr',
                marginTop: '25px',
                gridGap: '25px'
              },
              item: {
                width: '150px',
                height: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }
            }}
          >
            {Array(16)
              .fill(null)
              .map((_, index) => (
                <span>{index}</span>
              ))}
          </Navigation>
        </NavigationWrapper>
      </NavigationContext.Provider>
    </div>
  );
};
