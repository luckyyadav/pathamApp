import { Component } from '@angular/core';
import { Constant } from '../../../services/constant-URL/constant';
import { WebService } from '../../../services/WebServices/webservices.service';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.scss'],
})
export class NoticesComponent {
  constructor(private constant: Constant, private webserivce: WebService) {}
  AllNotices: any;

  ngOnInit(): void {
    this.getAllNotices();
  }
  getAllNotices() {
    this.webserivce
      .getMethod(this.constant.Calendar.allNotice)
      .subscribe((res) => {
        console.log(res);
        this.AllNotices = res.newsboard;
      });
  }
}
