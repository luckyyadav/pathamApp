import { Component } from '@angular/core';

import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss'],
})
export class AttendanceComponent {
  constructor(private webServices: WebService, private constant: Constant) {}

  hostelAttendListList: any;

  dataColumns = [
    { columnDef: 'slno', header: 'SI.' },
    { columnDef: 'fullName', header: 'Name' },
    { columnDef: 'hostelTitle', header: 'Hostel' },
    { columnDef: 'building_title', header: 'Building' },
    { columnDef: 'room_number', header: 'Room' },
    { columnDef: 'AttendanceStatus', header: 'Attendance' },

    {
      tableCols: [
        'slno',
        'fullName',
        'hostelTitle',
        'building_title',
        'room_number',
        'AttendanceStatus',
      ],
    },
  ];

  ngOnInit(): void {
    this.getAllAttendList();
  }

  getAllAttendList() {
    this.webServices
      .getMethod(this.constant.Hostel.getAttendanceList)
      .subscribe((res) => {
        this.hostelAttendListList = res.data.todayattendance;
        console.log('Attendance List', res);
      });
  }
}
