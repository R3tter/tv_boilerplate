import React, { useEffect, createContext, useState } from 'react';
import { css } from 'aphrodite/no-important';

import { Navigation, NavigationWrapper } from 'Navigation';
import { NavigationContext } from 'Navigation/constants';
import { navigationTypes, navigationNames } from 'Navigation/constants';

import * as styles from './style';

export const App = () => {
  const [activeNavigationName, setActiveNavigation] = useState(null);

  useEffect(() => {
    // eslint-disable-next-line
    console.log(`%c current version is: ${VERSION}`, 'color: orange; font-size: 13px;');
    setActiveNavigation(navigationNames.second);
  }, []);

  return (
    <div className={css(styles.regular.app)}>
      <NavigationContext.Provider value={{ activeNavigationName, setActiveNavigation }}>
        <NavigationWrapper navigations={[[navigationNames.first], [navigationNames.second, navigationNames.asdsd]]}>
          <Navigation name={navigationNames.first} type={navigationTypes.horizontal}>
            {[<span>1</span>, <span>2</span>, <span>3</span>, <span>4</span>]}
          </Navigation>
          <div style={{ display: 'flex' }}>
            <Navigation name={navigationNames.second} type={navigationTypes.vertical}>
              {[<span>1</span>, <span>2</span>, <span>3</span>, <span>4</span>]}
            </Navigation>
            <Navigation name={navigationNames.asdsd} type={navigationTypes.vertical}>
              {[<span>1</span>, <span>2</span>, <span>3</span>, <span>4</span>]}
            </Navigation>
          </div>
        </NavigationWrapper>
      </NavigationContext.Provider>
    </div>
  );
};
