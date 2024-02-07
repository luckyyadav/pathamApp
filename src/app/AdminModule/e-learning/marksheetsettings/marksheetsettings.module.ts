import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarksheetsettingsComponent } from './marksheetsettings.component';
import { MarksheetsettingsRoutingModule } from './marksheetsettings-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Common Component import */
import {CommonImportModule} from '../../../featureModule/commonImport.module';
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';


@NgModule({
  declarations: [MarksheetsettingsComponent],
  imports: [
    CommonModule,
    MarksheetsettingsRoutingModule,
    SharedCommonComponentModule,
    FormsModule,
    ReactiveFormsModule,
    CommonImportModule
  ]
})
export class MarksheetsettingsModule { }
