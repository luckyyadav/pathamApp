import { Component } from '@angular/core';

import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.scss'],
})
export class LeavesComponent {
  constructor(private webServices: WebService, private constant: Constant) {}

  leavesList: any;

  dataColumns = [
    { columnDef: 'id', header: 'SI.' },
    { columnDef: 'fullName', header: 'Name' },
    // { columnDef: 'vacDate', header: 'Leave Date' },
    { columnDef: 'role', header: 'Role' },
    { columnDef: 'leave_type_name', header: 'Leave Type' },
    { columnDef: 'note', header: 'Reason' },
    { columnDef: 'leave_app_status', header: 'Status' },
    {
      tableCols: [
        'id',
        'fullName',
        'role',
        'leave_type_name',
        'note',
        'leave_app_status',
      ],
    },
  ];

  ngOnInit(): void {
    this.getLeavesList();
  }

  getLeavesList() {
    this.webServices
      .getMethod(`${this.constant.Attendance.getLeaves}/1`)
      .subscribe((res) => {
        this.leavesList = res.data.showvacation;
        console.log('Attendance Leave', res.data.showvacation);
      });
  }
}
