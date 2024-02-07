import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RoutesComponent } from './routes.component';

const routes: Routes = [
  {
    path: '',
    component: RoutesComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}
