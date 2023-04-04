import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReplaySubject, distinctUntilChanged, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent implements OnInit, OnDestroy {
  @Output() searchEvent = new EventEmitter<string>();

  private destroy$ = new ReplaySubject<boolean>();

  searchForm: FormGroup;

  get searchControl() {
    return this.searchForm.get('search');
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private initForm(): void {
    this.searchForm = this.formBuilder.group({
      search: [''],
    });

    this.searchControl?.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        distinctUntilChanged(),
        tap(() => this.search())
      )
      .subscribe();
  }

  search(): void {
    const query = this.searchControl?.value.trim();
    this.searchEvent.emit(query);
  }
}
