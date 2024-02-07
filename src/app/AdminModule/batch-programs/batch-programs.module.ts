import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchProgramsRoutingModule } from './batch-programs-routing.module';
import { CommonImportModule } from '../../featureModule/commonImport.module';
import { MyMaterialModule } from '../../featureModule/my-material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BatchProgramsRoutingModule,
    CommonImportModule,
    MyMaterialModule,
  ],
})
export class BatchProgramsModule { }
