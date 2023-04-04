import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GiphyService } from '@core/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import * as GiphyActions from './giphy.actions';

@Injectable()
export class GiphyEffects {
  getGiphyTrending$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GiphyActions.GetGiphyTrending),
      mergeMap(({ query }) => this.giphyService.getTrending(query)),
      switchMap(({ data, pagination }) =>
        of(GiphyActions.GetGiphyTrendingSuccess({ giphys: data, pagination }))
      ),
      catchError((error: HttpErrorResponse) => {
        this.snackbar.open(error?.message);
        return of(GiphyActions.GetGiphyTrendingFailure({ error }));
      })
    )
  );

  getGiphySearch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GiphyActions.GetGiphySearch),
      mergeMap(({ query }) => this.giphyService.search(query)),
      switchMap(({ data, pagination }) =>
        of(GiphyActions.GetGiphySearchSuccess({ giphys: data, pagination }))
      ),
      catchError((error: HttpErrorResponse) => {
        this.snackbar.open(error?.message);
        return of(GiphyActions.GetGiphyTrendingFailure({ error }));
      })
    )
  );

  constructor(
    private actions$: Actions,
    private giphyService: GiphyService,
    private snackbar: MatSnackBar
  ) {}
}
