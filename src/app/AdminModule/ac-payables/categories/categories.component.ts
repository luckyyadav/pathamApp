import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Constant } from '../../../services/constant-URL/constant';
import { WebService } from '../../../services/WebServices/webservices.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit, AfterViewInit {
  AllCategories: any;
  constructor(private constant: Constant, private webserivce: WebService) {}

  dataColumns = [
    { columnDef: 'DISPLAY_VALUE', header: 'Category' },
    {
      tableCols: ['DISPLAY_VALUE'],
    },
  ];

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.webserivce
      .getMethod(this.constant.ACPayable.allCategories)
      .subscribe((res) => {
        console.log(res);
        this.AllCategories = res.data.expenses_cat;
      });
  }

  ngAfterViewInit(): void {}
}
