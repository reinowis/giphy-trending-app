import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Giphy } from '@shared/models';
import { ReplaySubject } from 'rxjs';
import {Clipboard} from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-giphy-display',
  templateUrl: './giphy-display.component.html',
  styleUrls: ['./giphy-display.component.scss'],
})
export class GiphyDisplayComponent implements OnInit {
  private destroy$ = new ReplaySubject<boolean>();

  giphy: Giphy;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { giphy: Giphy },
    private dialogRef: MatDialogRef<GiphyDisplayComponent>,
    private clipboard: Clipboard,
    private snackbar: MatSnackBar,
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

  copyURL() {
    this.clipboard.copy(this.giphy.bitly_url);
    this.snackbar.open('Copied to clipboard!', 'OK', {
      duration: 3000,
      verticalPosition: 'top',
    })
  }
}
