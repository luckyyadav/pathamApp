import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-item-group',
  templateUrl: './item-group.component.html',
  styleUrls: ['./item-group.component.scss'],
})
export class ItemGroupComponent implements OnInit {
  dataSource: any;
  inv_item_group = [];

  dataColumns = [
    { columnDef: 'sl', header: 'Sl.' },
    { columnDef: 'group_name', header: 'Items Group' },
    { columnDef: 'description', header: 'Description' },
    { columnDef: 'status', header: 'Status' },
    { columnDef: 'created_at', header: 'Date Creation' },
    { columnDef: 'created_by', header: 'Created By' },

    {
      tableCols: [
        'sl',
        'group_name',
        'description',
        'status',
        'created_at',
        'created_by',
      ],
    },
  ];
  constructor(private webService: WebService, private urlConst: Constant) {}

  ngOnInit(): void {
    this.getAllItemsGroup();
  }

  getAllItemsGroup() {
    this.webService
      .getMethod(`${this.urlConst.Inventory.listitemsGroup}/1`)
      .subscribe((res) => {
        this.dataSource = res.data.inv_item_group;
        this.inv_item_group = res.data.inv_item_group;
        console.log('Item Groups Invent', res);
      });
  }
}
