import { Component, OnInit } from '@angular/core';
import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';

@Component({
  selector: 'app-lessonplans',
  templateUrl: './lessonplans.component.html',
  styleUrls: ['./lessonplans.component.scss']
})
export class LessonplansComponent implements OnInit {
  allLessonPlans: any;

  constructor(private webServices: WebService, private constant: Constant) {}

  lessonplansDataColumns = [
    { columnDef: 'sl', header: 'Sl.' },
    { columnDef: 'header_title', header: 'Title' },
    { columnDef: 'subject_name', header: 'Subject' },
    { columnDef: 'class_name', header: 'Class' },
    { columnDef: 'section_name', header: 'Section' },
    {
      columnDef: 'action',
      header: 'Action',
      actions: ['download', 'edit'],
      disableSort: 'true',
    },
    {
      tableCols: [
        'sl',
        'header_title',
        'subject_name',
        'class_name',
        'section_name',
        'action',
      ],
    },
  ];

  ngOnInit(): void {
    this.getAllLessonPlans();
  }

  getAllLessonPlans() {
    this.webServices.showLoader();
    this.webServices
      .getMethod(this.constant.elearning.listlessonplans)
      .subscribe((res) => {
        this.allLessonPlans = res.data.lessonList;
        this.webServices.hideLoader();
      });
  }
}