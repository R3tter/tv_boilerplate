import { createAction } from 'redux-actions';

export const modalAdd = createAction('MODAL_ADD', name => ({
  name
}));
export const modalRemove = createAction('MODAL_REMOVE', name => ({ name }));
