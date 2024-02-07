import { Component, OnInit } from '@angular/core';
import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  inv_category = [];
  inv_sub_category = [];
  dataSource: any;

  catDataColumns = [
    { columnDef: 'category_name', header: 'Category Name' },
    { columnDef: 'description', header: 'Description' },
    {
      tableCols: ['category_name', 'description'],
    },
  ];

  subCatDataColumns = [
    { columnDef: 'category_name', header: 'Category Name' },
    { columnDef: 'subcategory_name', header: 'Subcategory' },
    { columnDef: 'description', header: 'Description' },
    {
      tableCols: ['category_name', 'subcategory_name', 'description'],
    },
  ];

  subcat: boolean = false;

  constructor(private webService: WebService, private urlConst: Constant) {}

  ngOnInit(): void {
    this.getInvCategory();
  }

  getInvCategory() {
    this.webService
      .getMethod(`${this.urlConst.Inventory.categorieslistall}/1`)
      .subscribe((res) => {
        this.dataSource = res.data.inv_category;
        this.inv_category = res.data.inv_category;
        console.log('Res Invn', res);
      });
  }

  subCatToggle() {
    if (this.subcat) {
      if (this.inv_category.length < 1) {
        this.getInvCategory();
      } else {
        this.dataSource.data = this.inv_category;
      }
    } else {
      if (this.inv_sub_category.length < 1) {
        this.getSubCat();
      } else {
        console.log('Else working');
        this.dataSource.data = this.inv_sub_category;
      }
    }
    this.subcat = !this.subcat;
  }

  getSubCat() {
    this.webService
      .getMethod(`${this.urlConst.Inventory.subcategorieslist}/1`)
      .subscribe((res) => {
        this.dataSource = res.data.inv_sub_category;
        this.inv_sub_category = res.data.inv_sub_category;
        console.log('Res Invn', res);
      });
    console.log('subcategories called');
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
