import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { StudentRouteComponent } from './student-route.component';

const routes: Routes = [
  {
    path: '',
    component: StudentRouteComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRouteRoutingModule {}
