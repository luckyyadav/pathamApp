import { Component } from '@angular/core';

import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent {
  constructor(private webServices: WebService, private constant: Constant) {}

  studentList: any;

  dataColumns = [
    { columnDef: 'slno', header: 'SI.' },
    { columnDef: 'fullName', header: 'Student Name' },
    { columnDef: 'className', header: 'Class' },
    { columnDef: 'attend_date', header: 'Attendance' },
    { columnDef: 'creator', header: 'Created By' },
    {
      tableCols: ['slno', 'fullName', 'className', 'attend_date', 'creator'],
    },
  ];

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents() {
    this.webServices
      .getMethod(`${this.constant.Attendance.getStudents}/1`)
      .subscribe((res) => {
        this.studentList = res.data.todayattendance;
        console.log('Student ', res.data);
      });
  }
}
