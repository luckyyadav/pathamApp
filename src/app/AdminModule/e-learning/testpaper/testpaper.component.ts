import { Component, OnInit } from '@angular/core';
import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';

@Component({
  selector: 'app-testpaper',
  templateUrl: './testpaper.component.html',
  styleUrls: ['./testpaper.component.scss']
})
export class TestpaperComponent implements OnInit {
  allTestPaper: any;

  constructor(private webServices: WebService, private constant: Constant) {}

  testpaperDataColumns = [
    { columnDef: 'sl', header: 'Sl.', disableSort: 'true' },
    { columnDef: 'question_set_title', header: 'Name' },
    { columnDef: 'exam_type', header: 'Type' },
    { columnDef: 'created_at', header: 'Created Date' },
    { columnDef: 'totalQuestion', header: 'Total Question' },
    { columnDef: 'creator', header: 'Created By', disableSort: 'true' },
    {
      columnDef: 'action',
      header: 'Operation',
      actions: ['download', 'edit'],
      disableSort: 'true',
    },
    {
      tableCols: [
        'sl',
        'question_set_title',
        'exam_type',
        'created_at',
        'totalQuestion',
        'creator',
        'action',
      ],
    },
  ];

  ngOnInit(): void {
    this.getAllTestPaper();
  }

  getAllTestPaper() {
    this.webServices.showLoader();
    this.webServices
      .getMethod(this.constant.elearning.listtestpaper)
      .subscribe((res) => {
        this.allTestPaper = res.data.questions;
        this.webServices.hideLoader();
      });
  }
}
