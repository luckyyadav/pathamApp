import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaryRoutingModule } from './diary-routing.module';
import { DiaryComponent } from './diary.component';

/* Common Component import */
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DiaryComponent],
  imports: [
    CommonModule,
    DiaryRoutingModule,
    SharedCommonComponentModule
  ]
})
export class DiaryModule { }
