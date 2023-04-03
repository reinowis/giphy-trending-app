import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Giphy } from '@shared/models';
import { AppState, getGiphysLoadingSelector } from '@state';
import {
  ReplaySubject,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  takeUntil,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-giphy-list',
  templateUrl: './giphy-list.component.html',
  styleUrls: ['./giphy-list.component.scss'],
})
export class GiphyListComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() giphyList: Array<Giphy> | null;
  @Output() isLoadMore = new EventEmitter<boolean>();

  @ViewChild('container') giphyListContainer: ElementRef<HTMLElement>;

  private destroy$ = new ReplaySubject<boolean>();
  loading$ = this.store.select(getGiphysLoadingSelector);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngAfterViewInit(): void {
    this.initScroll();
  }

  initScroll() {
    fromEvent(this.giphyListContainer.nativeElement, 'scroll')
      .pipe(
        takeUntil(this.destroy$),
        distinctUntilChanged(),
        map((e) => {
          const target = e.target as HTMLElement;
          const scrollPosition = target.scrollTop + target.clientHeight;

          const totalHeight = target.scrollHeight;
          return scrollPosition === totalHeight;
        }),
        filter((e) => !!e),
        tap((e) => this.isLoadMore.emit(e))
      )
      .subscribe();
  }
}
