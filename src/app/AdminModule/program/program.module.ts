import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramComponent } from './program.component';
import { ProgramRoutingModule } from './program-routing.module';
import { CommonImportModule } from '../../featureModule/commonImport.module';
//import { MyMaterialModule } from '../../featureModule/my-material.module';

/* Common Component import */
import { SharedCommonComponentModule } from './../SharedCommonComponentModule/sharedComponent.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProgramComponent],
  imports: [
    CommonModule,
    ProgramRoutingModule,
    CommonImportModule,
    SharedCommonComponentModule,
  ],
})
export class ProgramModule {}
