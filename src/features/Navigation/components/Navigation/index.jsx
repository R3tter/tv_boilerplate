import React, { memo, useEffect, useState, useContext, useMemo } from 'react';
import PropsTypes from 'prop-types';
import { css } from 'aphrodite/no-important';

import { navigationKeys, navigationModificators, NavigationContext, navigationTypes } from 'Navigation/constants';
import { setFocus, chunk } from 'core/helpers';

import * as styles from './style';

export const Navigation = memo(({ name, columnsCount, children, customStyles }) => {
  const [active, setActive] = useState(0);
  const { activeNavigationName, setActiveNavigation } = useContext(NavigationContext);

  const handleClick = (index) => {
    setActive(index);
    activeNavigationName !== name && setActiveNavigation(name);
  };

  const content = useMemo(
    () =>
      children.map((item, index) => (
        <div data-focus-id={`navigation-${name}-${index}`} key={index} onClick={() => handleClick(index)}>
          {item}
        </div>
      )),
    [children, activeNavigationName]
  );
  const stepMap = useMemo(() => (columnsCount ? chunk(content, columnsCount) : [content]), [content, columnsCount]);

  const rowIndex = useMemo(
    () => stepMap.findIndex((arr) => arr.some?.((item) => item.props['data-focus-id'].includes(active))),
    [stepMap, active]
  );

  const columnIndex = useMemo(
    () => stepMap[rowIndex]?.findIndex((item) => item.props['data-focus-id'].includes(active)),
    [stepMap, rowIndex, active]
  );

  const handleKeyPress = (e) => {
    const { key } = e;
    const [type] = Object.entries(navigationKeys).find(([, arr]) => arr.includes(key)) || [];

    switch (type) {
      case navigationTypes.vertical: {
        const newIndex = rowIndex + navigationModificators[key];
        const isInside = newIndex >= 0 && newIndex < stepMap.length;
        const component = isInside && stepMap[newIndex][columnIndex];
        component && setActive(+component.key);
        isInside && e.stopPropagation();
        break;
      }
      case navigationTypes.horizontal: {
        const newIndex = columnIndex + navigationModificators[key];
        const isInside = newIndex >= 0 && newIndex < stepMap[rowIndex].length;
        const component = isInside && stepMap[rowIndex][newIndex];
        component && setActive(+component.key);
        isInside && e.stopPropagation();
        break;
      }
      case navigationTypes.web: {
        setActive(active + navigationModificators[key]);
      }
    }
  };

  useEffect(() => {
    activeNavigationName === name && setFocus(name, active);
  }, [active, activeNavigationName]);

  return (
    <div
      className={css(styles.root(columnsCount, customStyles?.root)._)}
      data-focus-id={`navigation-${name}`}
      onKeyDown={handleKeyPress}
    >
      {content}
    </div>
  );
});

Navigation.propTypes = {
  name: PropsTypes.string.isRequired,
  columnsCount: PropsTypes.number,
  children: PropsTypes.arrayOf(PropsTypes.node),
  customStyles: PropsTypes.object
};
