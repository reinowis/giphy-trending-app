import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { ImageLoaderComponent } from './components/image-loader/image-loader.component';

@NgModule({
  declarations: [
    LoadingComponent,
    ImageLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ LoadingComponent, ImageLoaderComponent ]
})
export class SharedModule { }
