import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { StopPointsComponent } from './stop-points.component';

const routes: Routes = [
  {
    path: '',
    component: StopPointsComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StopPointsRoutingModule {}
