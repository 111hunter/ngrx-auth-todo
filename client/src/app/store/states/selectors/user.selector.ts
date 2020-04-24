import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureName, State, adapter } from '../user.state';

/**
 * Selectors
 */
const getUserState = createFeatureSelector<State>(featureName);
const { selectEntities } = adapter.getSelectors();

export const getLogin = createSelector(
  getUserState,
  (state) => state.needAuth
);

export const getError = createSelector(getUserState, (state) => state.error);

export const getSelectedId = createSelector(
  getUserState,
  (state) => state.selectedId
);

export const getUserEntities = createSelector(getUserState, selectEntities);

export const getUser = createSelector(
  getSelectedId,
  getUserEntities,
  (id, entities) => (id ? entities[id] : undefined)
);

