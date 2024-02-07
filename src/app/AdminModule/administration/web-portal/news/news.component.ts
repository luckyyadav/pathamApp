import { Component, OnInit } from '@angular/core';
import { WebService } from '../../../../services/WebServices/webservices.service';
import { Constant } from '../../../../services/constant-URL/constant';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  constructor(private webServices: WebService, private constant: Constant) {}

  AllNewsList: any;

  dataColumns = [
    {
      columnDef: 'id',
      header: 'ID',
    },
    { columnDef: 'news_title', header: 'News Title' },
    {
      columnDef: 'news_desc',
      header: 'News Description',
    },
    {
      columnDef: 'date',
      header: 'Date',
    },

    {
      columnDef: 'action',
      header: 'Action',
      actions: ['download', 'edit'],
      disableSort: 'true',
    },

    {
      tableCols: ['id', 'news_title', 'news_desc', 'date', 'action'],
    },
  ];

  ngOnInit(): void {
    this.getAllNews();
  }

  getAllNews() {
    this.webServices.showLoader();
    this.webServices
      .getMethod(this.constant.Administration.getWebPortalNewsList)
      .subscribe((res) => {
        this.AllNewsList = res.news;
        this.webServices.hideLoader();
        console.log(res.news);
      });
  }
}
