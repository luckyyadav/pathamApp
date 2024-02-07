import { Component } from '@angular/core';
import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';
import { map } from 'rxjs';

const TAG: any = 'Routes Component :';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss'],
})
export class RoutesComponent {
  constructor(private webService: WebService, private urlConst: Constant) {}

  routesList: any;

  dataColumns = [
    { columnDef: 'route_name', header: 'Route' },
    { columnDef: 'description', header: 'Description' },
    { columnDef: 'route_point_name', header: 'Stops' },

    {
      tableCols: ['route_name', 'description', 'route_point_name'],
    },
  ];

  ngOnInit(): void {
    this.getRoutes();
  }

  getRoutes() {
    this.webService
      .getMethod(this.urlConst.Transportation.getRoutes)
      .pipe(
        map((res: any) =>
          res.data.tpt_routes_detatils.map((route: any) => ({
            ...route,
            route_point_name: route.route_point_name
              .map((point: any) => point.route_point_name)
              .join(' -> '),
          }))
        )
      )
      .subscribe((res) => {
        this.routesList = res;
        console.log(TAG, 'Api Data', res);
      });
  }
}
