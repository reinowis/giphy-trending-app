import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Giphy } from '@shared/models';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-giphy-display',
  templateUrl: './giphy-display.component.html',
  styleUrls: ['./giphy-display.component.scss'],
})
export class GiphyDisplayComponent implements OnInit, OnDestroy {
  private destroy$ = new ReplaySubject<boolean>();

  giphy: Giphy;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { giphy: Giphy },
    private dialogRef: MatDialogRef<GiphyDisplayComponent>
  ) {}

  ngOnInit(): void {
    this.giphy = this.data.giphy;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onClose() {
    this.dialogRef.close();
  }
}
