import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineexamsComponent } from './onlineexams.component';
import { OnlineexamsRoutingModule } from './onlineexams-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Common Component import */
import {CommonImportModule} from '../../../featureModule/commonImport.module';
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';


@NgModule({
  declarations: [OnlineexamsComponent],
  imports: [
    CommonModule,
    OnlineexamsRoutingModule,
    SharedCommonComponentModule,
    FormsModule,
    ReactiveFormsModule,
    CommonImportModule
  ]
})
export class OnlineexamsModule { }
