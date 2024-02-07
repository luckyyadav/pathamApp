import { Component, OnInit } from '@angular/core';
import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';

@Component({
  selector: 'app-access-settings',
  templateUrl: './access-settings.component.html',
  styleUrls: ['./access-settings.component.scss'],
})
export class AccessSettingsComponent implements OnInit {
  AllAccessSettingList: any;

  constructor(private webServices: WebService, private constant: Constant) {}

  dataColumns = [
    {
      columnDef: 'id',
      header: 'SL',
    },
    { columnDef: 'board_type', header: 'Board Type' },
    {
      columnDef: 'board',
      header: 'Board',
    },
    {
      columnDef: 'class',
      header: 'Class',
    },
    { columnDef: 'subject', header: 'Subject' },
    { columnDef: 'permission_type', header: 'Permission Type' },

    {
      tableCols: [
        'id',
        'board_type',
        'board',
        'class',
        'subject',
        'permission_type',
      ],
    },
  ];

  ngOnInit(): void {
    this.getAllAccessSetting();
  }

  getAllAccessSetting() {
    this.webServices.showLoader();
    this.webServices
      .getMethod(this.constant.Administration.getAllAccessSetting)
      .subscribe((res) => {
        this.AllAccessSettingList = res.data.allSettingDetails;
        this.webServices.hideLoader();
        console.log('Access Setting Work', res);
      });
  }
}
