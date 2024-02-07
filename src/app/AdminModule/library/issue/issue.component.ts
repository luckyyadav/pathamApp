import { Component, OnInit } from '@angular/core';
import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';
import { ModalAndDataService } from '../../../services/modal-ServiceAndData-Service/modalData.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationFormsService } from '../../../services/FormValidationServices/validation-forms.service';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss']
})
export class IssueComponent implements OnInit {
  dataSource: any;

  issueDataColumns = [
    { columnDef: 'sl', header: 'SL.' },
    { columnDef: 'fullname', header: 'Student Name' },
    { columnDef: 'category_type', header: 'Category Type' },
    { columnDef: 'subcategory_type', header: 'Sub Category Type' },
    { columnDef: 'bookName', header: 'Name' },
    { columnDef: 'Book_code', header: 'Item Code' },
    { columnDef: 'volume', header: 'Volume' },
    { columnDef: 'issue_date', header: 'Issue Date' },
    { columnDef: 'return_date', header: 'Due Date' },
    { columnDef: 'fixed_fine_amount', header: 'Fine Amount' },
    {
      tableCols: [
        'sl',
        'fullname',
        'category_type',
        'subcategory_type',
        'bookName',
        'Book_code',
        'volume',
        'issue_date',
        'return_date',
        'fixed_fine_amount',
      ],
    },
  ];

  constructor(private webService: WebService, private constant: Constant) {}

  ngOnInit(): void {
    this.getIssueItem();
  }

  getIssueItem() {
    this.webService
      .getMethod(this.constant.Library.issuelistitems)
      .subscribe((res) => {
        this.dataSource = res.data.issue_book_details;
        console.log('Res Issue', res);
      });
  }
}