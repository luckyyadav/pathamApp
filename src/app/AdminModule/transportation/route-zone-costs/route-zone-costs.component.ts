import { Component } from '@angular/core';
import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';

const TAG: any = "Route Zone Costs Component :";

@Component({
  selector: 'app-route-zone-costs',
  templateUrl: './route-zone-costs.component.html',
  styleUrls: ['./route-zone-costs.component.scss']
})
export class RouteZoneCostsComponent {

  constructor(private webService: WebService, private urlConst: Constant) { }

  routeZoneCostsList: any;

  dataColumns = [
    { columnDef: 'route_leg_name', header: 'Route Zone Name' },
    { columnDef: 'fee_amount_per_month', header: 'Cost' },
   
    {
      tableCols: ['route_leg_name', 'fee_amount_per_month' ]
    },

  ];

  ngOnInit(): void {
    this.getRouteZoneCosts();
  }

  getRouteZoneCosts() {
    this.webService
      .getMethod(this.urlConst.Transportation.getRouteZoneCosts)
      .subscribe((res) => {
          this.routeZoneCostsList = res.data.tpt_routes_zone_cost_detatils;
          // console.log(TAG, "Api Data", res.data.tpt_routes_zone_cost_detatils);
      });
  }

}
