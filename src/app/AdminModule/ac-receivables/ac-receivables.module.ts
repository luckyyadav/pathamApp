import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcReceivablesRoutingModule } from './ac-receivables-routing.module';
import { CommonImportModule } from '../../featureModule/commonImport.module';
import { MyMaterialModule } from '../../featureModule/my-material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AcReceivablesRoutingModule,
    CommonImportModule,
    MyMaterialModule,
  ],
})
export class AcReceivablesModule { }
