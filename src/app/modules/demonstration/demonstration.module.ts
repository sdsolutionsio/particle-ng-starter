import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {
  ParticleAccordionModule,
  ParticleColorPickerModule,
  ParticleDatePickerModule,
  ParticleDialogModule,
  ParticleDropdownModule,
  ParticleEndpointStateModule,
  ParticleIconsModule,
  ParticleKeyfilterModule,
  ParticleMultiSelectModule,
  ParticleNotificationModule,
  ParticleOrdinalNumberPipeModule,
  ParticlePaginatorModule,
  ParticlePopoverModule,
  ParticleProfilePicModule,
  ParticlePushContainerModule,
  ParticleRichTextModule,
  ParticleSlideoverModule,
  ParticleSliderModule,
  ParticleThemingModule,
  ParticleTooltipModule,
  ParticleWeekPickerModule,
  ThemingService
} from '@sdsolutions/particle-ng';

import {DemonstrationRoutingModule} from './demonstration-routing.module';
import { ParticleDemoComponent } from './components/particle-demo/particle-demo.component';
import { Layout1Component } from './pages/layout1/layout1.component';
import { Layout2Component } from './pages/layout2/layout2.component';
import { Layout3Component } from './pages/layout3/layout3.component';
import { Layout4Component } from './pages/layout4/layout4.component';
import { Layout5Component } from './pages/layout5/layout5.component';
import { Layout6Component } from './pages/layout6/layout6.component';
import { Layout7Component } from './pages/layout7/layout7.component';
import { Layout8Component } from './pages/layout8/layout8.component';
import { Layout9Component } from './pages/layout9/layout9.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ParticleDemoComponent,
    Layout1Component,
    Layout2Component,
    Layout3Component,
    Layout4Component,
    Layout5Component,
    Layout6Component,
    Layout7Component,
    Layout8Component,
    Layout9Component
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ParticleTooltipModule,
    ParticleDialogModule,
    ParticleProfilePicModule,
    ParticlePaginatorModule,
    ParticlePushContainerModule,
    ParticleRichTextModule,
    ParticleIconsModule,
    ParticleEndpointStateModule,
    ParticleDatePickerModule,
    ParticleWeekPickerModule,
    ParticleDropdownModule,
    ParticleNotificationModule,
    ParticlePopoverModule,
    ParticleMultiSelectModule,
    ParticleKeyfilterModule,
    ParticleColorPickerModule,
    ParticleSliderModule,
    ParticleOrdinalNumberPipeModule,
    ParticleAccordionModule,
    ParticleThemingModule,
    DemonstrationRoutingModule,
    ParticleSlideoverModule
  ],
  providers: [
    ThemingService
  ]
})
export class DemonstrationModule {
}
