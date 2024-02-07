import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShiftsRoutingModule } from './shifts-routing.module';
import { ShiftsComponent } from './shifts.component';
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';

@NgModule({
  declarations: [ShiftsComponent],
  imports: [
    CommonModule,
    ShiftsRoutingModule,
    SharedCommonComponentModule
  ]
})
export class ShiftsModule { }
