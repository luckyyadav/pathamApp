import { Component, OnInit } from '@angular/core';
import { Constant } from '../../../services/constant-URL/constant';
import { WebService } from '../../../services/WebServices/webservices.service';
import { ModalAndDataService } from '../../../services/modal-ServiceAndData-Service/modalData.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationFormsService } from '../../../services/FormValidationServices/validation-forms.service';

@Component({
  selector: 'app-teacher-subject',
  templateUrl: './teacher-subject.component.html',
  styleUrls: ['./teacher-subject.component.scss']
})
export class TeacherSubjectComponent implements OnInit {
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

  teacherSubjectDataColumns = [
    { columnDef: 'sl', header: 'Sl.', disableSort: 'true' },
    { columnDef: 'teacher_name', header: 'Name', disableSort: 'true' },
    { columnDef: 'subjects', header: 'Subject', disableSort: 'true' },
    {
      columnDef: 'action',
      header: 'Action',
      actions: ['download', 'edit'],
      disableSort: 'true',
    },
    {
      tableCols: [
        'sl',
        'teacher_name',
        'subjects',
        'action',
      ],
    },
  ];

  ngOnInit(): void {
    this.getAllTeacherSubject();
    this.modalDataService.$updateModal.subscribe((res) => {
      console.log(res);
      if (res) {
        this.toggleTeacherSubjectModal();
      }
    });
  }

  getAllTeacherSubject() {
    this.webServices
      .getMethod(this.constant.Classes.teacherlistall)
      .subscribe((res) => {
        this.dataSource = res.teacherList;
        console.log(this.dataSource);
      });
  }

  /* modal */

  teachersubjectForm!: FormGroup;
  submitted = false;
  formErrors: any;
  formControls!: string[];
  public visible = false;

  loading: boolean = true;
  activityValues: number[] = [0, 100];

  /* modal */

  toggleTeacherSubjectModal() {
    this.visible = !this.visible;
  }

  handleTeacherSubjectModalChange(event: any) {
    this.visible = event;
  }

  /* modal end */

  createForm() {
    this.teachersubjectForm = this.formBuilder.group({
      selectTeacher: [''],
     });
    this.formControls = Object.keys(this.teachersubjectForm.controls);
  }

  onReset() {
    this.submitted = false;
    this.teachersubjectForm.reset();
  }

  onValidate() {
    this.submitted = true;

    // stop here if form is invalid
    return this.teachersubjectForm.status === 'VALID';
  }

  onSubmit() {
    console.warn(this.onValidate(), this.teachersubjectForm.value);
    if (this.onValidate()) {
      this.webServices
        .postMethod(
          JSON.stringify(this.teachersubjectForm.value),
          this.constant.Classes.createtimetable // need to change 
        )
        .subscribe((res) => {
          console.log(res);
        });
    }
  }
}
