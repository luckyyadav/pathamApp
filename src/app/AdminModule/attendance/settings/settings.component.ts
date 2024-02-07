import { Component } from '@angular/core';

import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';

const TAG = 'Setting Component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  constructor(private webServices: WebService, private constant: Constant) {}

  AttendSettingList: any;

  dataColumns = [
    { columnDef: 'id', header: 'SI.' },
    {
      columnDef: 'attendance_student_type',
      header: 'Student Attendance Type  ',
    },
    { columnDef: 'attendance_area_centre_latitude', header: 'Latitude' },
    { columnDef: 'attendance_area_centre_longitude', header: 'Longitude' },
    { columnDef: 'login_time', header: 'Login' },
    { columnDef: 'logout_time', header: 'Logout' },
    { columnDef: 'shift_name', header: 'Shift Name' },

    {
      tableCols: [
        'id',
        'attendance_student_type',
        'attendance_area_centre_latitude',
        'attendance_area_centre_longitude',
        'login_time',
        'logout_time',
        'shift_name',
      ],
    },
  ];

  ngOnInit(): void {
    this.getAllSetting();
  }

  getAllSetting() {
    this.webServices
      .getMethod(`${this.constant.Attendance.getAttendSettingList}/1`)
      .subscribe((res) => {
        this.AttendSettingList = res.data.SchoolSettings;
        console.log(TAG, 'Setting List', res.data.SchoolSettings);
      });
  }
}
