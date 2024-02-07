import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeeCategoriesRoutingModule } from './fee-categories-routing.module';
import { FeeCategoriesComponent } from './fee-categories.component';
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';



@NgModule({
  declarations: [FeeCategoriesComponent],
  imports: [
    CommonModule,
    FeeCategoriesRoutingModule,
    SharedCommonComponentModule
  ]
})
export class FeeCategoriesModule { }
