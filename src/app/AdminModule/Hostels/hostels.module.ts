import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostelsRoutingModule } from './hostels-routing.module';
import { CommonImportModule } from '../../featureModule/commonImport.module';
import { MyMaterialModule } from '../../featureModule/my-material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HostelsRoutingModule,
    CommonImportModule,
    MyMaterialModule,
  ],
})
export class HostelsModule {}
