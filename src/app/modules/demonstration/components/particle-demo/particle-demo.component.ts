import {Component, Input} from '@angular/core';
import {ComponentDetails} from "../../models/component-details.model";

@Component({
  selector: 'app-particle-demo',
  templateUrl: './particle-demo.component.html'
})
export class ParticleDemoComponent {

  @Input()
  componentDetails: ComponentDetails = null as any;

  constructor() { }

}
