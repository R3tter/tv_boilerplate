import { createSelector } from 'reselect';

const modal = state => state.Modal;
export const selectActiveModals = createSelector(
  modal,
  ({ active }) => active
);
