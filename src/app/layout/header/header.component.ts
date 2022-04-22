import {Component, EventEmitter, Output} from '@angular/core';
import {ThemingService} from "@sdsolutions/particle-ng";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output()
  menuToggle: EventEmitter<any> = new EventEmitter<any>();
  slideoverRight: any;
  slideoverLeft: any;
  slideoverBottom: any;
  slideoverTop: any;

  currentTheme = this.themingService.selectedTheme;

  constructor(private themingService: ThemingService) { }

  showMenu(): void {
    this.menuToggle.emit();
  }
}
