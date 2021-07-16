import {
  Component,
  ElementRef,
  ViewChild,
  ChangeDetectorRef
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('shelf') shelf?: ElementRef;

  shelfChildWidth = 0;
  open = false;

  positionInput = new FormControl('left');
  typeInput = new FormControl('shift');
  positionOptions = ['left', 'right'];
  typeOptions = ['shift', 'float'];

  get position() {
    return this.positionInput.value;
  }
  get type() {
    return this.typeInput.value;
  }

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    if (this.shelf) {
      this.shelfChildWidth = this.shelf.nativeElement.children[0].clientWidth;
      this.cdr.detectChanges();
    }
  }
}
