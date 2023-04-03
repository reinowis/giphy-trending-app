import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GiphyService } from '@core/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import * as GiphyActions from './giphy.actions';

@Injectable()
export class GiphyEffects {
  getGiphyTrending$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GiphyActions.GetGiphyTrending),
      tap(_ => console.log('request')),
      switchMap(({ query }) => this.giphyService.getTrending(query)),
      switchMap(({ data }) =>
        of(GiphyActions.GetGiphyTrendingSuccess({ giphys: data }))
      ),
      catchError((error: HttpErrorResponse) =>
        of(GiphyActions.GetGiphyTrendingFailure({ error }))
      )
    )
  );

  getGiphySearch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GiphyActions.GetGiphySearch),
      switchMap(({ query }) => this.giphyService.search(query)),
      switchMap(({ data }) =>
        of(GiphyActions.GetGiphySearchSuccess({ giphys: data }))
      ),
      catchError((error: HttpErrorResponse) =>
        of(GiphyActions.GetGiphyTrendingFailure({ error }))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private giphyService: GiphyService,
    private snackbar: MatSnackBar
  ) {}
}
