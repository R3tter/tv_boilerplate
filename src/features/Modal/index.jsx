import React from 'react';
import PropsTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { css } from 'aphrodite/no-important';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectActiveModals
} from 'Modal/selectors';
import { modalRemove } from 'Modal/actions';

import * as styles from './style';

export const Modal = ({
  children,
  name,
  width,
  onClose = () => null
}) => {
  const [t] = useTranslation('global');
  const activeModals = useSelector(selectActiveModals);
  const dispatch = useDispatch();
  const closeModal = () => {
    onClose();
    dispatch(modalRemove(name));
  };

  const show = activeModals.includes(name);
  return show ? (
    <div className={css(styles.regular.root)}>
      <div
        onClick={e => e.stopPropagation()}
        className={css(styles.wrapper(width)._)}
      >
        <div className={css(styles.regular.icon)} onClick={closeModal}>
          close
        </div>
        <div className={css(styles.regular.default)}>{children}</div>
      </div>
    </div>
  ) : null;
};

Modal.propTypes = {
  activeModals: PropsTypes.array,
  modalRemove: PropsTypes.func,
  name: PropsTypes.string,
  width: PropsTypes.number,
  onClose: PropsTypes.func
};
