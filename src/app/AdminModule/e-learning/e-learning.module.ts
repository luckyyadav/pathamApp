import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ELearningRoutingModule } from './e-learning-routing.module';
import { CommonImportModule } from '../../featureModule/commonImport.module';
import { MyMaterialModule } from '../../featureModule/my-material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ELearningRoutingModule,
    CommonImportModule,
    MyMaterialModule,
  ]
})
export class ELearningModule { }
