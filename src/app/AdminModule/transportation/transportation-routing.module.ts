import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'vehicles',
        loadChildren: () =>
          import('./vehicles/vehicles.module').then((m) => m.VehiclesModule),
      },
      {
        path: 'routes',
        loadChildren: () =>
          import('./routes/routes.module').then((m) => m.RoutesModule),
      },
      {
        path: 'route_zones',
        loadChildren: () =>
          import('./route-zones/route-zones.module').then(
            (m) => m.RouteZonesModule
          ),
      },
      {
        path: 'stop-points',
        loadChildren: () =>
          import('./stop-points/stop-points.module').then(
            (m) => m.StopPointsModule
          ),
      },
      {
        path: 'route-zone-costs',
        loadChildren: () =>
          import('./route-zone-costs/route-zone-costs.module').then(
            (m) => m.RouteZoneCostsModule
          ),
      },
      {
        path: 'student-route',
        loadChildren: () =>
          import('./student-route/student-route.module').then(
            (m) => m.StudentRouteModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransportationRoutingModule {}
