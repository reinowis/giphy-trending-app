import { ActionReducerMap } from '@ngrx/store';
import { GiphyEntityState, giphyReducer } from '@state/giphy';

export interface AppState {
  giphy: GiphyEntityState;
}

export const rootReducers: ActionReducerMap<AppState> = {
  giphy: giphyReducer,
};
