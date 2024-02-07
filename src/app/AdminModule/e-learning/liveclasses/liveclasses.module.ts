import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveclassesComponent } from './liveclasses.component';
import { LiveclassesRoutingModule } from './liveclasses-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Common Component import */
import {CommonImportModule} from '../../../featureModule/commonImport.module';
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';


@NgModule({
  declarations: [LiveclassesComponent],
  imports: [
    CommonModule,
    LiveclassesRoutingModule,
    SharedCommonComponentModule,
    FormsModule,
    ReactiveFormsModule,
    CommonImportModule
  ]
})
export class LiveclassesModule { }
