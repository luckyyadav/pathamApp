import { Component, OnInit } from '@angular/core';
import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent implements OnInit {
  AllDocumentsList: any;

  constructor(private webServices: WebService, private constant: Constant) {}

  dataColumns = [
    { columnDef: 'fullName', header: 'Category' },
    { columnDef: 'username', header: 'Names' },
    { columnDef: 'email', header: 'Created Date' },
    { columnDef: 'last_login', header: 'Created By' },
    { columnDef: 'last_logins', header: 'Status' },

    {
      columnDef: 'action',
      header: 'Action',
      actions: ['download', 'edit'],
      disableSort: 'true',
    },

    {
      tableCols: [
        'fullName',
        'username',
        'email',
        'last_login',
        'last_logins',
        'action',
      ],
    },
  ];

  ngOnInit(): void {
    this.getAllDocuments();
  }

  getAllDocuments() {
    this.webServices.showLoader();
    this.webServices
      .getMethod(this.constant.Administration.getAllDocuments)
      .subscribe((res) => {
        this.AllDocumentsList = res.administrator;
        this.webServices.hideLoader();
        console.log('Documents', res);
      });
  }
}
