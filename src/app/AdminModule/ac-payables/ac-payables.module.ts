import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcPayablesRoutingModule } from './ac-payables-routing.module';
import { CommonImportModule } from '../../featureModule/commonImport.module';
import { MyMaterialModule } from '../../featureModule/my-material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AcPayablesRoutingModule,
    CommonImportModule,
    MyMaterialModule,
  ],
})
export class AcPayablesModule {}
