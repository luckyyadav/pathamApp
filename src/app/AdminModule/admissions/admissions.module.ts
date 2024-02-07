import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmissionsRoutingModule } from './admissions-routing.module';
import { CommonImportModule } from '../../featureModule/commonImport.module';
import { MyMaterialModule } from '../../featureModule/my-material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdmissionsRoutingModule,
    CommonImportModule,
    MyMaterialModule,
  ],
})
export class AdmissionsModule { }
