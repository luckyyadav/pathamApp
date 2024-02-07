import { Component } from '@angular/core';

import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';

const TAG = 'Shift Component';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.scss'],
})
export class ShiftsComponent {
  constructor(private webServices: WebService, private constant: Constant) {}

  ShiftsList: any;

  dataColumns = [
    { columnDef: 'id', header: 'SI.' },
    { columnDef: 'shift_name', header: 'Name' },
    { columnDef: 'zone_name', header: 'Time Zone' },
    { columnDef: 'in_time', header: 'In Time' },
    { columnDef: 'out_time', header: 'Out Time' },
    { columnDef: 'greece_time', header: 'Grace Time' },
    { columnDef: 'working_hour', header: 'Working Hour (In a day)' },
    { columnDef: 'working_day', header: 'Working Day (In A Week)' },

    {
      tableCols: [
        'id',
        'shift_name',
        'zone_name',
        'in_time',
        'out_time',
        'greece_time',
        'working_hour',
        'working_day',
      ],
    },
  ];

  ngOnInit(): void {
    this.getAllShifts();
  }

  getAllShifts() {
    this.webServices
      .getMethod(this.constant.Attendance.getShiftList)
      .subscribe((res) => {
        this.ShiftsList = res.data.allShifts;
        console.log(TAG, 'Shift List', res.data.allShifts);
      });
  }
}
