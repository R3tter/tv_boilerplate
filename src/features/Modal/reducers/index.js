import { handleActions } from 'redux-actions';
import { modalAdd, modalRemove } from 'Modal/actions';

const initialState = {
  active: [],
  counter: {}
};

export const ModalReducers = handleActions(
  {
    [modalAdd]: (state, { payload }) => {
      const { counter } = state;
      return {
        ...state,
        active: [...state.active, payload.name],
        counter: {
          ...counter,
          [payload.name]: counter[payload.name] ? counter[payload.name] + 1 : 1
        }
      };
    },
    [modalRemove]: (state, { payload }) => ({
      ...state,
      active: state.active.filter(i => i !== payload.name)
    })
  },
  initialState
);
