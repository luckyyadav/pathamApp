import { Component } from '@angular/core';
import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';

@Component({
  selector: 'app-issues-track',
  templateUrl: './issues-track.component.html',
  styleUrls: ['./issues-track.component.scss'],
})
export class IssuesTrackComponent {
  AllIssuesTrack: any;

  constructor(private webServices: WebService, private constant: Constant) {}


  dataColumns = [
    {
      columnDef: 'id',
      header: 'Ticket ID',
    },
    { columnDef: 'category_title', header: 'Category' },
    {
      columnDef: 'status',
      header: 'Status',
    },
    {
      columnDef: 'supportLead',
      header: 'Support Lead',
    },
    { columnDef: 'supportExecutive', header: 'Support Executive' },
    { columnDef: 'technicalLead', header: 'Technical Lead' },
    { columnDef: 'developer', header: 'Developer' },
    { columnDef: 'created_date', header: 'Date' },

    {
      tableCols: [
        'id',
        'category_title',
        'status',
        'supportLead',
        'supportExecutive',
        'technicalLead',
        'developer',
        'created_date',
      ],
    },
  ];

  ngOnInit(): void {
    this.getAllIssuesTrack();
  }

  getAllIssuesTrack() {
    this.webServices
      .getMethod(this.constant.helpCenter.allIssueTracker)
      .subscribe((res) => {
        this.AllIssuesTrack = res.ticket_for_customer;

        console.log(res);
      });
  }
}
