import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OnlineexamsComponent } from './onlineexams.component';

const routes: Routes = [
  {
    path: '',
    component: OnlineexamsComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlineexamsRoutingModule { }
