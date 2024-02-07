import { Component, OnInit } from '@angular/core';
import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';
import { ModalAndDataService } from '../../../services/modal-ServiceAndData-Service/modalData.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationFormsService } from '../../../services/FormValidationServices/validation-forms.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  dataSource: any;

  settingIssueDataColumns = [
    { columnDef: 'sl', header: 'Sl.' },
    { columnDef: 'category_type', header: 'Category' },
    { columnDef: 'sub_category_type', header: 'Sub Category' },
    { columnDef: 'book_issue_period', header: 'Default issue limit' },
    { columnDef: 'max_book_issue_to_stud', header: 'Maximum Items allowed at a time' },
    { columnDef: 'fine_type', header: 'Fine Type' },
    { columnDef: 'flat_fine_amount', header: 'Flat Fine Charge' },
    { columnDef: 'recursive_duration', header: 'Recursive Duration' },
    { columnDef: 'recursion_charge', header: 'Recursion Charge' },
    { columnDef: 'action', header: 'Action', actions: 'edit', disableSort: 'true'},
    {
      tableCols: [
        'sl',
        'category_type',
        'sub_category_type',
        'book_issue_period',
        'max_book_issue_to_stud',
        'fine_type',
        'flat_fine_amount',
        'recursive_duration',
        'recursion_charge',
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
  ){
    this.formErrors = this.validationFormsService.errorMessages;
    this.createForm();
  }

  ngOnInit(): void {
    this.getSettingItem();
    this.modalDataService.$updateModal.subscribe((res) => {
      console.log(res);
      if (res) {
        this.toggleSettingModal();
      }
    });
  }

  getSettingItem() {
    this.webService
      .getMethod(this.constant.Library.settinglistitems)
      .subscribe((res) => {
        this.dataSource = res.issue_setting;
        console.log('Res Issue Settings', res);
      });
  }

  /* modal */

  issueSettingForm!: FormGroup;
  submitted = false;
  formErrors: any;
  formControls!: string[];
  public visible = false;

  loading: boolean = true;
  activityValues: number[] = [0, 100];

  /* modal */

  toggleSettingModal() {
    this.visible = !this.visible;
  }

  handleSettingModalChange(event: any) {
    this.visible = event;
  }

  /* modal end */

  createForm() {
    this.issueSettingForm = this.formBuilder.group({
      categoryType: ['', [Validators.required]],
      itemDetails: ['', [Validators.required]],
      maxIssueLimitDays: ['', [Validators.required]],
      maxIssueToStudent: ['', [Validators.required]],
      fineType: ['', [Validators.required]],
    });
    this.formControls = Object.keys(this.issueSettingForm.controls);
  }

  onReset() {
    this.submitted = false;
    this.issueSettingForm.reset();
  }

  onValidate() {
    this.submitted = true;

    // stop here if form is invalid
    return this.issueSettingForm.status === 'VALID';
  }

  onSubmit() {
    console.warn(this.onValidate(), this.issueSettingForm.value);
    if (this.onValidate()) {
      // TODO: Submit form value
      console.warn(this.issueSettingForm.value);
      alert('SUCCESS!');
    }
  }

}

 