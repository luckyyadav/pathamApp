import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {MobileSMSComponent} from './mobile-sms.component'

const routes:Routes=[
  {path:'', component: MobileSMSComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MobileSMSRoutingModule { }
