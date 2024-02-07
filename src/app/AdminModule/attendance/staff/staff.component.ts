import { Component } from '@angular/core';

import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent {

  constructor(private webServices: WebService, private constant: Constant) {}

  staffAttendList: any;

  dataColumns = [
    { columnDef: 'slno', header: 'SI.' },
    { columnDef: 'fullName', header: 'Staff Name' },
    { columnDef: 'attend_date', header: 'Attendance' },
    { columnDef: 'creator', header: 'Created By' },
    {
      tableCols: ['slno', 'fullName', 'attend_date', 'creator'],
    },
  ];

  ngOnInit(): void {
    this.getStaffAttendance();
  }

  getStaffAttendance() {
    this.webServices
      .getMethod(`${this.constant.Attendance.getStaffAttendance}/1`)
      .subscribe((res) => {
        this.staffAttendList = res.data.todayattendance;
        console.log('Item Inventory', res.data.todayattendance);
      });
  }

}
