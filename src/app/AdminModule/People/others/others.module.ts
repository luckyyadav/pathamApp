import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OthersComponent } from './others.component';
import { OthersRoutingModule } from './others-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Common Component module with material module*/

import {CommonImportModule} from '../../../featureModule/commonImport.module';
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';

@NgModule({
  declarations: [OthersComponent],
  imports: [
    CommonModule,
    OthersRoutingModule,
    SharedCommonComponentModule,
    FormsModule,
    ReactiveFormsModule,
    CommonImportModule
  ],
  exports: [],
  providers: [],
})
export class OthersModule {}
