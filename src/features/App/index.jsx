import React, { useEffect, useCallback } from 'react';
import { css } from 'aphrodite/no-important';
import { useDispatch } from 'react-redux';

import { Modal } from 'Modal';
import { modalAdd } from 'Modal/actions';

import { styles } from './style';

export const App = () => {
  useEffect(() => {
    // eslint-disable-next-line
    console.log(`%c current version is: ${VERSION}`, 'color: orange; font-size: 13px;');
  }, []);
  const dispatch = useDispatch();
  const addModal = useCallback(() => dispatch(modalAdd('test')), []);
  return (
    <div className={css(styles.app)}>
      <div className={css(styles.wrapper)} onClick={addModal}>
        Click me
      </div>
      <Modal name="test">Some text here</Modal>
    </div>
  );
};
