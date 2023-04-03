import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { Giphy } from '@shared/models';

@Component({
  selector: 'app-giphy-list',
  templateUrl: './giphy-list.component.html',
  styleUrls: ['./giphy-list.component.scss'],
})
export class GiphyListComponent {
  @Input() giphyList: Array<Giphy> | null;
  @Output() isLoadMore = new EventEmitter<boolean>();
  
  @ViewChild('container') giphyListContainer: ElementRef<HTMLElement>;
  
  constructor() {}

  onScroll(): void {
    const scrollPosition =
      this.giphyListContainer.nativeElement.scrollTop +
      this.giphyListContainer.nativeElement.clientHeight;

    const totalHeight = this.giphyListContainer.nativeElement.scrollHeight;

    if (scrollPosition === totalHeight) {
      this.isLoadMore.emit(true);
    }
  }
}
