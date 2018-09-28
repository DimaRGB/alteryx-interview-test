import * as T from './types';

export const setCurrentUser = (user) => ({
  type: T.SET_CURRENT_USER,
  payload: user,
});
