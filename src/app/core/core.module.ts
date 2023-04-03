import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material';
import { GiphyService } from './services';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [MaterialModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [GiphyService],
})
export class CoreModule {}
