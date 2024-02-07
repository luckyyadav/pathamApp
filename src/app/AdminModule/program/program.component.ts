import { Component, OnInit } from '@angular/core';
import { Constant } from '../../services/constant-URL/constant';
import { WebService } from '../../services/WebServices/webservices.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
})
export class ProgramComponent implements OnInit {
  allPrograms: any;
  constructor(private constant: Constant, private webServices: WebService) {}
  dataColumns = [
    { columnDef: 'prog_title', header: 'Title' },
    { columnDef: 'prog_desc', header: 'Description' },
    { columnDef: 'prog_venue', header: 'Venue' },
    { columnDef: 'date', header: 'Program Date' },
    { columnDef: 'time', header: 'Program Time' },
    { columnDef: 'action', header: 'Action' },
    {
      tableCols: [
        'prog_title',
        'prog_desc',
        'prog_venue',
        'date',
        'time',
        'action',
      ],
    },
  ];
  ngOnInit(): void {
    this.getAllPrograms();
  }

  getAllPrograms() {
    this.webServices
      .getMethod(this.constant.programs.allPrograms)
      .subscribe((res) => {
        console.log(res);
        this.allPrograms = res.data.programmedetails;
      });
  }
}
