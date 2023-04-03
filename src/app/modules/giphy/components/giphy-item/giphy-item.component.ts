import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Giphy } from '@shared';
import { GiphyDisplayComponent } from '../giphy-display/giphy-display.component';

@Component({
  selector: 'app-giphy-item',
  templateUrl: './giphy-item.component.html',
  styleUrls: ['./giphy-item.component.scss'],
})
export class GiphyItemComponent {
  @Input() giphy: Giphy;

  constructor(private dialog: MatDialog) {}

  selectGiphy() {
    this.dialog.open(GiphyDisplayComponent, {
      width: 'auto',
      height: 'auto',
      data: {
        giphy: this.giphy,
      },
    });
  }
}
