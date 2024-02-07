import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RouteZonesComponent } from './route-zones.component';

const routes: Routes = [
  {
    path: '',
    component: RouteZonesComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouteZonesRoutingModule {}
