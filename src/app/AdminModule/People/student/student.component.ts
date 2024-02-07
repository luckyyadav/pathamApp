import { Component, OnInit } from '@angular/core';
import { Constant } from '../../../services/constant-URL/constant';
import { WebService } from '../../../services/WebServices/webservices.service';
import { ModalAndDataService } from '../../../services/modal-ServiceAndData-Service/modalData.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationFormsService } from '../../../services/FormValidationServices/validation-forms.service';

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.scss']
})

export class StudentComponent implements OnInit {
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
    studentsList: any;

    studensDataColumns = [
        { columnDef: 'sl', header: 'SI.', disableSort: 'true' },
        { columnDef: 'studentSection', header: 'Image', disableSort: 'true' },
        { columnDef: 'fullName', header: 'Full Name', disableSort: 'false' },
        { columnDef: 'studentRollId', header: 'Roll Id', disableSort: 'false' },
        { columnDef: 'studentClass', header: 'Class', disableSort: 'false' },
        { columnDef: 'username', header: 'UserName', disableSort: 'false' },
        { columnDef: 'admission_no', header: 'Adm No.', disableSort: 'false' },
        { columnDef: 'activated', header: 'Status', disableSort: 'true' },
        {
            columnDef: 'action',
            header: 'Action',
            actions: ['download', 'edit'],
            disableSort: 'true',
        },
        {
            tableCols: [
                'sl',
                'studentSection',
                'fullName',
                'studentRollId',
                'studentClass',
                'username',
                'admission_no',
                'activated',
                'action'
            ],
        },
    ];

    ngOnInit(): void {
        this.getAllStudents();
        this.modalDataService.$updateModal.subscribe((res) => {
            console.log(res);
            if (res) {
                this.toggleStudentsModal();
            }
        });
    }

    getAllStudents() {
        this.webServices
            .getMethod(this.constant.people.studentsList)
            .subscribe((res) => {
                this.studentsList = res?.data?.students ?? null;
                console.log(this.studentsList);
            });
    }

    /* modal */

    studentsForm!: FormGroup;
    submitted = false;
    formErrors: any;
    formControls!: string[];
    public visible = false;

    loading: boolean = true;
    activityValues: number[] = [0, 100];

    /* modal */

    toggleStudentsModal() {
        this.visible = !this.visible;
    }

    handleStudentsModalChange(event: any) {
        this.visible = event;
    }

    /* modal end */

    createForm() {
        this.studentsForm = this.formBuilder.group({
            salutation: [''],
            firstName: [''],
            middleName: [''],
            lastName: [''],
            gender: [''],
            birthDay: [''],
            maritalStatus: [''],
            anniversary: [''],
            caste: [''],
            religion: [''],
            panNo: [''],
            aadharNo: [''],
            hobby1st: [''],
            hobby2nd: [''],
            hobby3rd: [''], 
            hobby4th: [''],
            class: [''],
            section: [''],
            rollNo: [''],
            admissionNo: [''],
            userName: [''],
            email: [''],
            password: [''],
            photo: [''],
            rteProgram: [''],
            scholarship: [''],
            birthPlace: [''],
            motherTongue: [''],
            openingBalance: [''],
            sssmid: [''],
            fmid: [''],
            addmissionSessionYear: [''],
            dateOfAddmission: [''],
            houseName: [''],        
        });
        this.formControls = Object.keys(this.studentsForm.controls);
    }

    onReset() {
        this.submitted = false;
        this.studentsForm.reset();
    }

    onValidate() {
        this.submitted = true;

        // stop here if form is invalid
        return this.studentsForm.status === 'VALID';
    }

    onSubmit() {
        console.warn(this.onValidate(), this.studentsForm.value);
        if (this.onValidate()) {
            this.webServices
                .postMethod(
                    JSON.stringify(this.studentsForm.value),
                    this.constant.people.createStudents
                )
                .subscribe((res) => {
                    console.log(res);
                });
        }
    }
}