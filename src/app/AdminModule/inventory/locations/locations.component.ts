import { Component, OnInit } from '@angular/core';
import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  constructor(private webService: WebService, private urlConst: Constant) {}

  dataSource: any;

  dataColumns = [
    { columnDef: 'sl', header: 'Sl.' },
    { columnDef: 'name', header: 'Location Name' },
    { columnDef: 'longitude', header: 'Longitude' },
    { columnDef: 'latitude', header: 'Latitude' },
    { columnDef: 'address', header: 'Address' },
    { columnDef: 'status', header: 'Status' },
    { columnDef: 'created_at', header: 'Creation Date' },

    {
      tableCols: [
        'sl',
        'name',
        'longitude',
        'latitude',
        'address',
        'status',
        'created_at',
      ],
    },
  ];

  ngOnInit(): void {
    this.getInvCategory();
  }

  getInvCategory() {
    this.webService
      .getMethod(this.urlConst.Inventory.locationListall)
      .subscribe((res) => {
        this.dataSource = res.data.inv_location;
        console.log('Location Inventory', res);
      });
  }
}
