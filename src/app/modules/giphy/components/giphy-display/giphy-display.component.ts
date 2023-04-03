import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Giphy } from '@shared/models';

@Component({
  selector: 'app-giphy-display',
  templateUrl: './giphy-display.component.html',
  styleUrls: ['./giphy-display.component.scss'],
})
export class GiphyDisplayComponent implements OnInit {
  giphy: Giphy | undefined;

  constructor(
    public dialogRef: MatDialogRef<GiphyDisplayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.initData();
  }

  private initData() {
    this.giphy = this.data?.giphy;
  }

  onClose() {
    this.dialogRef.close();
  }
}
