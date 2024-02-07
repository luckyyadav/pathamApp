import { Component } from '@angular/core';

import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';

const TAG = 'Hostel Fee Category Component';

@Component({
  selector: 'app-fee-categories',
  templateUrl: './fee-categories.component.html',
  styleUrls: ['./fee-categories.component.scss'],
})
export class FeeCategoriesComponent {
  constructor(private webServices: WebService, private constant: Constant) {}

  feeCategoryList: any;

  dataColumns = [
    { columnDef: 'id', header: 'SI.' },
    { columnDef: 'catTitle', header: 'Title' },
    { columnDef: 'catFees', header: 'Fees(P.M.)' },

    {
      tableCols: ['id', 'catTitle', 'catFees'],
    },
  ];

  ngOnInit(): void {
    this.getAllFeeCategory();
  }

  getAllFeeCategory() {
    this.webServices
      .getMethod(this.constant.Hostel.getFeeCategoryList)
      .subscribe((res) => {
        this.feeCategoryList = res.data.hostelCatList;
        console.log(TAG, 'Fee Category List', res.data.hostelCatList);
      });
  }
}
