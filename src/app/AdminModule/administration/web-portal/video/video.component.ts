import { Component } from '@angular/core';
import { WebService } from '../../../../services/WebServices/webservices.service';
import { Constant } from '../../../../services/constant-URL/constant';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent {
  AllVideoList: any;
  constructor(private webServices: WebService, private constant: Constant) {}

  dataColumns = [
    {
      columnDef: 'id',
      header: 'ID',
    },
    { columnDef: 'url', header: 'Youtube Embed URL' },

    {
      columnDef: 'videoDate',
      header: 'Date',
    },

    {
      columnDef: 'action',
      header: 'Action',
      actions: ['download', 'edit'],
      disableSort: 'true',
    },

    {
      tableCols: ['id', 'url', 'videoDate', 'action'],
    },
  ];

  ngOnInit(): void {
    this.getAllEvents();
  }

  getAllEvents() {
    this.webServices.showLoader();
    this.webServices
      .getMethod(this.constant.Administration.getWebPortalVideoList)
      .subscribe((res) => {
        this.AllVideoList = res.videos;
        this.webServices.hideLoader();
        console.log(res);
      });
  }
}
