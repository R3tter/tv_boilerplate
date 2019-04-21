import React from 'react';
import { useTranslation } from 'react-i18next';
import { css } from 'aphrodite/no-important';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropsTypes from 'prop-types';

import { pink } from 'core/styles';
import { Icon, Figure } from 'Common';
import { Button } from 'FormComponents';
import {
  selectActiveModals,
  selectModalMessages,
  selectModalData
} from 'Modal/selectors';
import { modalRemove } from 'Modal/actions';

import * as styles from './style';

const Modal = ({
  children,
  name,
  modalRemove,
  activeModals,
  width,
  onClose = () => null
}) => {
  const [t] = useTranslation('global');
  const closeModal = () => {
    onClose();
    modalRemove(name);
  };

  const show = activeModals.includes(name);
  return show ? (
    <div className={css(styles.regular.root)}>
      <div
        onClick={e => e.stopPropagation()}
        className={css(styles.wrapper(width)._)}
      >
        <div className={css(styles.regular.icon)} onClick={closeModal}>
          <Icon glyph="close" size={20} color={pink} />
        </div>
        <div className={css(styles.regular.default)}>{children}</div>
      </div>
    </div>
  ) : null;
};

Modal.propTypes = {
  type: PropsTypes.oneOf(['default', 'notification', 'confirm']),
  activeModals: PropsTypes.array,
  modalRemove: PropsTypes.func,
  name: PropsTypes.string,
  width: PropsTypes.number,
  messages: PropsTypes.object,
  onClose: PropsTypes.func,
  onConfirm: PropsTypes.func,
  data: PropsTypes.object
};

const mapStateToProps = state => ({
  activeModals: selectActiveModals(state),
  messages: selectModalMessages(state),
  data: selectModalData(state)
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ modalRemove }, dispatch);

const ModalConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);

export { ModalConnect as Modal };
