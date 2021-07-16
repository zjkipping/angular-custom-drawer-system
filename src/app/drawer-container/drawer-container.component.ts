import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  ViewChild
} from '@angular/core';

const animationDuration = 200;

@Component({
  selector: 'app-drawer-container',
  templateUrl: './drawer-container.component.html',
  styleUrls: ['./drawer-container.component.scss'],
  animations: [
    trigger('drawerSlide', [
      state(
        'closed',
        style({
          transform: 'translate3d({{hiddenPosition}}, 0, 0)',
          opacity: 0
        }),
        { params: { hiddenPosition: 0 } }
      ),
      state('open', style({ transform: 'translate3d(0, 0, 0)', opacity: 1 })),
      transition('closed <=> open', animate(animationDuration))
    ]),
    trigger('contentSlide', [
      state('closed', style({ margin: '0 0 0 0' })),
      state(
        'open',
        style({ margin: '0 {{rightMargin}}px 0 {{leftMargin}}px' }),
        {
          params: { rightMargin: 0, leftMargin: 0 }
        }
      ),
      transition('closed <=> open', animate(animationDuration))
    ])
  ]
})
export class DrawerContainerComponent implements AfterViewInit {
  @ViewChild('drawer') drawer?: ElementRef;

  @Input() type: 'float' | 'shift' = 'float';
  @Input() position: 'left' | 'right' = 'left';
  @Input() open = false;

  drawerWidth = 0;

  get animationState() {
    return this.open ? 'open' : 'closed';
  }

  get drawerSlideParams() {
    return { hiddenPosition: this.position === 'left' ? '-100%' : '100%' };
  }

  get contentSlideParams() {
    if (this.type === 'float') {
      return { leftMargin: 0, rightMargin: 0 };
    }
    return {
      leftMargin: this.position === 'left' ? this.drawerWidth : 0,
      rightMargin: this.position === 'right' ? this.drawerWidth : 0
    };
  }

  get positionClass() {
    return this.position + '-drawer';
  }

  constructor(private cds: ChangeDetectorRef) {}

  ngAfterViewInit() {
    if (this.drawer) {
      this.drawerWidth = this.drawer.nativeElement.clientWidth;
      this.cds.detectChanges();
    }
  }
}
