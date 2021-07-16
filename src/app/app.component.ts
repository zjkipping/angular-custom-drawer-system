import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  open = false;
  useOverlay = true;

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
}
