import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { ValidationFormsService } from '../../../services/FormValidationServices/validation-forms.service';
import { ModalAndDataService } from '../../../services/modal-ServiceAndData-Service/modalData.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() formConfig: any[] = [];
  @Output() submitForm: EventEmitter<any> = new EventEmitter<any>();
  @Output() resetForm: EventEmitter<any> = new EventEmitter<any>();

  dynamicForms: FormGroup;

  constructor(
    private fb: FormBuilder,
    private modalDataService: ModalAndDataService,
    private formBuilder: FormBuilder,
    public validationFormsService: ValidationFormsService
  ) {
    this.formErrors = this.validationFormsService.errorMessages;
    this.createForm();
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    const formControls: { [key: string]: [any, ValidatorFn[]] } = {};

    this.formConfig.forEach((field) => {
      formControls[field.name] = [
        field.defaultValue || '',
        field.required ? [Validators.required] : [],
      ];
    });

    this.dynamicForms = this.fb.group(formControls);
  }
  onSubmitForm() {
    if (this.dynamicForms.valid) {
      this.submitForm.emit(this.dynamicForms.value);
    }
  }

  onResetForm() {
    this.dynamicForms.reset();
    this.resetForm.emit();
  }

  /* modal */

  booksForm!: FormGroup;
  submitted = false;
  formErrors: any;
  formControls!: string[];
  public visible = true;

  loading: boolean = true;
  activityValues: number[] = [0, 100];

  /* modal */

  toggleBooksModal() {
    this.visible = !this.visible;
  }

  handleBooksModalChange(event: any) {
    this.visible = event;
  }

  /* modal end */

  createForm() {
    this.booksForm = this.formBuilder.group({
      libraryType: ['', [Validators.required]],
      itemDetails: ['', [Validators.required]],
      code: ['', [Validators.required]],
      volume: [''],
      description: [''],
      author: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      location: [''],
    });
    this.formControls = Object.keys(this.booksForm.controls);
  }

  onReset() {
    this.submitted = false;
    this.booksForm.reset();
  }

  onValidate() {
    this.submitted = true;

    // stop here if form is invalid
    return this.booksForm.status === 'VALID';
  }

  onSubmit() {
    console.warn(this.onValidate(), this.booksForm.value);
    if (this.onValidate()) {
    }
  }
}
