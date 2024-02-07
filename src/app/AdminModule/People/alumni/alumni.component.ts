import { Component, OnInit } from '@angular/core';
import { Constant } from '../../../services/constant-URL/constant';
import { WebService } from '../../../services/WebServices/webservices.service';
import { ModalAndDataService } from '../../../services/modal-ServiceAndData-Service/modalData.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationFormsService } from '../../../services/FormValidationServices/validation-forms.service';

@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.scss'],
})
export class AlumniComponent implements OnInit {
  alumniForm!: FormGroup;
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

  alumnisList: any;
    
  alumnisDataColumns = [
      { columnDef: 'sl', header: 'SI.', disableSort: 'true' },
      { columnDef: 'fullName', header: 'Full Name', disableSort: 'false' },
      { columnDef: 'email', header: 'Email', disableSort: 'false' },
      { columnDef: 'dob', header: 'D.O.B.', disableSort: 'true' },

      { columnDef: 'passing_year', header: 'Passing Year', disableSort: 'true' },
      { columnDef: 'mobile', header: 'Contact No.', disableSort: 'true' },
      { columnDef: 'status', header: 'Status', disableSort: 'true' },
      {
          columnDef: 'action',
          header: 'Action',
          actions: ['edit', 'delete'],
          disableSort: 'true',
      },
      {
          tableCols: [
              'sl',
              'fullName',
              'email',
              'dob',
              'passing_year',
              'mobile',
              'status'
          ],
      },
  ];


  /* modal */

  toggleAlumniModal() {
    this.visible = !this.visible;
  }

  handleAlumuniModalChange(event: any) {
    this.visible = event;
  }

  ngOnInit(): void {
    this.getAllAlumnis();
    this.modalDataService.$updateModal.subscribe((res) => {
        console.log(res);
        if (res) {
            this.toggleAlumniModal();
        }
    });
    /*     clear(table: Table) {
      table.clear();
  } */
  }

  getAllAlumnis() {
    this.webServices
        .getMethod(this.constant.people.alumnisList)
        .subscribe((res) => {
            this.alumnisList = res?.data?.alumnis ?? null;
            console.log(this.alumnisList);
        });
}

  /* modal end */

  createForm() {
    this.alumniForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(
            this.validationFormsService.formRules.usernameMin
          ),
          Validators.pattern(this.validationFormsService.formRules.nonEmpty),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],

      accept: [false, [Validators.requiredTrue]],
    });
    this.formControls = Object.keys(this.alumniForm.controls);
  }

  onReset() {
    this.submitted = false;
    this.alumniForm.reset();
  }

  onValidate() {
    this.submitted = true;

    // stop here if form is invalid
    return this.alumniForm.status === 'VALID';
  }

  onSubmit() {
    console.warn(this.onValidate(), this.alumniForm.value);
    if (this.onValidate()) {
      // TODO: Submit form value
      this.webServices
                .postMethod(
                    JSON.stringify(this.alumniForm.value),
                    this.constant.people.createAlumni
                )
                .subscribe((res) => {
                    console.log(res);
                });
      console.warn(this.alumniForm.value);
      alert('SUCCESS!');
    }
  }
}
