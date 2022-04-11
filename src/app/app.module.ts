import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {
    LocalStorageService,
    ParticleAccordionModule, ParticleLayoutModule, ParticlePopoverModule, ParticleProfilePicModule,
    ParticlePushContainerModule,
    ParticleScrollToTopModule
} from '@sdsolutions/particle-ng';
import {DemonstrationModule} from './modules/demonstration/demonstration.module';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {HomeComponent} from './layout/home/home.component';
import {MenuComponent} from './layout/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent
  ],
    imports: [
        BrowserModule,
        DemonstrationModule,
        AppRoutingModule,
        ParticlePushContainerModule,
        ParticleAccordionModule,
        ParticleScrollToTopModule,
        ParticlePopoverModule,
        ParticleProfilePicModule,
        ParticleLayoutModule
    ],
  providers: [
    LocalStorageService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
