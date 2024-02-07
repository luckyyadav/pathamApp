import { Component } from '@angular/core';
import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';

const TAG: any = "Stop Points Component :";

@Component({
  selector: 'app-stop-points',
  templateUrl: './stop-points.component.html',
  styleUrls: ['./stop-points.component.scss']
})
export class StopPointsComponent {

  constructor(private webService: WebService, private urlConst: Constant) { }

  routePointsList: any;

  dataColumns = [
    { columnDef: 'route_leg_name', header: 'Route Zone' },
    { columnDef: 'route_point_name', header: 'Route Point' },
    { columnDef: 'description', header: 'Description' },
    { columnDef: 'stop_name', header: 'Stop Name' },
    { columnDef: 'route_point_pickUptime', header: 'Pickup Time' },
    { columnDef: 'route_point_Droptime', header: 'Drop Time' },
    { columnDef: 'start_date', header: 'Start Date' },
    { columnDef: 'end_date', header: 'End Date' },
    { columnDef: 'active_flag', header: 'Status' },

    {
      tableCols: [
        'route_leg_name', 
        'route_point_name', 
        'description', 'stop_name', 
        'route_point_pickUptime', 
        'route_point_Droptime', 
        'start_date', 
        'end_date',
        'active_flag'
      ]
    },

  ];

  ngOnInit(): void {
    this.getStopPoints();
  }

  getStopPoints() {
    this.webService
      .getMethod(this.urlConst.Transportation.getStopPoints)
      .subscribe((res) => {
        this.routePointsList = res.data.tpt_routes_points_detatils;
        // console.log(TAG, "Api Data", res.data.tpt_routes_points_detatils);
      });
  }



}
