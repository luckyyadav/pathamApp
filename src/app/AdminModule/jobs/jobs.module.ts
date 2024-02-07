import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component'
import { CommonImportModule } from '../../featureModule/commonImport.module';
import { MyMaterialModule } from '../../featureModule/my-material.module';
import { SharedCommonComponentModule } from '../SharedCommonComponentModule/sharedComponent.module';


@NgModule({
  declarations: [JobsComponent],
  imports: [
    CommonModule,
    JobsRoutingModule,
    CommonImportModule,
    MyMaterialModule,
    SharedCommonComponentModule
  ],
})
export class JobsModule { }
