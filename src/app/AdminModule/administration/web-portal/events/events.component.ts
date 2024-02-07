import { Component } from '@angular/core';
import { WebService } from '../../../../services/WebServices/webservices.service';
import { Constant } from '../../../../services/constant-URL/constant';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent {
  AllEventList: any;
  constructor(private webServices: WebService, private constant: Constant) {}

  dataColumns = [
    {
      columnDef: 'id',
      header: 'ID',
    },
    { columnDef: 'event', header: 'Event Title' },

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
      tableCols: ['id', 'event', 'date', 'action'],
    },
  ];

  ngOnInit(): void {
    this.getAllEvents();
  }

  getAllEvents() {
    this.webServices.showLoader();
    this.webServices
      .getMethod(this.constant.Administration.getWebPortalEventList)
      .subscribe((res) => {
        this.AllEventList = res.event;
        this.webServices.hideLoader();
        console.log(res);
      });
  }
}
