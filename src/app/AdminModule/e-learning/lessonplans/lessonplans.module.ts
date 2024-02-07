import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonplansComponent } from './lessonplans.component';
import { LessonplansRoutingModule } from './lessonplans-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Common Component import */
import {CommonImportModule} from '../../../featureModule/commonImport.module';
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';


@NgModule({
  declarations: [LessonplansComponent],
  imports: [
    CommonModule,
    LessonplansRoutingModule,
    SharedCommonComponentModule,
    FormsModule,
    ReactiveFormsModule,
    CommonImportModule
  ]
})
export class LessonplansModule { }
