import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {FeeCategoriesComponent} from './fee-categories.component'

const routes: Routes = [
  { path: '', component: FeeCategoriesComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class FeeCategoriesRoutingModule { }
