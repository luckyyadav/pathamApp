import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {ReportsComponentComponent} from './reports-component.component'

const routes:Routes = [
  {path:'', component: ReportsComponentComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  
})
export class ReportsComponentRoutingModule { }
