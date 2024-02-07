import { Component, OnInit } from '@angular/core';
import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';

@Component({
  selector: 'app-liveclasses',
  templateUrl: './liveclasses.component.html',
  styleUrls: ['./liveclasses.component.scss']
})
export class LiveclassesComponent implements OnInit {
  allLiveClasses: any;

  constructor(private webServices: WebService, private constant: Constant) {}

  liveclassesDataColumns = [
    { columnDef: 'sl', header: 'Sl.No', disableSort: 'true' },
    { columnDef: 'title', header: 'Title', disableSort: 'true' },
    { columnDef: 'conducted_by', header: 'Conducted by', disableSort: 'true' },
    { columnDef: 'class_name', header: 'Class - Sec', disableSort: 'true' },
    { columnDef: 'subject_name', header: 'Subject', disableSort: 'true' },
    { columnDef: 'timing', header: 'Date & Time', disableSort: 'true' },
    { columnDef: 'status', header: 'Status', disableSort: 'true' },
    {
      columnDef: 'action',
      header: 'Action',
      actions: ['download', 'edit'],
      disableSort: 'true',
    },
    {
      tableCols: [
        'sl',
        'title',
        'conducted_by',
        'class_name',
        'subject_name',
        'timing',
        'status',
        'action',
      ],
    },
  ];

  ngOnInit(): void {
    this.getAllLiveClasses();
  }

  getAllLiveClasses() {
    this.webServices.showLoader();
    this.webServices
      .getMethod(this.constant.elearning.listliveclasses)
      .subscribe((res) => {
        this.allLiveClasses = res.live_classes;
        this.webServices.hideLoader();
      });
  }
}
