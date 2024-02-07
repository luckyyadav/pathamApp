import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {MessageSettingsComponent} from './message-settings.component'

const routes:Routes = [
  {path:'', component:MessageSettingsComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MessageSettingsRoutingModule { }
