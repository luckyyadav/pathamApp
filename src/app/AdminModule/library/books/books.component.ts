import { Component, OnInit } from '@angular/core';
import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';
import { ModalAndDataService } from '../../../services/modal-ServiceAndData-Service/modalData.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationFormsService } from '../../../services/FormValidationServices/validation-forms.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  dataSource: any;

  bookDataColumns = [
    { columnDef: 'sl', header: 'SL.' },
    { columnDef: 'item_cat_type_name', header: 'Category Type' },
    { columnDef: 'item_subcategory_type_name', header: 'Subcategory' },
    { columnDef: 'bookName', header: 'Name' },
    { columnDef: 'Book_code', header: 'Code' },
    { columnDef: 'volume', header: 'Volume' },
    { columnDef: 'bookAuthor', header: 'Author' },
    { columnDef: 'quantity', header: 'Nos. Books' },
    { columnDef: 'available', header: 'Available' },
    { columnDef: 'location_id', header: 'Location' },
    {
      columnDef: 'action',
      header: 'Action',
      actions: ['edit'],
      disableSort: 'true',
    },
    {
      tableCols: [
        'sl',
        'item_cat_type_name',
        'item_subcategory_type_name',
        'bookName',
        'Book_code',
        'volume',
        'bookAuthor',
        'quantity',
        'available',
        'location_id',
        'action',
      ],
    },
  ];

  constructor(
    private constant: Constant,
    private webService: WebService,
    private modalDataService: ModalAndDataService,
    private formBuilder: FormBuilder,
    public validationFormsService: ValidationFormsService
  ) {
    this.formErrors = this.validationFormsService.errorMessages;
    this.createForm();
  }

  ngOnInit(): void {
    this.getBookCategory();
    this.modalDataService.$updateModal.subscribe((res) => {
      console.log(res);
      if (res) {
        this.toggleBooksModal();
      }
    });
  }

  getBookCategory() {
    this.webService
      .getMethod(this.constant.Library.booklistitems)
      .subscribe((res) => {
        this.dataSource = res.data.library;
        console.log('Res Book', res);
      });
  }

  /* modal */

  booksForm!: FormGroup;
  submitted = false;
  formErrors: any;
  formControls!: string[];
  public visible = false;

  loading: boolean = true;
  activityValues: number[] = [0, 100];

  /* modal */

  toggleBooksModal() {
    this.visible = !this.visible;
  }

  handleBooksModalChange(event: any) {
    this.visible = event;
  }

  /* modal end */

  createForm() {
    this.booksForm = this.formBuilder.group({
      libraryType: ['', [Validators.required]],
      itemDetails: ['', [Validators.required]],
      code: ['', [Validators.required]],
      volume: [''],
      description: [''],
      author: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      location: [''],
    });
    this.formControls = Object.keys(this.booksForm.controls);
  }

  onReset() {
    this.submitted = false;
    this.booksForm.reset();
  }

  onValidate() {
    this.submitted = true;

    // stop here if form is invalid
    return this.booksForm.status === 'VALID';
  }

  onSubmit() {
    console.warn(this.onValidate(), this.booksForm.value);
    if (this.onValidate()) {
      this.webService
        .postMethod(
          JSON.stringify(this.booksForm.value),
          this.constant.Library.registerBooks
        )
        .subscribe((res) => {
          console.log(res);
        });
    }
  }
}
