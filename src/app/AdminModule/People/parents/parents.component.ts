import { Component, OnInit } from '@angular/core';
import { Constant } from '../../../services/constant-URL/constant';
import { WebService } from '../../../services/WebServices/webservices.service';
import { ModalAndDataService } from '../../../services/modal-ServiceAndData-Service/modalData.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationFormsService } from '../../../services/FormValidationServices/validation-forms.service';

import { Subscription, map } from 'rxjs';
import { PeopleFormService } from '../service/Peopleform.service';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.scss'],
})

export class ParentsComponent implements OnInit {

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

parentsList: any;

parentsDataColumns = [
  { columnDef: 'id', header: 'ID', disableSort: 'false' },
  { columnDef: 'fullName', header: 'Full Name', disableSort: 'false' },
  { columnDef: 'parentOf', header: 'Parent Of', disableSort: 'true' },
  { columnDef: 'username', header: 'UserName', disableSort: 'false' },
  { columnDef: 'email', header: 'Email', disableSort: 'true' },
  {
      columnDef: 'action',
      header: 'Action',
      actions: ['download', 'edit'],
      disableSort: 'true',
  },
  {
      tableCols: [
          'id',
          'fullName',
          'parentOf',
          'username',
          'email',
          'action'
      ],
  },
];

ngOnInit(): void {
  this.getAllTeachers();
  this.modalDataService.$updateModal.subscribe((res) => {
      console.log(res);
      if (res) {
          this.toggleParentsModal();
      }
  });

  // this.items = [
  //   {
  //     label: 'Address',
  //     routerLink: 'address',
  //   },
  //   {
  //     label: 'Personaldetails',
  //     routerLink: 'personaldetails',
  //   },
  //   {
  //     label: 'Documents',
  //     routerLink: 'documents',
  //   },
  //   {
  //     label: 'Healthrecords',
  //     routerLink: 'healthrecords',
  //   },
  //   {
  //     label: 'Faimily',
  //     routerLink: 'faimily',
  //   },
  //   {
  //     label: 'Transportation',
  //     routerLink: 'transportation',
  //   },
  // ];

  // this.subscription = this.peopleFormService.paymentComplete$.subscribe(
  //   (personalInformation) => {
  //     //this.messageService.add({ severity: 'success', summary: 'Order submitted', detail: 'Dear, ' + personalInformation.firstname + ' ' + personalInformation.lastname + ' your order completed.' });
  //   }
  // );
}

getAllTeachers() {
  this.webServices
      .getMethod(`${this.constant.people.parentsList}/1`)
      .pipe(
        map((res: any) =>
          res?.data?.parents.map((parent : any) => ({
              ...parent,
            parentOf: parent?.parentOf && JSON.parse(parent?.parentOf)[0]?.student ?  JSON.parse(parent?.parentOf)[0]?.student: null
          }))
        )
      )
      .subscribe((res) => {
        this.parentsList = res;
        console.log(this.parentsList);
      });
}

parentsForm!: FormGroup;
submitted = false;
formErrors: any;
formControls!: string[];
public visible = false;

loading: boolean = true;
activityValues: number[] = [0, 100];

  // constructor(private peopleFormService: PeopleFormService) { }
  // public visible = false;
  // items: any[] = [];
  // subscription: Subscription;
  // loading: boolean = true;

  toggleParentsModal() {
    this.visible = !this.visible;
  }

  handleParentModalChange(event: any) {
    this.visible = event;
  }

  
createForm() {
  this.parentsForm = this.formBuilder.group({
      salutation: [''],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      gender: [''],
      birthDay: [''],
      role: [''],
      shift: [''],
      workingHours: [''],
      department: [''],
      maritalStatus: [''],
      anniversary: [''],
      caste: [''],
      religion: [''],
      panNo: [''],
      aadharNo: [''],
      userName: [''],
      email: [''],
      password: [''],
      photo: [''],
      dateOfJoining: [''],
      communicationType: [''],        
  });
  this.formControls = Object.keys(this.parentsForm.controls);
}

onReset() {
  this.submitted = false;
  this.parentsForm.reset();
}

onValidate() {
  this.submitted = true;

  // stop here if form is invalid
  return this.parentsForm.status === 'VALID';
}

onSubmit() {
  console.warn(this.onValidate(), this.parentsForm.value);
  if (this.onValidate()) {
      this.webServices
          .postMethod(
              JSON.stringify(this.parentsForm.value),
              this.constant.people.createParents
          )
          .subscribe((res) => {
              console.log(res);
          });
  }

}


  // ngOnDestroy() {
  //   if (this.subscription) {
  //     this.subscription.unsubscribe();
  //   }
  // }
}
