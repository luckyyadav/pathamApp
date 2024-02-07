import { Component, OnInit } from '@angular/core';
import { WebService } from '../../../../services/WebServices/webservices.service';
import { Constant } from '../../../../services/constant-URL/constant';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.scss'],
})
export class AddPhotoComponent implements OnInit {
  constructor(private webServices: WebService, private constant: Constant) {}

  AllPhotList: any;

  ngOnInit(): void {
    this.getAllNews();
  }

  getAllNews() {
    this.webServices.showLoader();
    this.webServices
      .getMethod(this.constant.Administration.getWebPortalPhotoList)
      .subscribe((res) => {
        this.AllPhotList = res.add_photo;
        this.webServices.hideLoader();
        console.log(res);
      });
  }
}
