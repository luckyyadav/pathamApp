import { Component, OnInit } from '@angular/core';
import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';

@Component({
  selector: 'app-admitcard',
  templateUrl: './admitcard.component.html',
  styleUrls: ['./admitcard.component.scss']
})
export class AdmitcardComponent implements OnInit {
  allAdmitCard: any;

  constructor(private webServices: WebService, private constant: Constant) {}

  admitCardDataColumns = [
    { columnDef: 'sl', header: 'Sl.' },
    { columnDef: 'examTitle', header: 'Exams Name' },
    { columnDef: 'examDescription', header: 'Exams Description' },
    { columnDef: 'className', header: 'Class' },
    {
      columnDef: 'action',
      header: 'Action',
      actions: ['download', 'edit'],
      disableSort: 'true',
    },
    {
      tableCols: [
        'sl',
        'examTitle',
        'examDescription',
        'className',
        'action',
      ],
    },
  ];

  ngOnInit(): void {
    this.getAllAdmitCard();
  }

  getAllAdmitCard() {
    this.webServices.showLoader();
    this.webServices
      .getMethod(this.constant.elearning.listadmitcard)
      .subscribe((res) => {
        this.allAdmitCard = res.data.exams;
        this.webServices.hideLoader();
      });
  }
}
