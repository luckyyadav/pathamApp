import { Component, OnInit } from '@angular/core';
import { Constant } from '../../../services/constant-URL/constant';
import { WebService } from '../../../services/WebServices/webservices.service';
import { ModalAndDataService } from '../../../services/modal-ServiceAndData-Service/modalData.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationFormsService } from '../../../services/FormValidationServices/validation-forms.service';

@Component({
    selector: 'app-others',
    templateUrl: './others.component.html',
    styleUrls: ['./others.component.scss']
})

export class OthersComponent implements OnInit {

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
    otherUsersList: any;
    
    otherUsersDataColumns = [
        { columnDef: 'sl', header: 'SI.', disableSort: 'true' },
        { columnDef: 'fullName', header: 'Full Name', disableSort: 'true' },
        { columnDef: 'username', header: 'UserName', disableSort: 'true' },
        { columnDef: 'email', header: 'Email', disableSort: 'true' },
        { columnDef: 'role_title', header: 'Title', disableSort: 'true' },
        { columnDef: 'last_login', header: 'Last Log', disableSort: 'true' },
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
                'username',
                'email',
                'role_title',
                'last_login',
                'action'
            ],
        },
    ];
    
    ngOnInit(): void {
        this.getAllTeachers();
        this.modalDataService.$updateModal.subscribe((res) => {
            console.log(res);
            if (res) {
                this.toggleOtherUsersModal();
            }
        });
    }
    
    getAllTeachers() {
        this.webServices
            .getMethod(`${this.constant.people.otherUsersList}/1`)
            .subscribe((res) => {
                this.otherUsersList = res?.data?.users ?? null;
                console.log(this.otherUsersList);
            });
    }
    
    /* modal */
    
    otherUsersForm!: FormGroup;
    submitted = false;
    formErrors: any;
    formControls!: string[];
    public visible = false;
    
    loading: boolean = true;
    activityValues: number[] = [0, 100];
    
    /* modal */
    
    toggleOtherUsersModal() {
        this.visible = !this.visible;
    }
    
    handleOtherUsersModalChange(event: any) {
        this.visible = event;
    }
    
    /* modal end */
    
    createForm() {
        this.otherUsersForm = this.formBuilder.group({
            roleTitle: [''],
            fullName: [''],
            userName: [''],
            email: [''],
            password: [''],
            gender: [''],
            birthDay: [''],
            shift: [''],
            workingHours: [''],
            address: [''],
            mobile: [''],
            phoneNo: [''],
            panNo: [''],
            communicationType: [''],        
        });
        this.formControls = Object.keys(this.otherUsersForm.controls);
    }
    
    onReset() {
        this.submitted = false;
        this.otherUsersForm.reset();
    }
    
    onValidate() {
        this.submitted = true;
    
        // stop here if form is invalid
        return this.otherUsersForm.status === 'VALID';
    }
    
    onSubmit() {
        console.warn(this.onValidate(), this.otherUsersForm.value);
        if (this.onValidate()) {
            this.webServices
                .postMethod(
                    JSON.stringify(this.otherUsersForm.value),
                    this.constant.people.createOtherUser
                )
                .subscribe((res) => {
                    console.log(res);
                });
        }
    
    }
}