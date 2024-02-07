import { Component, Input } from '@angular/core';
import { Constant } from '../../../services/constant-URL/constant';
import { WebService } from '../../../services/WebServices/webservices.service';
import { ModalAndDataService } from '../../../services/modal-ServiceAndData-Service/modalData.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationFormsService } from '../../../services/FormValidationServices/validation-forms.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss'],
})
export class SuppliersComponent {
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
    {
      columnDef: 'company_name',
      header: 'Company Name',
      link: 'company_name',
    },
    { columnDef: 'address', header: 'Address', disableSort: 'true' },
    { columnDef: 'supplier_type', header: 'Supplier Type' },
    {
      columnDef: 'contact_person_name',
      header: 'Contact Person',
    },
    { columnDef: 'contact_no', header: 'Contact Number', disableSort: 'true' },
    { columnDef: 'status', header: 'Status' },
    {
      columnDef: 'action',
      header: 'Action',
      actions: ['download', 'edit'],
      disableSort: 'true',
    },
    {
      tableCols: [
        'company_name',
        'address',
        'supplier_type',
        'contact_person_name',
        'contact_no',
        'status',
        'action',
      ],
    },
  ];

  ngOnInit(): void {
    this.getAllSuppliers();
    this.modalDataService.$updateModal.subscribe((res) => {
      console.log(res);
      if (res) {
        this.toggleSupplierModal();
      }
    });
  }

  getAllSuppliers() {
    this.webServices
      .getMethod(this.constant.ACPayable.allSupplier)
      .subscribe((res) => {
        this.supplierAll = res.data.supplierList;
        console.log(this.supplierAll);
      });
  }

  /* modal */

  supplierForm!: FormGroup;
  submitted = false;
  formErrors: any;
  formControls!: string[];
  public visible = false;

  loading: boolean = true;
  activityValues: number[] = [0, 100];

  /* modal */

  toggleSupplierModal() {
    this.visible = !this.visible;
  }

  handleSupplierModalChange(event: any) {
    this.visible = event;
  }

  /* modal end */

  createForm() {
    this.supplierForm = this.formBuilder.group({
      companyName: ['', [Validators.required]],
      gstNo: ['', [Validators.required]],
      panNo: ['', [Validators.required]],
      address: ['', [Validators.required]],
      state: ['', [Validators.required]],
      district: ['', [Validators.required]],
      pinCode: ['', [Validators.required]],
      mobileNo: ['', [Validators.required]],
      phoneNo: ['', [Validators.required]],
      faxNo: ['', [Validators.required]],
      companyWebsite: ['', [Validators.required]],
      email: ['', [Validators.required]],
      contactPerson: ['', [Validators.required]],
      contactNo: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      categories: ['', [Validators.required]],
      notes: ['', [Validators.required]],
      contract: ['', [Validators.required]],
      accept: [false, [Validators.requiredTrue]],
    });
    this.formControls = Object.keys(this.supplierForm.controls);
  }

  onReset() {
    this.submitted = false;
    this.supplierForm.reset();
  }

  onValidate() {
    this.submitted = true;

    // stop here if form is invalid
    return this.supplierForm.status === 'VALID';
  }

  onSubmit() {
    console.warn(this.onValidate(), this.supplierForm.value);
    if (this.onValidate()) {
      this.webServices
        .postMethod(
          JSON.stringify(this.supplierForm.value),
          this.constant.ACPayable.createExpense
        )
        .subscribe((res) => {
          console.log(res);
        });
    }
  }
}
