import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteZoneCostsComponent } from './route-zone-costs.component';
import { RouteZoneCostsRoutingModule } from './route-zone-costs-routing.module';

import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';




@NgModule({
  declarations: [RouteZoneCostsComponent],
  imports: [
    CommonModule,
    RouteZoneCostsRoutingModule,
    SharedCommonComponentModule,
  ]
})
export class RouteZoneCostsModule { }
