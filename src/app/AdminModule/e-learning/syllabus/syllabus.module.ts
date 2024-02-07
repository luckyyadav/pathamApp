import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SyllabusComponent } from './syllabus.component';
import { SyllabusRoutingModule } from './syllabus-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Common Component import */
import {CommonImportModule} from '../../../featureModule/commonImport.module';
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';


@NgModule({
  declarations: [SyllabusComponent],
  imports: [
    CommonModule,
    SyllabusRoutingModule,
    SharedCommonComponentModule,
    FormsModule,
    ReactiveFormsModule,
    CommonImportModule
  ]
})
export class SyllabusModule { }
