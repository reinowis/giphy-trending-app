import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.scss']
})
export class ImageLoaderComponent {
  @Input() src: string;
  @Input() alt?: string;
  @Input() width?: number | string;
  @Input() height?: number | string;

  loading: boolean = true;

  hideLoading() {
    this.loading = false;
  }
}
