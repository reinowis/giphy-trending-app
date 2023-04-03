import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Store } from '@ngrx/store';
import { Giphy, GiphySearchPayload } from '@shared';
import { DEFAULT_GIPHY_QUERY } from '@shared/constants';
import { AppState } from '@state';
import { GiphyActions, getGiphysSelector } from '@state/giphy';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-giphy-home',
  templateUrl: './giphy-home.component.html',
  styleUrls: ['./giphy-home.component.scss'],
})
export class GiphyHomeComponent implements OnInit {
  giphyList$: Observable<Giphy[]> = this.store.select(getGiphysSelector);
  
  type: string = 'TRENDING';
  query: GiphySearchPayload = DEFAULT_GIPHY_QUERY;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.initData();
  }

  private initData() {
    this.fetchGiphyList();
  }

  private fetchGiphyList() {
    if (this.type === 'TRENDING') {
      this.store.dispatch(GiphyActions.GetGiphyTrending({ query: this.query }));
    } else {
      this.store.dispatch(GiphyActions.GetGiphySearch({ query: this.query }));
    }
  }

  onTabChanged(tab: MatTabChangeEvent) {
    this.query = DEFAULT_GIPHY_QUERY;

    this.type = ['TRENDING', 'DEFAULT'][tab.index];

    this.fetchGiphyList();
  }

  onLoadMore($event: boolean) {
    if ($event) {
      this.query = {
        ...this.query,
        offset: this.query.offset + this.query.limit * this.query.offset + 1,
      };

      this.fetchGiphyList();
    }
  }

  onSearch($event: string) {
    if ($event) {
      this.query = {
        ...this.query,
        q: $event,
      };

      this.fetchGiphyList();
    }
  }
}