import {Component, OnInit} from '@angular/core';
import {ThemingService} from '@sdsolutions/particle-ng';
import {THEMES} from './shared/models/themes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'particle-angular-starter-project';

  constructor(
    private themingService: ThemingService
  ) {

  }

  ngOnInit(): void {
    this.themingService.appInit('aac', THEMES);

  }

}
