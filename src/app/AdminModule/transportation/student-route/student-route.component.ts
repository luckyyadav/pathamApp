import { Component } from '@angular/core';
import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';

const TAG: any = 'Student Route Component :';

@Component({
  selector: 'app-student-route',
  templateUrl: './student-route.component.html',
  styleUrls: ['./student-route.component.scss'],
})
export class StudentRouteComponent {
  constructor(private webService: WebService, private urlConst: Constant) {}

  studentRouteList: any;

  dataColumns = [
    { columnDef: 'id', header: 'Sl.' },
    { columnDef: 'className', header: 'Class' },
    { columnDef: 'sectionName', header: 'Section' },
    { columnDef: 'fullName', header: 'Student' },
    { columnDef: 'vehicle_name', header: 'Vehicle' },
    { columnDef: 'route_point_name', header: 'Route Point' },
    { columnDef: 'cost', header: 'Cost' },
    { columnDef: 'pickUpTime', header: 'Pickup Time' },
    { columnDef: 'DropTime', header: 'Drop Time' },

    {
      tableCols: [
        'id',
        'className',
        'sectionName',
        'fullName',
        'vehicle_name',
        'route_point_name',
        'cost',
        'pickUpTime',
        'DropTime',
      ],
    },
  ];

  ngOnInit(): void {
    this.getStudentRoutes();
  }

  getStudentRoutes() {
    this.webService
      .getMethod(this.urlConst.Transportation.getStudentRoutes)
      .subscribe((res) => {
        this.studentRouteList = res.data.student_transportationdetails;
        console.log(TAG, 'Api Data', res.data.student_transportationdetails);
      });
  }
}
