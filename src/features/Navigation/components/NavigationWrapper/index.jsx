import React, { memo, useContext, useMemo } from 'react';
import PropsTypes from 'prop-types';

import { navigationTypes, NavigationContext, navigationKeys, navigationModificators } from 'Navigation/constants';

export const NavigationWrapper = memo(({ children, navigations }) => {
  const { activeNavigationName, setActiveNavigation } = useContext(NavigationContext);

  const rowIndex = useMemo(() => navigations.findIndex((arr) => arr.includes(activeNavigationName)), [
    activeNavigationName
  ]);
  const columnIndex = useMemo(() => navigations[rowIndex]?.findIndex((item) => item === activeNavigationName), [
    rowIndex,
    activeNavigationName
  ]);

  const handleKeyPress = (e) => {
    const { key } = e;
    const [type] = Object.entries(navigationKeys).find(([, arr]) => arr.includes(key)) || [];
    switch (type) {
      case navigationTypes.vertical: {
        const newIndex = rowIndex + navigationModificators[key];
        const isValid = newIndex >= 0 && newIndex < navigations.length;
        const navigationName = isValid && navigations[newIndex][columnIndex];
        navigationName && setActiveNavigation(navigations[newIndex][columnIndex]);
        break;
      }
      case navigationTypes.horizontal: {
        const newIndex = columnIndex + navigationModificators[key];
        const isValid = newIndex >= 0 && newIndex < navigations[rowIndex].length;
        const navigationName = isValid && navigations[rowIndex][newIndex];
        navigationName && setActiveNavigation(navigations[rowIndex][newIndex]);
        break;
      }
    }
  };

  return <div onKeyDown={handleKeyPress}>{children}</div>;
});

NavigationWrapper.propTypes = {
  navigations: PropsTypes.array.isRequired,
  children: PropsTypes.node
};
