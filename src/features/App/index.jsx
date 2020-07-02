import React, { useEffect, useState } from 'react';

import { Navigation, NavigationWrapper } from 'Navigation';
import { NavigationContext, navigationNames } from 'Navigation/constants';

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
              },
              item: {
                width: '150px',
                height: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'red',
                marginLeft: '25px',
                ':focus': {
                  background: 'green'
                }
              }
            }}
          >
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <span>{index}</span>
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
              },
              item: {
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
        </div>
      </NavigationWrapper>
    </NavigationContext.Provider>
  );
};
