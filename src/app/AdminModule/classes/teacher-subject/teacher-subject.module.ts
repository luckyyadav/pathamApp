import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherSubjectRoutingModule } from './teacher-subject-routing.module';
import { TeacherSubjectComponent } from './teacher-subject.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Common Component import */
import {CommonImportModule} from '../../../featureModule/commonImport.module';
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';



@NgModule({
  declarations: [TeacherSubjectComponent],
  imports: [
    CommonModule,
    TeacherSubjectRoutingModule,
    SharedCommonComponentModule,
    FormsModule,
    ReactiveFormsModule,
    CommonImportModule
  ]
})
export class TeacherSubjectModule { }
