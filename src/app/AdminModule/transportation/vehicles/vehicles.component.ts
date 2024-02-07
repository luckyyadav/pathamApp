import { Component } from '@angular/core';
import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';

const TAG: any = "Vehicles Component :";

@Component({
  selector: 'app-vechiles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
})

export class VehiclesComponent {

  constructor(private webService: WebService, private urlConst: Constant) { }

  vehiclesList: any;

  dataColumns = [
    { columnDef: 'vehicle_name', header: 'Vehicle Name' },
    { columnDef: 'vehicle_type', header: 'Vehicle Type' },
    { columnDef: 'make', header: 'Make' },
    { columnDef: 'model', header: 'Model' },
    { columnDef: 'manufacture_year', header: 'Make Year' },
    { columnDef: 'no_of_seats', header: 'No Of Seats' },

    {
      tableCols: ['vehicle_name', 'vehicle_type', 'make', 'model', 'manufacture_year', 'no_of_seats']
    },

  ];

  ngOnInit(): void {
    this.getVehicles();
  }

  getVehicles() {
    this.webService
      .getMethod(this.urlConst.Transportation.getVehicles)
      .subscribe((res) => {
          this.vehiclesList = res.data.tpt_vehicles_detatils;
          console.log(TAG, "Api Data", res.data.tpt_vehicles_detatils);
      });
  }
}
