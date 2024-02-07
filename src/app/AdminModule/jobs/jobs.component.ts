import { Component, OnInit } from '@angular/core';
import { WebService } from '../../services/WebServices/webservices.service';
import { Constant } from '../../services/constant-URL/constant';

const TAG: any = 'Jobs Component :';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  supplierAll: any;

  constructor(private webServices: WebService, private constant: Constant) {}

  dataColumns = [
    { columnDef: 'group_name', header: 'Name' },
    { columnDef: 'description', header: 'Des' },
    { columnDef: 'created_by', header: 'Created by' },
    { columnDef: 'created_at', header: 'Created At' },
    {
      tableCols: ['group_name', 'description', 'created_by', 'created_at'],
    },
  ];

  ngOnInit(): void {
    this.getAllItems();
  }

  getAllItems() {
    this.webServices
      .getMethod(this.constant.Inventory.listItem)
      .subscribe((res) => {
        this.supplierAll = res.inv_item_group;
        console.log(TAG, 'API Data', res);
        this.supplierAll = res.data.inv_item_group;
      });
  }
}
