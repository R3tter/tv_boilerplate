import React, { memo, useEffect, useState } from 'react';
import PropsTypes from 'prop-types';
import { css } from 'aphrodite/no-important';

import { navigationKeys, navigationModificators } from 'constants/index.js';

import * as styles from './style';

export const Navigation = memo(({ name, type, children }) => {
  const [active, setActive] = useState(0);
  const handleKeyPress = ({ key }) => {
    const newActive = active + navigationModificators[key];
    newActive >= 0 && newActive < children.length && navigationKeys[type].includes(key) && setActive(newActive);
  };

  useEffect(() => {
    document.querySelector(`[data-focus-id="navigation-${name}-${active}"]`)?.focus();
  }, [active]);

  return (
    <div
      className={css(styles.regular.root)}
      tabIndex={0}
      data-focus-id={`navigation-${name}`}
      onKeyDown={handleKeyPress}
    >
      {children.map((item, index) => (
        <div
          tabIndex={0}
          data-focus-id={`navigation-${name}-${index}`}
          key={index}
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
  type: PropsTypes.oneOf(['horizontal', 'vertical']).isRequired,
  isRoot: PropsTypes.bool
};
