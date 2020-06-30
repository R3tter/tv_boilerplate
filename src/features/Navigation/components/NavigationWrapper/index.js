import React, { memo, useContext, useMemo } from 'react';
import PropsTypes from 'prop-types';
import { css } from 'aphrodite/no-important';

import { navigationTypes, NavigationContext, navigationKeys, navigationModificators } from 'Navigation/constants';

export const NavigationWrapper = memo(({ children, navigations }) => {
  const { activeNavigationName, setActiveNavigation } = useContext(NavigationContext);

  const columnIndex = useMemo(() => navigations.findIndex((arr) => arr.includes(activeNavigationName)), [
    activeNavigationName
  ]);
  const rowIndex = useMemo(() => navigations[columnIndex]?.findIndex((item) => item === activeNavigationName), [
    columnIndex,
    activeNavigationName
  ]);

  const handleKeyPress = (e) => {
    const { key } = e;
    const [type] = Object.entries(navigationKeys).find(([, arr]) => arr.includes(key)) || [];
    switch (type) {
      case navigationTypes.vertical: {
        const newIndex = columnIndex + navigationModificators[key];
        const isValid = newIndex >= 0 && newIndex < navigations.length;
        const navigationName = isValid && navigations[newIndex][rowIndex];
        navigationName && setActiveNavigation(navigations[newIndex][rowIndex]);
        break;
      }
      case navigationTypes.horizontal: {
        const newIndex = rowIndex + navigationModificators[key];
        const isValid = newIndex >= 0 && newIndex < navigations[columnIndex].length;
        const navigationName = isValid && navigations[columnIndex][newIndex];
        navigationName && setActiveNavigation(navigations[columnIndex][newIndex]);
        break;
      }
    }
  };

  return <div onKeyDown={handleKeyPress}>{children}</div>;
});
