import { Component } from '@angular/core';
import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';


const TAG: any = "Route Zone Component :";

@Component({
  selector: 'app-route-zones',
  templateUrl: './route-zones.component.html',
  styleUrls: ['./route-zones.component.scss']
})
export class RouteZonesComponent {

  constructor(private webService: WebService, private urlConst: Constant) { }

  routeZonesList: any;

  dataColumns = [
    { columnDef: 'route_name', header: 'Route' },
    { columnDef: 'route_leg_name', header: 'Route Zone' },

    {
      tableCols: ['route_name', 'route_leg_name']
    },

  ];

  ngOnInit(): void {
    this.getRouteZones();
  }

  getRouteZones() {
    this.webService
      .getMethod(this.urlConst.Transportation.getRouteZones)
      .subscribe((res) => {
          this.routeZonesList = res.data.tpt_routes_zones_detatils;
          // console.log(TAG, "Api Data", res.data.tpt_routes_zones_detatils);
      });
  }


}
