import React, { memo, useEffect, useState, useContext } from 'react';
import PropsTypes from 'prop-types';
import { css } from 'aphrodite/no-important';

import { navigationKeys, navigationModificators, NavigationContext, navigationTypes } from 'Navigation/constants';
import { setFocus } from 'core/helpers';

import * as styles from './style';

export const Navigation = memo(({ name, type, children }) => {
  const [active, setActive] = useState(0);
  const { activeNavigationName, setActiveNavigation } = useContext(NavigationContext);

  const handleKeyPress = (e) => {
    const { key } = e;
    if (navigationKeys[type].includes(key)) {
      const newActive = active + navigationModificators[key];
      const isInside = newActive >= 0 && newActive < children.length;
      isInside && setActive(newActive);
      isInside && e.stopPropagation();
    }
  };

  const handleClick = (index) => {
    setActive(index);
    activeNavigationName !== name && setActiveNavigation(name);
  };

  useEffect(() => {
    activeNavigationName === name && setFocus(name, active);
  }, [active, activeNavigationName]);

  return (
    <div className={css(styles.root(type)._)} data-focus-id={`navigation-${name}`} onKeyDown={handleKeyPress}>
      {children.map((item, index) => (
        <div
          tabIndex={0}
          data-focus-id={`navigation-${name}-${index}`}
          key={index}
          onClick={() => handleClick(index)}
          className={css(styles.regular.item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
});

Navigation.propTypes = {
  name: PropsTypes.string.isRequired,
  type: PropsTypes.oneOf([navigationTypes.horizontal, navigationTypes.vertical]).isRequired,
  children: PropsTypes.arrayOf(PropsTypes.node)
};
