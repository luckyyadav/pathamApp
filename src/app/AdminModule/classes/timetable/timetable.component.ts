import { Component, OnInit } from '@angular/core';
import { Constant } from '../../../services/constant-URL/constant';
import { WebService } from '../../../services/WebServices/webservices.service';
import { ModalAndDataService } from '../../../services/modal-ServiceAndData-Service/modalData.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationFormsService } from '../../../services/FormValidationServices/validation-forms.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})

export class TimetableComponent implements OnInit {
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

  timeTableDataColumns = [
    { columnDef: 'sl', header: 'Sl.', disableSort: 'true' },
    { columnDef: 'schedule_name', header: 'Title', disableSort: 'true' },
    { columnDef: 'no_of_periods', header: 'Periods', disableSort: 'true' },
    { columnDef: 'no_of_breaks', header: 'Breaks', disableSort: 'true' },
    { columnDef: 'schedule_follow', header: 'Classes', disableSort: 'true' },
    {
      columnDef: 'action',
      header: 'Action',
      actions: ['download', 'edit'],
      disableSort: 'true',
    },
    {
      tableCols: [
        'sl',
        'schedule_name',
        'no_of_periods',
        'no_of_breaks',
        'schedule_follow',
        'action',
      ],
    },
  ];

  ngOnInit(): void {
    this.getAllTimeTable();
    this.modalDataService.$updateModal.subscribe((res) => {
      console.log(res);
      if (res) {
        this.toggleTimeTableModal();
      }
    });
  }

  getAllTimeTable() {
    this.webServices
      .getMethod(this.constant.Classes.timetablelistall)
      .subscribe((res) => {
        this.dataSource = res.data;
        console.log(this.dataSource);
      });
  }

  /* modal */

  timetableForm!: FormGroup;
  submitted = false;
  formErrors: any;
  formControls!: string[];
  public visible = false;

  loading: boolean = true;
  activityValues: number[] = [0, 100];

  /* modal */

  toggleTimeTableModal() {
    this.visible = !this.visible;
  }

  handleTimeTableModalChange(event: any) {
    this.visible = event;
  }

  /* modal end */

  createForm() {
    this.timetableForm = this.formBuilder.group({
      name: [''],
      totalPeriods: [''],
      totalBreaks: [''],
      day: [''],
     });
    this.formControls = Object.keys(this.timetableForm.controls);
  }

  onReset() {
    this.submitted = false;
    this.timetableForm.reset();
  }

  onValidate() {
    this.submitted = true;

    // stop here if form is invalid
    return this.timetableForm.status === 'VALID';
  }

  onSubmit() {
    console.warn(this.onValidate(), this.timetableForm.value);
    if (this.onValidate()) {
      this.webServices
        .postMethod(
          JSON.stringify(this.timetableForm.value),
          this.constant.Classes.createtimetable
        )
        .subscribe((res) => {
          console.log(res);
        });
    }
  }
}
