import { Component, OnInit } from '@angular/core';
import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss'],
})
export class IssuesComponent implements OnInit {
  AllIssues: any;

  constructor(private webServices: WebService, private constant: Constant) {}

  dataColumns = [
    {
      columnDef: 'id',
      header: 'Ticket id',
    },
    { columnDef: 'dept_name', header: 'Department' },
    {
      columnDef: 'category_name',
      header: 'Category',
    },
    {
      columnDef: 'subcategory_title',
      header: 'Sub Category',
    },
    { columnDef: 'priority', header: 'Priority' },
    { columnDef: 'status', header: 'Status' },
    { columnDef: 'sender', header: 'Req. Name' },
    { columnDef: 'phone_no', header: 'Req. Phone' },
    { columnDef: 'created_date', header: 'Date' },

    {
      columnDef: 'action',
      header: 'Action',
      actions: ['download', 'edit'],
      disableSort: 'true',
    },
    {
      tableCols: [
        'id',
        'dept_name',
        'category_name',
        'subcategory_title',
        'priority',
        'status',
        'sender',
        'phone_no',
        'created_date',
        'action',
      ],
    },
  ];

  ngOnInit(): void {
    this.getAllIssues();
  }

  getAllIssues() {
    this.webServices
      .getMethod(this.constant.helpCenter.allIssues)
      .subscribe((res) => {
        this.AllIssues = res.ticket_for_customer;

        console.log(res.ticket_for_customer);
      });
  }
}
