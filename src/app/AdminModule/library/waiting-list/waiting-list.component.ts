import { Component, OnInit } from '@angular/core';
import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';
import { ModalAndDataService } from '../../../services/modal-ServiceAndData-Service/modalData.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationFormsService } from '../../../services/FormValidationServices/validation-forms.service';

@Component({
  selector: 'app-waiting-list',
  templateUrl: './waiting-list.component.html',
  styleUrls: ['./waiting-list.component.scss']
})
export class WaitingListComponent implements OnInit {
  dataSource: any;

  waitingListDataColumns = [
    { columnDef: 'sl', header: 'SL.' },
    { columnDef: 'bookName', header: 'Item Name' },
    { columnDef: 'Book_code', header: 'Item Code' },
    { columnDef: 'username', header: 'Student Name' },
    { columnDef: 'className + sectionName', header: 'Class' },
    { columnDef: 'status', header: 'Status' },
    { columnDef: 'issue_date', header: 'Issue Date' },
    {
      tableCols: [
        'sl',
        'bookName',
        'Book_code',
        'username',
        'className + sectionName',
        'status',
        'issue_date',
      ],
    },
  ];

  constructor(private webService: WebService, private constant: Constant) {}

  ngOnInit(): void {
    this.getWaitingListItem();
  }

  getWaitingListItem() {
    this.webService
      .getMethod(this.constant.Library.waitinglistitems)
      .subscribe((res) => {
        this.dataSource = res.data.retrive_wait_list;
        console.log('Res Waiting-list', res);
      });
  }
}
