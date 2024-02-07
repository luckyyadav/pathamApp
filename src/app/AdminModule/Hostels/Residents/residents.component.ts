import { Component } from '@angular/core';

import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';

const TAG = 'Hostel Residents Component';

@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.scss'],
})
export class ResidentsComponent {
  constructor(private webServices: WebService, private constant: Constant) {}

  residentList: any;

  dataColumns = [
    { columnDef: 'id', header: 'SI.' },
    { columnDef: 'fullName', header: 'Name' },
    { columnDef: 'hostel_resident_type', header: 'Resident Type' },
    { columnDef: 'studentRollId', header: 'Roll No./Employee No.' },
    { columnDef: 'hostelTitle', header: 'Hostel Name' },
    { columnDef: 'building_title', header: 'Hostel Building Name' },
    {
      columnDef: 'catTitle',
      header: 'Categories Title',
    },
    { columnDef: 'catFees', header: 'Categories Fees(P.M)' },

    { columnDef: 'room_number', header: 'Room No' },
    { columnDef: 's_bed_id', header: 'Bed No' },
    { columnDef: 'start_date', header: 'Start Date' },
    { columnDef: 'end_date', header: 'End Date' },

    {
      tableCols: [
        'id',
        'fullName',
        'hostel_resident_type',
        'studentRollId',
        'hostelTitle',
        'building_title',
        'catTitle',
        'catFees',
        'room_number',
        's_bed_id',
        'start_date',
        'end_date',
      ],
    },
  ];

  ngOnInit(): void {
    this.getAllResidents();
  }

  getAllResidents() {
    this.webServices
      .getMethod(this.constant.Hostel.getResidenstList)
      .subscribe((res) => {
        this.residentList = res.subcriberList;
        console.log(TAG, 'Residents List', res.subcriberList);
      });
  }
}
