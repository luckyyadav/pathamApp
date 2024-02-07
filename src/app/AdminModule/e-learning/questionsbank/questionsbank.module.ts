import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsbankComponent } from './questionsbank.component';
import { QuestionsbankRoutingModule } from './questionsbank-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Common Component import */
import {CommonImportModule} from '../../../featureModule/commonImport.module';
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';


@NgModule({
  declarations: [QuestionsbankComponent],
  imports: [
    CommonModule,
    QuestionsbankRoutingModule,
    SharedCommonComponentModule,
    FormsModule,
    ReactiveFormsModule,
    CommonImportModule
  ]
})
export class QuestionsbankModule { }
