import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import {
  setErrorState,
  setLoadingState,
  setSuccessState,
} from '@shared/helpers';
import { IError } from '@shared/models';
import { Giphy } from '@shared/models/giphy.model';
import * as GiphyActions from './giphy.actions';

export interface GiphyEntityState extends EntityState<Giphy> {
  loading: Array<GiphyActions.GiphyActionTypes>;
  errors: Array<IError<GiphyActions.GiphyActionTypes>>;
  selectedGiphyId?: string;
}

const initialState: GiphyEntityState = {
  entities: {},
  loading: [],
  errors: [],
  ids: [],
  selectedGiphyId: '',
};

const giphyAdapter = createEntityAdapter<Giphy>();

export const giphyReducer = createReducer(
  giphyAdapter.getInitialState(initialState),
  on(GiphyActions.GetGiphyTrending, (state) =>
    setLoadingState(state, GiphyActions.GiphyActionTypes.GET_GIPHY_TRENDING)
  ),

  on(GiphyActions.GetGiphyTrendingSuccess, (state, { giphys, pagination }) => {
    if (pagination.offset > 0) {
      return giphyAdapter.addMany(
        giphys,
        setSuccessState(state, GiphyActions.GiphyActionTypes.GET_GIPHY_TRENDING)
      );
    } else {
      return giphyAdapter.setAll(
        giphys,
        setSuccessState(state, GiphyActions.GiphyActionTypes.GET_GIPHY_TRENDING)
      );
    }
  }),

  on(GiphyActions.GetGiphyTrendingFailure, (state, { error }) =>
    setErrorState(state, GiphyActions.GiphyActionTypes.GET_GIPHY_SEARCH, error)
  ),

  on(GiphyActions.GetGiphySearch, (state, { query }) =>
    setLoadingState(state, GiphyActions.GiphyActionTypes.GET_GIPHY_SEARCH)
  ),

  on(GiphyActions.GetGiphySearchSuccess, (state, { giphys, pagination }) => {
    if (pagination.offset > 0) {
      return giphyAdapter.addMany(
        giphys,
        setSuccessState(state, GiphyActions.GiphyActionTypes.GET_GIPHY_TRENDING)
      );
    } else {
      return giphyAdapter.setAll(
        giphys,
        setSuccessState(state, GiphyActions.GiphyActionTypes.GET_GIPHY_TRENDING)
      );
    }
  }),

  on(GiphyActions.GetGiphySearchFailure, (state, { error }) =>
    setErrorState(state, GiphyActions.GiphyActionTypes.GET_GIPHY_SEARCH, error)
  )
);

const { selectAll, selectTotal, selectEntities } = giphyAdapter.getSelectors();

export const selectGiphyEntities = selectEntities;
export const selectAllGiphys = selectAll;
export const selectTotalGiphys = selectTotal;
