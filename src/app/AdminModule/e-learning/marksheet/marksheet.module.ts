import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarksheetComponent } from './marksheet.component';
import { MarksheetRoutingModule } from './marksheet-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Common Component import */
import {CommonImportModule} from '../../../featureModule/commonImport.module';
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';


@NgModule({
  declarations: [MarksheetComponent],
  imports: [
    CommonModule,
    MarksheetRoutingModule,
    SharedCommonComponentModule,
    FormsModule,
    ReactiveFormsModule,
    CommonImportModule
  ]
})
export class MarksheetModule { }
