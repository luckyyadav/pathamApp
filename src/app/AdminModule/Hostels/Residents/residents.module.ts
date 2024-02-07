import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentsRoutingModule } from './residents-routing.module';
import { ResidentsComponent } from './residents.component';
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';



@NgModule({
  declarations: [ResidentsComponent],
  imports: [
    CommonModule,
    ResidentsRoutingModule,
    SharedCommonComponentModule
  ]
})
export class ResidentsModule { }
