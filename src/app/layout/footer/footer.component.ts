import { Component } from '@angular/core';
import {ThemingService} from "@sdsolutions/particle-ng";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  slideoverRight: any;
  slideoverLeft: any;
  slideoverTop: any;

  currentTheme = this.themingService.selectedTheme;

  constructor(private themingService: ThemingService) { }

}
