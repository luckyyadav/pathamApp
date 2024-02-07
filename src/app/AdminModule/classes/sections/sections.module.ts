import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsRoutingModule } from './sections-routing.module';
import { SectionsComponent } from './sections.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Common Component import */
import {CommonImportModule} from '../../../featureModule/commonImport.module';
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';



@NgModule({
  declarations: [SectionsComponent],
  imports: [
    CommonModule,
    SectionsRoutingModule,
    SharedCommonComponentModule,
    FormsModule,
    ReactiveFormsModule,
    CommonImportModule
  ]
})
export class SectionsModule { }
