import React from 'react';
import ReactDOM from 'react-dom';
import PropsTypes from 'prop-types';
import { css } from 'aphrodite/no-important';
import { useSelector, useDispatch } from 'react-redux';

import { selectActiveModals } from 'Modal/selectors';
import { modalRemove } from 'Modal/actions';
import Close from 'images/icons/cancel.svg';

import * as styles from './style';

export const Modal = ({ children, name, width, onClose = () => null }) => {
  const activeModals = useSelector(selectActiveModals);
  const dispatch = useDispatch();
  const closeModal = () => {
    onClose();
    dispatch(modalRemove(name));
  };

  const show = activeModals.includes(name);
  return ReactDOM.createPortal(
    show ? (
      <div className={css(styles.regular.root)} onClick={closeModal}>
        <div onClick={(e) => e.stopPropagation()} className={css(styles.wrapper(width)._)}>
          <div className={css(styles.regular.icon)} onClick={closeModal}>
            <Close width="100%" height="100%" />
          </div>
          <div className={css(styles.regular.default)}>{children}</div>
        </div>
      </div>
    ) : null,
    document.getElementById('modal')
  );
};

Modal.propTypes = {
  name: PropsTypes.string.isRequired,
  children: PropsTypes.node.isRequired,
  width: PropsTypes.number,
  onClose: PropsTypes.func
};
