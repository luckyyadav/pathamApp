import { Component } from '@angular/core';
import { WebService } from '../../../app/services/WebServices/webservices.service';
import { Constant } from '../../../app/services/constant-URL/constant';

@Component({
  selector: 'app-newsletters',
  templateUrl: './newsletters.component.html',
  styleUrls: ['./newsletters.component.scss'],
})
export class NewslettersComponent {
  AllNewsLetters: any = [];

  constructor(private webServices: WebService, private constant: Constant) {}

  /* completion_date
: 
"05 Jan, 2024"
completion_time
: 
"11:02 AM"
created_date
: 
"05 Jan, 2024"
created_time
: 
"11:02 AM"
id
: 
7
recipients
: 
[{full_name: "Ganesh Murthy", email: "ganeshmurty.itscient@gmail.com"},…]
scheduled_date
: 
false
status
: 
2
subject
: 
"Test Subject"
template_name
: 
"News letter Module"
type
: 
1 */

  dataColumns = [
    {
      columnDef: 'subject',
      header: 'Subject',
      link: 'subject',
    },
    { columnDef: 'recipients', header: 'Recipients' },
    {
      columnDef: 'type',
      header: 'Type',
    },
    {
      columnDef: 'created_date',
      header: 'Created Date',
    },
    { columnDef: 'scheduled_date', header: 'Scheduled Date' },
    { columnDef: 'completion_date', header: 'Completion Date' },
    { columnDef: 'status', header: 'Status' },

    {
      tableCols: [
        'subject',
        'recipients',
        'type',
        'created_date',
        'scheduled_date',
        'completion_date',
        'status',
      ],
    },
  ];

  ngOnInit(): void {
    this.getAllNewsLetters();
    this.getTemplateDetails();
  }

  getAllNewsLetters() {
    this.webServices.showLoader();
    this.webServices
      .getMethod(this.constant.newsLetters.listNewsLetter)
      .subscribe(
        (res: any) => {
          this.AllNewsLetters = res.data.map((item: any) => {
            item.created_date = item.created_date + ' ' + item.created_time;
            item.status = item.status == 1 ? 'Done' : ' Not Done';
            item.completion_date =
              item.completion_date + ' ' + item.completion_time;
            item.recipients = item.recipients.map((emails: any) => {
              return emails.email;
            });
            return item;
          });
          this.webServices.hideLoader();
          console.log(this.AllNewsLetters);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  getTemplateDetails() {
    this.webServices.showLoader();
    this.webServices
      .getMethod(this.constant.newsLetters.getTemplateDetails)
      .subscribe(
        (res: any) => {
          this.AllNewsLetters = res.data;
          this.webServices.hideLoader();
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
