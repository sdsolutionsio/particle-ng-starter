import { Component } from '@angular/core';
import {ThemingService} from "@sdsolutions/particle-ng";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  currentTheme = this.themingService.selectedTheme;

  sliderValue: any;

  constructor(
    private themingService: ThemingService
  ) { }

}
