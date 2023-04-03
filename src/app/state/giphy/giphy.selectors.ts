import { createFeatureSelector, createSelector } from "@ngrx/store";
import { GiphyEntityState, selectAllGiphys, selectGiphyEntities } from "./giphy.reducer";
import { GiphyActionTypes } from "./giphy.actions";

const giphyState = createFeatureSelector<GiphyEntityState>('giphy');

export const getGiphysSelector = createSelector(giphyState, selectAllGiphys);

export const getGiphyEntitiesSelector = createSelector(
  giphyState,
  selectGiphyEntities
);

export const getGiphysLoadingSelector = createSelector(giphyState, (state) =>
  state.loading.includes(GiphyActionTypes.GET_GIPHY_TRENDING)
);

export const getSelectedGiphyIdSelector = createSelector(
  giphyState,
  (state) => state.selectedGiphyId
);
