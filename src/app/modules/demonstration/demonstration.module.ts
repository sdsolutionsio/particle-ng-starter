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

@NgModule({
  declarations: [
    DashboardComponent
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
