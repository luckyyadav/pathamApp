import { Component, OnInit } from '@angular/core';
import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
})
export class CertificatesComponent implements OnInit {
  AllCertificateList: any;

  constructor(private webServices: WebService, private constant: Constant) {}

  dataColumns = [
    { columnDef: 'id', header: 'SL.' },
    { columnDef: 'certificate_name', header: 'Name' },
    { columnDef: 'created_by', header: 'Created By' },
    { columnDef: 'created_date', header: 'Created Date' },
    { columnDef: 'status', header: 'Status' },
    {
      tableCols: [
        'id',
        'certificate_name',
        'created_by',
        'created_date',
        'status',
      ],
    },
  ];

  ngOnInit(): void {
    this.getAllCertificates();
  }

  getAllCertificates() {
    this.webServices.showLoader();
    this.webServices
      .getMethod(this.constant.Administration.getAllCertificates)
      .subscribe((res) => {
        this.AllCertificateList = res.data.settingData;
        this.webServices.hideLoader();
        console.log(res);
      });
  }
}
