import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreModule } from '@core';
import {
  GiphyItemComponent,
  GiphyListComponent,
  SearchBarComponent,
} from './components';
import { GiphyDisplayComponent } from './components/giphy-display/giphy-display.component';
import { GiphyRoutingModule } from './giphy-routing.module';
import { GiphyHomeComponent } from './pages';

@NgModule({
  declarations: [
    GiphyListComponent,
    GiphyDisplayComponent,
    SearchBarComponent,
    GiphyItemComponent,
    GiphyHomeComponent,
  ],
  imports: [CommonModule, CoreModule, GiphyRoutingModule],
})
export class GiphyModule {}
