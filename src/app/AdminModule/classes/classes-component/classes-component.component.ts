import { Component, OnDestroy, OnInit } from '@angular/core';
import { Constant } from '../../../services/constant-URL/constant';
import { WebService } from '../../../services/WebServices/webservices.service';
import { ModalAndDataService } from '../../../services/modal-ServiceAndData-Service/modalData.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationFormsService } from '../../../services/FormValidationServices/validation-forms.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-classes-component',
  templateUrl: './classes-component.component.html',
  styleUrls: ['./classes-component.component.scss'],
})
export class ClassesComponentComponent implements OnInit, OnDestroy {
  AllCourses: any;
  coursesDepartment: any;
  AllBoards: any;
  IsUpdateFunctionCall: boolean = false;
  ClassUpdateID = '';

  constructor(
    private constant: Constant,
    private webServices: WebService,
    private modalDataService: ModalAndDataService,
    private formBuilder: FormBuilder,
    public validationFormsService: ValidationFormsService,
    private toastr: ToastrService
  ) {
    this.formErrors = this.validationFormsService.errorMessages;
    this.createForm();
  }
  dataSource: any;

  classDataColumns = [
    { columnDef: 'sl', header: 'Sl.', disableSort: 'true' },
    { columnDef: 'className', header: 'Class' },
    { columnDef: 'board_name', header: 'Board', disableSort: 'true' },
    { columnDef: 'department_name', header: 'Department', disableSort: 'true' },
    { columnDef: 'course_name', header: 'Course', disableSort: 'true' },
    { columnDef: 'strength', header: 'Strength', disableSort: 'true' },
    {
      columnDef: 'class_start_date',
      header: 'Start Date',
      disableSort: 'true',
    },
    { columnDef: 'class_end_date', header: 'End Date', disableSort: 'true' },
    { columnDef: 'status', header: 'Status', disableSort: 'true' },
    {
      columnDef: 'action',
      header: 'Action',
      actions: ['edit', 'switch'],
      disableSort: 'true',
    },
    {
      tableCols: [
        'sl',
        'className',
        'board_name',
        'department_name',
        'course_name',
        'strength',
        'class_start_date',
        'class_end_date',
        'status',
        'action',
      ],
    },
  ];

  ngOnInit(): void {
    this.getAllClasses();
    this.getAllCourses();
    this.getAllBoards();

    this.modalDataService.subscribeToUpdateModal((data) => {
      if (data) {
        console.log(data);
        this.ClassUpdateID = data.editdata.id;
        if (data.IsModalOpenRequired) {
          this.onReset();

          this.classesForm.patchValue(data.editdata);
          this.IsUpdateFunctionCall = true;
          this.toggleClassesModal('edit');
        } else {
          this.classStatusUpdate(data.editdata);
        }
      }
    });

    //this.modalDataService.editUpdateModal('')
  }

  /* All Get Apis */

  getAllClasses() {
    this.webServices
      .getMethod(this.constant.Classes.classeslistall)
      .subscribe((res) => {
        this.dataSource = res.data.classes;
        console.log(res);
      });
  }

  getAllCourses() {
    this.webServices
      .getMethod(this.constant.Classes.courseslistall)
      .subscribe((res) => {
        this.AllCourses = res.data.courses;
        console.log(res.data.courses);
      });
  }

  getCourseDepartment(selectedCourseID: any) {
    this.webServices
      .getMethod(this.constant.Classes.AllDepartments + selectedCourseID)
      .subscribe((res) => {
        // this.AllCourses = res.data.courses;
        this.coursesDepartment = res;
        console.log(res);
      });
  }

  getAllBoards() {
    this.webServices
      .getMethod(this.constant.Classes.AllBoards)
      .subscribe((res) => {
        this.AllBoards = res;

        console.log(res);
      });
  }

