import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumniComponent } from './alumni.component';
import { AlumniRoutingModule } from './alumni-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IconModule } from '@coreui/icons-angular';
import { CommonImportModule } from '../../../featureModule/commonImport.module';

/* Common Component module with material module*/

import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';

@NgModule({
  declarations: [AlumniComponent],
  imports: [
    CommonModule,
    AlumniRoutingModule,
    FormsModule,
    IconModule,
    CommonModule,
    ReactiveFormsModule,

    CommonImportModule,

    SharedCommonComponentModule,
  ],
  exports: [],
  providers: [],
})
export class AlumniModule {}
