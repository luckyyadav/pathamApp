import { Component, OnInit } from '@angular/core';
import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';
import { ModalAndDataService } from '../../../services/modal-ServiceAndData-Service/modalData.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationFormsService } from '../../../services/FormValidationServices/validation-forms.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  constructor(
    private constant: Constant,
    private webServices: WebService,
    private modalDataService: ModalAndDataService,
    private formBuilder: FormBuilder,
    public validationFormsService: ValidationFormsService
  ) {
    this.formErrors = this.validationFormsService.errorMessages;
    this.createForm();
  }

  supplierAll: any;

  dataColumns = [
    { columnDef: 'sl', header: 'Sl.' },
    { columnDef: 'product_name', header: 'Items Name' },
    { columnDef: 'product_code', header: 'Items Code' },
    { columnDef: 'model_no', header: 'Model Name' },
    { columnDef: 'per_product_cost', header: 'Price Per Unit' },
    { columnDef: 'quantity', header: 'In Stock(UoM)' },
    { columnDef: 'date', header: 'Date Creation' },

    {
      tableCols: [
        'sl',
        'product_name',
        'product_code',
        'model_no',
        'per_product_cost',
        'quantity',
        'date',
      ],
    },
  ];

  ngOnInit(): void {
    this.getAllItems();
    this.modalDataService.$updateModal.subscribe((res) => {
      console.log(res);
      if (res) {
        this.toggleItemModal();
      }
    });
  }

  getAllItems() {
    this.webServices
      .getMethod(`${this.constant.Inventory.listItem}/1`)
      .subscribe((res) => {
        this.supplierAll = res.data.inv_product;
        console.log('Item Inventory', res);
      });
  }

    /* modal */

  itemsForm!: FormGroup;
  submitted = false;
  formErrors: any;
  formControls!: string[];
  public visible = false;

  loading: boolean = true;
  activityValues: number[] = [0, 100];


  toggleItemModal() {
    this.visible = !this.visible;
  }

  handleItemModalChange(event: any) {
    this.visible = event;
  }
  
  createForm() {
    this.itemsForm = this.formBuilder.group({
      itemCode: [''],
      isService : [''],
      category: [''],
      subCategory: [''],
      location: [''],
      pricePerUnit: [''],
      quantity: [''],
      modelName: [''],
      isForSale: [false],
      isSerialNo: [false],
      serialNumber: [''],
      description: ['']
      
    });
    this.formControls = Object.keys(this.itemsForm.controls);
  }

  onReset() {
    this.submitted = false;
    this.itemsForm.reset();
  }

  onValidate() {
    this.submitted = true;

    // stop here if form is invalid
    return this.itemsForm.status === 'VALID';
  }

  onSubmit() {
    console.warn(this.onValidate(), this.itemsForm.value);
    if (this.onValidate()) {
      this.webServices
        .postMethod(
          JSON.stringify(this.itemsForm.value),
          this.constant.Classes.createclasses
        )
        .subscribe((res) => {
          console.log(res);
        });
    }
  }


  dynamicFormConfig = [
    {
      name: 'libraryType',
      label: 'Library Type',
      type: 'text',
      required: true,
    },
    {
      name: 'itemDetails',
      label: 'Item Details',
      type: 'text',
      required: true,
    },
    { name: 'code', label: 'Code', type: 'text', required: true },
    { name: 'volume', label: 'Volume', type: 'text' },
    { name: 'title', label: 'Title', type: 'text', required: true },
    { name: 'description', label: 'Description', type: 'text' },
    { name: 'author', label: 'Author', type: 'text', required: true },
    { name: 'quantity', label: 'Quantity', type: 'number', required: true },
    { name: 'location', label: 'Location', type: 'text' },
  ];


}
