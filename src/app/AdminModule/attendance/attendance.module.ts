import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceRoutingModule } from './attendance-routing.module';
import { CommonImportModule } from '../../featureModule/commonImport.module';
import { MyMaterialModule } from '../../featureModule/my-material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    CommonImportModule,
    MyMaterialModule,
  ],
})
export class AttendanceModule { }
