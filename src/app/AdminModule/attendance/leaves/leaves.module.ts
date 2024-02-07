import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeavesRoutingModule } from './leaves-routing.module';
import { LeavesComponent } from './leaves.component';
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';

@NgModule({
  declarations: [LeavesComponent],
  imports: [
    CommonModule,
    LeavesRoutingModule,
    SharedCommonComponentModule
  ]
})
export class LeavesModule { }
