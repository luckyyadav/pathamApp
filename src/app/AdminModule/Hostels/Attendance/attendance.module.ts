import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendanceComponent } from './attendance.component';
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';



@NgModule({
  declarations: [AttendanceComponent],
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    SharedCommonComponentModule
  ]
})
export class AttendanceModule { }
