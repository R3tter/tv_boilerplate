import { handleActions } from 'redux-actions';
import { setCachedData } from 'App/actions';

const initialState = {
  token: '',
  refreshToken: '',
  isAuth: false
};

export const Cached = handleActions(
  {
    [setCachedData]: (state, { payload }) => ({
      ...state,
      ...payload
    })
  },
  initialState
);
