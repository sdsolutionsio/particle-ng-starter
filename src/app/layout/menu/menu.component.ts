import {Component, ViewChild} from '@angular/core';
import {PushContainerComponent} from "@sdsolutions/particle-ng";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  @ViewChild('pushContainerLeft')
  pushContainerLeft: PushContainerComponent = null as any;

  constructor() { }

  toggle(): void {
    this.pushContainerLeft.toggle();
  }

}
