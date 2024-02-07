import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRouteComponent } from './student-route.component';
import { StudentRouteRoutingModule } from './student-route-routing.module';

import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';


@NgModule({
  declarations: [ StudentRouteComponent ],
  imports: [
    CommonModule,
    StudentRouteRoutingModule,
    SharedCommonComponentModule,
  ]
})
export class StudentRouteModule { }
