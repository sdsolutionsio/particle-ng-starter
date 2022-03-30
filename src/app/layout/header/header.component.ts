import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output()
  menuToggle: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  showMenu(): void {
    this.menuToggle.emit();
  }
}
