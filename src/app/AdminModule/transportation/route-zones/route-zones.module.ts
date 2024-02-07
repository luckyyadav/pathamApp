import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteZonesComponent } from './route-zones.component';
import { RouteZonesRoutingModule } from './route-zones-routing.module';

import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';



@NgModule({
  declarations: [ RouteZonesComponent ],
  imports: [
    CommonModule,
    RouteZonesRoutingModule,
    SharedCommonComponentModule
  ]
})
export class RouteZonesModule { }
