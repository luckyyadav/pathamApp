import { Component, OnInit } from '@angular/core';
import { Constant } from '../../../services/constant-URL/constant';
import { WebService } from '../../../services/WebServices/webservices.service';
import { ModalAndDataService } from '../../../services/modal-ServiceAndData-Service/modalData.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationFormsService } from '../../../services/FormValidationServices/validation-forms.service';

@Component({
    selector: 'app-teacher',
    templateUrl: './teacher.component.html',
    styleUrls: ['./teacher.component.scss']
})

export class TeacherComponent implements OnInit { 
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
teachersList: any;

teachersDataColumns = [
    { columnDef: 'sl', header: 'SI.', disableSort: 'true' },
    { columnDef: 'shift_name', header: 'Image', disableSort: 'true' },
    { columnDef: 'fullName', header: 'Full Name', disableSort: 'false' },
    { columnDef: 'role', header: 'Role', disableSort: 'true' },
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
            'sl',
            'shift_name',
            'fullName',
            'role',
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
            this.toggleTeachersModal();
        }
    });
}

getAllTeachers() {
    this.webServices
        .getMethod(`${this.constant.people.teachersList}/1`)
        .subscribe((res) => {
            this.teachersList = res?.data?.teachers ?? null;
            console.log(this.teachersList);
        });
}

/* modal */

teachersForm!: FormGroup;
submitted = false;
formErrors: any;
formControls!: string[];
public visible = false;

loading: boolean = true;
activityValues: number[] = [0, 100];

/* modal */

toggleTeachersModal() {
    this.visible = !this.visible;
}

handleStudentsModalChange(event: any) {
    this.visible = event;
}

/* modal end */

createForm() {
    this.teachersForm = this.formBuilder.group({
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
    this.formControls = Object.keys(this.teachersForm.controls);
}

onReset() {
    this.submitted = false;
    this.teachersForm.reset();
}

onValidate() {
    this.submitted = true;

    // stop here if form is invalid
    return this.teachersForm.status === 'VALID';
}

onSubmit() {
    console.warn(this.onValidate(), this.teachersForm.value);
    if (this.onValidate()) {
        this.webServices
            .postMethod(
                JSON.stringify(this.teachersForm.value),
                this.constant.people.createTeachers
            )
            .subscribe((res) => {
                console.log(res);
            });
    }

}

}