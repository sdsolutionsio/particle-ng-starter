import {Component, ViewChild} from '@angular/core';
import {PushContainerComponent} from "@sdsolutions/particle-ng";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  @ViewChild('pushContainerLeft')
  pushContainerLeft: PushContainerComponent = null as any;

  constructor(
    private router: Router
  ) { }

  toggle(): void {
    this.pushContainerLeft.toggle();
  }

  navigate(page: string, fragment?: string): void {
    this.router.navigate([page], {fragment}).then();

    if (window.innerWidth <= 768) {
      this.pushContainerLeft.close();
    }
  }

}
