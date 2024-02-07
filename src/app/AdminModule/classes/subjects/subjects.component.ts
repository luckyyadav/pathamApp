import { Component, OnInit } from '@angular/core';
import { Constant } from '../../../services/constant-URL/constant';
import { WebService } from '../../../services/WebServices/webservices.service';
import { ModalAndDataService } from '../../../services/modal-ServiceAndData-Service/modalData.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationFormsService } from '../../../services/FormValidationServices/validation-forms.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
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

  subjectsDataColumns = [
    { columnDef: 'slno', header: 'Sl.', disableSort: 'true' },
    { columnDef: 'subjectTitle', header: 'Subject Name' },
    { columnDef: 'marksheet_order', header: 'Marksheet Order' },
    { columnDef: 'class', header: 'Class' },
    { columnDef: 'board_name', header: 'Board', disableSort: 'true' },
    { columnDef: 'passGrade/finalGrade', header: 'Pass Grade / Final Grade', disableSort: 'true' },
    {
      columnDef: 'action',
      header: '',
      actions: ['download', 'edit'],
      disableSort: 'true',
    },
    {
      tableCols: [
        'slno',
        'subjectTitle',
        'marksheet_order',
        'class',
        'board_name',
        'passGrade/finalGrade',
        'action',
      ],
    },
  ];

  ngOnInit(): void {
    this.getAllSubjects();
    this.modalDataService.$updateModal.subscribe((res) => {
      console.log(res);
      if (res) {
        this.toggleSubjectsModal();
      }
    });
  }

  getAllSubjects() {
    this.webServices
      .getMethod(this.constant.Classes.subjectslistall)
      .subscribe((res) => {
        this.dataSource = res.data.subjects;
        console.log(this.dataSource);
      });
  }

  /* modal */

  subjectsForm!: FormGroup;
  submitted = false;
  formErrors: any;
  formControls!: string[];
  public visible = false;

  loading: boolean = true;
  activityValues: number[] = [0, 100];

  /* modal */

  toggleSubjectsModal() {
    this.visible = !this.visible;
  }

  handleSubjectsModalChange(event: any) {
    this.visible = event;
  }

  /* modal end */

  createForm() {
    this.subjectsForm = this.formBuilder.group({
      subjectName: [''],
      subjectCode: [''],
      class: [''],
      subjectCategory: [''],
      passingMarks: [''],
      fullMarks: [''],
      subjectThumbnail: [''],
      marksType: [''],
      subjectType : [''],
      subjectOrderInMarksheet: [''],
    });
    this.formControls = Object.keys(this.subjectsForm.controls);
  }

  onReset() {
    this.submitted = false;
    this.subjectsForm.reset();
  }

  onValidate() {
    this.submitted = true;

    // stop here if form is invalid
    return this.subjectsForm.status === 'VALID';
  }

  onSubmit() {
    console.warn(this.onValidate(), this.subjectsForm.value);
    if (this.onValidate()) {
      this.webServices
        .postMethod(
          JSON.stringify(this.subjectsForm.value),
          this.constant.Classes.createsubject
        )
        .subscribe((res) => {
          console.log(res);
        });
    }
  }
}
