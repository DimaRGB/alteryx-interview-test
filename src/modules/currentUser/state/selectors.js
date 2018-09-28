import { createSelector } from 'reselect';

const moduleSelector = state => state.currentUser;

export const currentUserSelector = createSelector(
  moduleSelector,
  module => module.data,
);

export const tokenSelector = createSelector(
  currentUserSelector,
  currentUser => currentUser.token
);
