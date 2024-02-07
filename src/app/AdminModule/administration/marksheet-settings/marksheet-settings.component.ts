import { Component } from '@angular/core';

import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';

@Component({
  selector: 'app-marksheet-settings',
  templateUrl: './marksheet-settings.component.html',
  styleUrls: ['./marksheet-settings.component.scss'],
})
export class MarksheetSettingsComponent {
  constructor(private webServices: WebService, private constant: Constant) {}

  marksheetSettings: any;

  btnType: string = 'setting';

  // clickedRecord() {
  //   this.btnType = !this.btnType;
  //   console.log('Record Clicked');
  // }

  getAllCertificates() {
    this.webServices.showLoader();
    this.webServices
      .getMethod(this.constant.Administration.getAllCertificates)
      .subscribe((res) => {
        this.marksheetSettings = res.data.settingData;
        this.webServices.hideLoader();
        console.log(res);
      });
  }
}
