import { Component, OnDestroy, OnInit } from '@angular/core';
import { Constant } from '../../../services/constant-URL/constant';
import { WebService } from '../../../services/WebServices/webservices.service';
import { ModalAndDataService } from '../../../services/modal-ServiceAndData-Service/modalData.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationFormsService } from '../../../services/FormValidationServices/validation-forms.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit, OnDestroy {
  /* modal */

  coursesForm!: FormGroup;
  submitted = false;
  formErrors: any;
  formControls!: string[];
  public visible = false;

  loading: boolean = true;
  activityValues: number[] = [0, 100];

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

  coursesDataColumns = [
    { columnDef: 'sl', header: 'Sl.', disableSort: 'true' },
    { columnDef: 'course_name', header: 'Name', disableSort: 'true' },
    { columnDef: 'eligible', header: 'Eligibility', disableSort: 'true' },
    { columnDef: 'start_date', header: 'Start Date', disableSort: 'true' },
    { columnDef: 'end_date', header: 'End Date', disableSort: 'true' },
    { columnDef: 'course_duration', header: 'Duration', disableSort: 'true' },
    {
      columnDef: 'course_cost',
      header: 'Course Fee (Inclusive of 18% GST)',
      disableSort: 'true',
    },
    { columnDef: 'course_desc', header: 'Remarks', disableSort: 'true' },
    { columnDef: 'Status1', header: 'Status', disableSort: 'true' },
    {
      columnDef: 'action',
      header: 'Action',
      actions: ['edit', 'delete'],
      disableSort: 'true',
    },
    {
      tableCols: [
        'sl',
        'course_name',
        'eligible',
        'start_date',
        'end_date',
        'course_duration',
        'course_cost',
        'course_desc',
        'Status1',
        'action',
      ],
    },
  ];

  ngOnInit(): void {
    this.getAllCourses();
    this.modalDataService.subscribeToUpdateModal((res) => {
      console.log(res);
      if (res) {
        this.toggleCoursesModal();
      }
    });
  }

  getAllCourses() {
    this.webServices
      .getMethod(this.constant.Classes.courseslistall)
      .subscribe((res) => {
        this.dataSource = res.data.courses;
        console.log(this.dataSource);
      });
  }

  /* modal */

  toggleCoursesModal() {
    this.visible = !this.visible;
  }

  handleCoursesModalChange(event: any) {
    this.visible = event;
  }

  /* modal end */

  createForm() {
    this.coursesForm = this.formBuilder.group({
      course_name: ['', [Validators.required]],
      eligible: ['', [Validators.required]],
      start_date: ['', [Validators.required]],
      end_date: ['', [Validators.required]],
      course_cost: ['', [Validators.required]],
      course_desc: ['', [Validators.required]],
    });
    this.formControls = Object.keys(this.coursesForm.controls);
  }

  onReset() {
    this.submitted = false;
    this.coursesForm.reset();
  }

  onValidate() {
    this.submitted = true;

    // stop here if form is invalid
    return this.coursesForm.status === 'VALID';
  }

  postData() {
    let coursesFormData = new FormData();
    coursesFormData.append(
      'course_name',
      this.coursesForm.controls['course_name'].value
    );
    coursesFormData.append(
      'eligible',
      this.coursesForm.controls['eligible'].value
    );
    coursesFormData.append(
      'start_date',
      this.coursesForm.controls['start_date'].value
    );
    coursesFormData.append(
      'end_date',
      this.coursesForm.controls['end_date'].value
    );
    coursesFormData.append(
      'course_cost',
      this.coursesForm.controls['course_cost'].value
    );
    /*  coursesFormData.append('classTeacher', '4');
  coursesFormData.append('classSubjects', "['hindi','english']"); */
    coursesFormData.append(
      'course_desc',
      this.coursesForm.controls['course_desc'].value
    );
    return coursesFormData;
  }

  onSubmit() {
    console.warn(this.onValidate(), this.coursesForm.value);
    if (this.onValidate()) {
      this.webServices
        .postMethod(this.postData(), this.constant.Classes.createcourses)
        .subscribe(
          (res) => {
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
        );
    }
  }
  applyFilter(eve: Event) {
    this.modalDataService.filterSearchText(eve);
  }

  ngOnDestroy(): void {
    this.modalDataService.ngOnDestroy();
  }
}
