import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {Layout1Component} from './pages/layout1/layout1.component';
import {Layout2Component} from './pages/layout2/layout2.component';
import {Layout3Component} from './pages/layout3/layout3.component';
import {Layout4Component} from './pages/layout4/layout4.component';
import {Layout5Component} from './pages/layout5/layout5.component';
import {Layout6Component} from './pages/layout6/layout6.component';
import {Layout7Component} from './pages/layout7/layout7.component';
import {Layout8Component} from './pages/layout8/layout8.component';
import {Layout9Component} from './pages/layout9/layout9.component';

const routes: Routes = [
  {path: 'demo', component: DashboardComponent},
  {path: 'layout1', component: Layout1Component},
  {path: 'layout2', component: Layout2Component},
  {path: 'layout3', component: Layout3Component},
  {path: 'layout4', component: Layout4Component},
  {path: 'layout5', component: Layout5Component},
  {path: 'layout6', component: Layout6Component},
  {path: 'layout7', component: Layout7Component},
  {path: 'layout8', component: Layout8Component},
  {path: 'layout9', component: Layout9Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DemonstrationRoutingModule {
}
