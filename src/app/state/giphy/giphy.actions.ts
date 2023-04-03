import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import {
  Giphy,
  GiphyBaseRequest,
  GiphyPagination,
  GiphySearchPayload,
} from '@shared/models';

export enum GiphyActionTypes {
  GET_GIPHY_SEARCH = 'GET_GIPHY_SEARCH',
  GET_GIPHY_SEARCH_SUCCESS = 'GET_GIPHY_SEARCH_SUCCESS',
  GET_GIPHY_SEARCH_FAILURE = 'GET_GIPHY_SEARCH_FAILURE',
  GET_GIPHY_TRENDING = 'GET_GIPHY_TRENDING',
  GET_GIPHY_TRENDING_SUCCESS = 'GET_GIPHY_TRENDING_SUCCESS',
  GET_GIPHY_TRENDING_FAILURE = 'GET_GIPHY_TRENDING_FAILURE',
}

export const GetGiphySearch = createAction(
  GiphyActionTypes.GET_GIPHY_SEARCH,
  props<{ query: GiphySearchPayload }>()
);
export const GetGiphySearchSuccess = createAction(
  GiphyActionTypes.GET_GIPHY_SEARCH_SUCCESS,
  props<{ giphys: Giphy[]; pagination: GiphyPagination }>()
);
export const GetGiphySearchFailure = createAction(
  GiphyActionTypes.GET_GIPHY_SEARCH_FAILURE,
  props<{ error: HttpErrorResponse }>()
);

export const GetGiphyTrending = createAction(
  GiphyActionTypes.GET_GIPHY_TRENDING,
  props<{ query: GiphyBaseRequest }>()
);
export const GetGiphyTrendingSuccess = createAction(
  GiphyActionTypes.GET_GIPHY_TRENDING_SUCCESS,
  props<{ giphys: Giphy[]; pagination: GiphyPagination }>()
);
export const GetGiphyTrendingFailure = createAction(
  GiphyActionTypes.GET_GIPHY_TRENDING_FAILURE,
  props<{ error: HttpErrorResponse }>()
);
