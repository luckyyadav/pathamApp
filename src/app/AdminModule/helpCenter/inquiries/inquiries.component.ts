import { Component, OnInit } from '@angular/core';
import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';

@Component({
  selector: 'app-inquiries',
  templateUrl: './inquiries.component.html',
  styleUrls: ['./inquiries.component.scss'],
})
export class InquiriesComponent implements OnInit {
  AllInquiries: any;

  constructor(private webServices: WebService, private constant: Constant) {}

  dataColumns = [
    {
      columnDef: 'name',
      header: 'Name',
      link: 'name',
    },
    { columnDef: 'address', header: 'Address' },
    {
      columnDef: 'mobile_no_primary',
      header: 'Phone No.',
    },
    {
      columnDef: 'reason',
      header: 'Reason',
    },
    { columnDef: 'date', header: 'Date' },
    { columnDef: 'creator_name', header: 'Created By' },

    {
      columnDef: 'action',
      header: 'Action',
      actions: ['download', 'edit'],
      disableSort: 'true',
    },
    {
      tableCols: [
        'name',
        'address',
        'mobile_no_primary',
        'reason',
        'date',
        'creator_name',
        'action',
      ],
    },
  ];

  ngOnInit(): void {
    this.getAllInquiries();
  }

  getAllInquiries() {
    this.webServices.showLoader();
    this.webServices
      .getMethod(this.constant.helpCenter.allInquiries)
      .subscribe((res) => {
        this.AllInquiries = res.data.enquiries;
        this.webServices.hideLoader();
        console.log(res);
      });
  }
}
