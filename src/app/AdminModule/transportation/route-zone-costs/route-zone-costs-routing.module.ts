import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RouteZoneCostsComponent } from './route-zone-costs.component';

const routes: Routes = [
  {
    path: '',
    component: RouteZoneCostsComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouteZoneCostsRoutingModule {}
