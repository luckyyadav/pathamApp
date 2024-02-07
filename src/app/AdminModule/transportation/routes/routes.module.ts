import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesComponent } from './routes.component';
import { RoutesRoutingModule } from './routes-routing.module';

import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';



@NgModule({
  declarations: [RoutesComponent],
  imports: [
    CommonModule,
    RoutesRoutingModule,
    SharedCommonComponentModule,
  ]
})
export class RoutesModule { }
