import { Component, OnInit } from '@angular/core';
import { Constant } from '../../services/constant-URL/constant';
import { WebService } from '../../services/WebServices/webservices.service';

@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.scss']
})
export class ReleasesComponent implements OnInit {
  allReleases: any;
  constructor(private constant: Constant, private webServices: WebService) {}
  releasesDataColumns = [
    { columnDef: 'version', header: 'Version.No' },
    { columnDef: 'created_at', header: 'Release Date' },
    { columnDef: 'module', header: 'Module' },
    { columnDef: 'message', header: 'Release Notes' },
    { columnDef: 'changesMsg', header: 'Addition/Changes' },
    { columnDef: 'stage', header: 'Status' },
    {
      tableCols: [
        'version',
        'created_at',
        'module',
        'message',
        'changesMsg',
        'stage',
      ],
    },
  ];
  ngOnInit(): void {
    this.getAllReleases();
  }

  getAllReleases() {
    this.webServices
      .getMethod(this.constant.releases.allReleases)
      .subscribe((res) => {
        console.log(res);
        this.allReleases = res.data.release_modules;
      });
  }
}
