import { Component, OnInit } from '@angular/core';
import { Constant } from '../../../services/constant-URL/constant';
import { WebService } from '../../../services/WebServices/webservices.service';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss'],
})
export class DiaryComponent implements OnInit {
  constructor(private constant: Constant, private webserivce: WebService) {}
  AllDiaries: any;

  dataColumns = [
    {
      columnDef: 'title',
      header: 'Title',
    },
    { columnDef: 'diary_content', header: 'Content' },
    {
      columnDef: 'fullName',
      header: 'For',
    },
    {
      columnDef: 'date',
      header: 'Date',
    },
    { columnDef: 'creator_name', header: 'Created By' },

    {
      columnDef: 'action',
      header: 'Action',
      actions: ['download', 'edit'],
      disableSort: 'true',
    },
    {
      tableCols: [
        'title',
        'diary_content',
        'fullName',
        'date',
        'creator_name',
        'action',
      ],
    },
  ];

  ngOnInit(): void {
    this.getAllDiaries();
  }

  getAllDiaries() {
    this.webserivce
      .getMethod(this.constant.Calendar.allDiary)
      .subscribe((res) => {
        console.log(res);
        this.AllDiaries = res.data.diary;
      });
  }
}
