import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostelsComponentRoutingModule } from './hostelsComponent-routing.module';
import { HostelsComponent } from './hostelsComponent.component';
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';



@NgModule({
  declarations: [HostelsComponent],
  imports: [
    CommonModule,
    HostelsComponentRoutingModule,
    SharedCommonComponentModule
  ]
})
export class HostelsComponentModule { }