  classStatusUpdate(data: any) {
    let confirm = window.confirm(
      'Do you really want to change the status of this class?'
    );
    if (!confirm) return;
    this.webServices.showLoader();
    data.status = data.status ? 1 : 0;
    this.webServices
      .postMethod(
        data,
        this.constant.Classes.classStatusUpdate + this.ClassUpdateID
      )
      .subscribe(
        (res) => {
          console.log(res);
          this.webServices.hideLoader();
        },
        (err) => {
          console.log(err);
          this.webServices.hideLoader();
        }
      );
  }
  /* modal */

  classesForm!: FormGroup;
  submitted = false;
  formErrors: any;
  formControls!: string[];
  public visible = false;

  loading: boolean = true;
  activityValues: number[] = [0, 100];

  /* modal */

  toggleClassesModal(actionType?: any) {
    this.visible = !this.visible;
    if (actionType != 'edit') {
      this.onReset();
      this.IsUpdateFunctionCall = false;
    }
  }

  handleClassesModalChange(event: any) {
    if (!this.IsUpdateFunctionCall) {
      this.onReset();
    }
    this.visible = event;
  }

  /* modal end */

  createForm() {
    this.classesForm = this.formBuilder.group({
      course_id: [null, [Validators.required]],
      department_id: [null, [Validators.required]],
      className: ['', [Validators.required]],
      class_start_date: [new Date()],
      class_end_date: [new Date()],
      classTeacher: [[4]],
      classSubjects: [['Math', 'English']],
      board: ['', [Validators.required]],
    });
    this.formControls = Object.keys(this.classesForm.controls);

    /* Dropdown Change propertry */
    this.classesForm.controls['course_id'].valueChanges.subscribe(
      (value: any) => {
        console.log(value);
        if (value) {
          this.getCourseDepartment(value);
        }
      }
    );
  }

  onReset() {
    this.submitted = false;
    this.classesForm.reset();
    this.webServices.hideLoader();
  }

  onValidate() {
    this.submitted = true;

    // stop here if form is invalid
    return this.classesForm.status === 'VALID';
  }
  postData() {
    let classFormData = new FormData();
    classFormData.append(
      'course_id',
      this.classesForm.controls['course_id'].value
    );
    classFormData.append(
      'department_id',
      this.classesForm.controls['department_id'].value
    );
    classFormData.append(
      'className',
      this.classesForm.controls['className'].value
    );
    classFormData.append(
      'class_start_date',
      this.classesForm.controls['class_start_date'].value
    );
    classFormData.append(
      'class_end_date',
      this.classesForm.controls['class_end_date'].value
    );
    /*  classFormData.append('classTeacher', '4');
  classFormData.append('classSubjects', "['hindi','english']"); */
    classFormData.append('board', this.classesForm.controls['board'].value);
    return classFormData;
  }
  onSubmit() {
    if (this.onValidate() && this.submitted) {
      this.webServices.showLoader();
      console.log(this.classesForm.value);

      if (this.IsUpdateFunctionCall) {
        this.webServices
          .postMethod(
            this.postData(),
            this.constant.Classes.updateClass + '/' + this.ClassUpdateID
          )
          .subscribe(
            (res) => {
              console.log(res);

              this.webServices.showToasterSuccess(res);
              this.webServices.hideLoader();
              this.toggleClassesModal();
              this.getAllClasses();
            },
            (err) => {
              console.log(err);
              this.webServices.hideLoader();
              this.webServices.showToasterFail(err);
            }
          );
      } else {
        this.webServices
          .postMethod(this.postData(), this.constant.Classes.createclasses)
          .subscribe(
            (res: any) => {
              console.log(res);

              this.webServices.showToasterSuccess(res);
              this.webServices.hideLoader();
              this.toggleClassesModal();
              this.getAllClasses();
            },
            (err) => {
              this.webServices.showToasterFail(err);
              this.webServices.hideLoader();
            }
          );
      }
    }
  }

  applyFilter(eve: Event) {
    this.modalDataService.filterSearchText(eve);
  }

  ngOnDestroy(): void {
    this.modalDataService.ngOnDestroy();
  }
}
