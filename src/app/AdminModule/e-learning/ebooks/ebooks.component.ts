import { Component, OnInit } from '@angular/core';
import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';

@Component({
  selector: 'app-ebooks',
  templateUrl: './ebooks.component.html',
  styleUrls: ['./ebooks.component.scss']
})
export class EbooksComponent implements OnInit {
  allEbooks: any;

  constructor(private webServices: WebService, private constant: Constant) {}

  ebooksDataColumns = [
    { columnDef: 'sl', header: 'Sl.' },
    { columnDef: 'book_title', header: 'Book' },
    { columnDef: 'available_from', header: 'Availablity', disableSort: 'true' },
    { columnDef: 'subject_name', header: 'Subject' },
    { columnDef: 'class_name', header: 'Class' },
    { columnDef: 'board_name_key', header: 'Board', disableSort: 'true' },
    {
      columnDef: 'action',
      header: 'Action',
      actions: ['download', 'edit'],
      disableSort: 'true',
    },
    {
      tableCols: [
        'sl',
        'book_title',
        'available_from',
        'subject_name',
        'class_name',
        'board_name_key',
        'action',
      ],
    },
  ];

  ngOnInit(): void {
    this.getAllEbooks();
  }

  getAllEbooks() {
    this.webServices.showLoader();
    this.webServices
      .getMethod(this.constant.elearning.listebooks)
      .subscribe((res) => {
        this.allEbooks = res.data.subjects;
        this.webServices.hideLoader();
      });
  }
}
