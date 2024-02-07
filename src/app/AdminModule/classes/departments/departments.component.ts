import { Component, OnInit } from '@angular/core';
import { Constant } from '../../../services/constant-URL/constant';
import { WebService } from '../../../services/WebServices/webservices.service';
import { ModalAndDataService } from '../../../services/modal-ServiceAndData-Service/modalData.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationFormsService } from '../../../services/FormValidationServices/validation-forms.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit{
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
  dataSource: any;

  departmentsDataColumns = [
    { columnDef: 'sl', header: 'Sl.', disableSort: 'true' },
    { columnDef: 'course_name', header: 'Name', disableSort: 'true'},
    { columnDef: 'department_name', header: 'Course', disableSort: 'true' },
    { columnDef: 'fullName', header: 'Created By', disableSort: 'true' },
    { columnDef: 'status', header: 'Status', disableSort: 'true' },
    {
      columnDef: 'action',
      header: 'Action',
      actions: ['download', 'edit'],
      disableSort: 'true',
    },
    {
      tableCols: [
        'sl',
        'course_name',
        'department_name',
        'fullName',
        'status',
        'action',
      ],
    },
  ];

  ngOnInit(): void {
    this.getAllDepartments();
    this.modalDataService.$updateModal.subscribe((res) => {
      console.log(res);
      if (res) {
        this.toggleDepartmentsModal();
      }
    });
  }

  getAllDepartments() {
    this.webServices
      .getMethod(this.constant.Classes.deplistall)
      .subscribe((res) => {
        this.dataSource = res.data.course_departments;
        console.log(this.dataSource);
      });
  }

  /* modal */

  departmentsForm!: FormGroup;
  submitted = false;
  formErrors: any;
  formControls!: string[];
  public visible = false;

  loading: boolean = true;
  activityValues: number[] = [0, 100];

  /* modal */

  toggleDepartmentsModal() {
    this.visible = !this.visible;
  }

  handleDepartmentsModalChange(event: any) {
    this.visible = event;
  }

  /* modal end */

  createForm() {
    this.departmentsForm = this.formBuilder.group({
      course: [''],
      departmentName: [''],
    });
    this.formControls = Object.keys(this.departmentsForm.controls);
  }

  onReset() {
    this.submitted = false;
    this.departmentsForm.reset();
  }

  onValidate() {
    this.submitted = true;

    // stop here if form is invalid
    return this.departmentsForm.status === 'VALID';
  }

  onSubmit() {
    console.warn(this.onValidate(), this.departmentsForm.value);
    if (this.onValidate()) {
      this.webServices
        .postMethod(
          JSON.stringify(this.departmentsForm.value),
          this.constant.Classes.createdepartments
        )
        .subscribe((res) => {
          console.log(res);
        });
    }
  } 
}
