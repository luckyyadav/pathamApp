import { Component } from '@angular/core';
import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';

@Component({
  selector: 'app-support-calls',
  templateUrl: './support-calls.component.html',
  styleUrls: ['./support-calls.component.scss'],
})
export class SupportCallsComponent {
  AllSupportCalls: any;

  constructor(private webServices: WebService, private constant: Constant) {}

  dataColumns = [
    {
      columnDef: 'customer_id',
      header: 'Customer ID',
    },
    { columnDef: 'organization_name', header: 'Name of Organization' },
    {
      columnDef: 'contact_name',
      header: 'Contact Name.',
    },
    {
      columnDef: 'contact_type',
      header: 'Contact Type',
    },
    { columnDef: 'description', header: 'Description' },
    { columnDef: 'created_at', header: 'Date and Time' },

    {
      columnDef: 'action',
      header: 'Action',
      actions: ['download', 'edit'],
      disableSort: 'true',
    },
    {
      tableCols: [
        'customer_id',
        'organization_name',
        'contact_name',
        'contact_type',
        'description',
        'created_at',
        'action',
      ],
    },
  ];

  ngOnInit(): void {
    this.getAllSupportCalls();
  }

  getAllSupportCalls() {
    this.webServices
      .getMethod(this.constant.helpCenter.allSupportCall)
      .subscribe((res) => {
        this.AllSupportCalls = res.data.support_calls_data;

        console.log(res);
      });
  }
}
