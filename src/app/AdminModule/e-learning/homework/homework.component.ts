import { Component, OnInit } from '@angular/core';
import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})
export class HomeworkComponent implements OnInit {
  allHomework: any;

  constructor(private webServices: WebService, private constant: Constant) {}

  homeworkDataColumns = [
    { columnDef: 'academic_year_id', header: 'ID.' },
    { columnDef: 'AssignTitle', header: 'Title' },
    { columnDef: 'AssignDescription', header: 'Description' },
    { columnDef: 'className', header: 'Class' },
    { columnDef: 'subjectTitle', header: 'Subject Name', disableSort: 'true'},
    { columnDef: 'status', header: 'Status' },
    { columnDef: 'published', header: 'Published' },
    { columnDef: 'deadline', header: 'Deadline' },
    { columnDef: 'fullName', header: 'Teacher' },
    { columnDef: 'created_at', header: 'Date Created' },
    {
      columnDef: 'action',
      header: 'Action',
      actions: ['download', 'edit'],
      disableSort: 'true',
    },
    {
      tableCols: [
        'academic_year_id',
        'AssignTitle',
        'AssignDescription',
        'className',
        'subjectTitle',
        'status',
        'published',
        'deadline',
        'fullName',
        'created_at',
        'action',
      ],
    },
  ];

  ngOnInit(): void {
    this.getAllHomework();
  }

  getAllHomework() {
    this.webServices.showLoader();
    this.webServices
      .getMethod(this.constant.elearning.listhomework)
      .subscribe((res) => {
        this.allHomework = res.assignments;
        this.webServices.hideLoader();
      });
  }
}
