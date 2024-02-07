import { Component, OnInit } from '@angular/core';
import { Constant } from '../../../services/constant-URL/constant';
import { WebService } from '../../../services/WebServices/webservices.service';
import { ModalAndDataService } from '../../../services/modal-ServiceAndData-Service/modalData.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationFormsService } from '../../../services/FormValidationServices/validation-forms.service';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit{
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

  sectionsDataColumns = [
    { columnDef: 'sl', header: 'Sl.', disableSort: 'true' },
    { columnDef: 'classId', header: 'Class', disableSort: 'true'},
    { columnDef: 'sectionName', header: 'Section', disableSort: 'true' },
    { columnDef: 'teachers', header: 'Teacher', disableSort: 'true' },
    {
      columnDef: 'action',
      header: '',
      actions: ['download', 'edit'],
      disableSort: 'true',
    },
    {
      tableCols: [
        'sl',
        'classId',
        'sectionName',
        'teachers',
        'action',
      ],
    },
  ];

  ngOnInit(): void {
    this.getAllSections();
    this.modalDataService.$updateModal.subscribe((res) => {
      console.log(res);
      if (res) {
        this.toggleSectionsModal();
      }
    });
  }

  getAllSections() {
    this.webServices
      .getMethod(this.constant.Classes.sectionlistall)
      .subscribe((res) => {
        this.dataSource = res.data.sections;
        console.log(this.dataSource);
      });
  }

  /* modal */

  sectionsForm!: FormGroup;
  submitted = false;
  formErrors: any;
  formControls!: string[];
  public visible = false;

  loading: boolean = true;
  activityValues: number[] = [0, 100];

  /* modal */

  toggleSectionsModal() {
    this.visible = !this.visible;
  }

  handleSectionsModalChange(event: any) {
    this.visible = event;
  }

  /* modal end */

  createForm() {
    this.sectionsForm = this.formBuilder.group({
      class: [''],
      section: [''],
      teacher: [''],
    });
    this.formControls = Object.keys(this.sectionsForm.controls);
  }

  onReset() {
    this.submitted = false;
    this.sectionsForm.reset();
  }

  onValidate() {
    this.submitted = true;

    // stop here if form is invalid
    return this.sectionsForm.status === 'VALID';
  }

  onSubmit() {
    console.warn(this.onValidate(), this.sectionsForm.value);
    if (this.onValidate()) {
      this.webServices
        .postMethod(
          JSON.stringify(this.sectionsForm.value),
          this.constant.Classes.createsection
        )
        .subscribe((res) => {
          console.log(res);
        });
    }
  }
}
