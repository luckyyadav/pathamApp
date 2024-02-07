import { Component, OnInit } from '@angular/core';

import { Constant } from '../../../services/constant-URL/constant';
import { WebService } from '../../../services/WebServices/webservices.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  constructor(private constant: Constant, private webserivce: WebService) {}
  AllEvents: any;
  dataColumns = [
    {
      columnDef: 'eventTitle',
      header: 'Event Title',
      link: 'eventTitle',
    },

    { columnDef: 'eventDescription', header: 'Supplier Type' },
    {
      columnDef: 'enentPlace',
      header: 'Event Venue',
    },
    { columnDef: 'eventFor', header: 'For' },
    { columnDef: 'event_date', header: 'Date' },
    {
      columnDef: 'action',
      header: 'Action',
      actions: ['edit', 'delete'],
      disableSort: 'true',
    },
    {
      tableCols: [
        'eventTitle',
        'eventDescription',
        'enentPlace',
        'eventFor',
        'event_date',
        'action',
      ],
    },
  ];
  ngOnInit(): void {
    this.getAllEvents();
  }

  getAllEvents() {
    this.webserivce
      .getMethod(this.constant.Calendar.allEvent)
      .subscribe((res) => {
        console.log(res);
        this.AllEvents = res.events;
      });
  }
}
