import { Component, OnInit } from '@angular/core';
import { Constant } from '../../../services/constant-URL/constant';
import { WebService } from '../../../services/WebServices/webservices.service';
import { ModalAndDataService } from '../../../services/modal-ServiceAndData-Service/modalData.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationFormsService } from '../../../services/FormValidationServices/validation-forms.service';

@Component({
    selector: 'app-visitors',
    templateUrl: './visitors.component.html',
    styleUrls: ['./visitors.component.scss']
})

export class VisitorsComponent implements OnInit{
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
    visitorsList: any;
    
    visitorsDataColumns = [
        { columnDef: 'id', header: 'SI.', disableSort: 'true' },
        { columnDef: 'parent_name', header: 'Name', disableSort: 'true' },
        { columnDef: 'mobile', header: 'Phone', disableSort: 'true' },
        { columnDef: 'email', header: 'Email', disableSort: 'true' },
        { columnDef: 'visiting_purpose', header: 'Visiting Purpose', disableSort: 'true' },
        { columnDef: 'postal_dispatch', header: 'Postal Dispatch', disableSort: 'true' },
        { columnDef: 'postal_receive', header: 'Postal Receive', disableSort: 'true' },
        { columnDef: 'date', header: 'Visiting Date', disableSort: 'true' },
        {
            columnDef: 'action',
            header: 'Action',
            actions: ['download', 'edit'],
            disableSort: 'true',
        },
        {
            tableCols: [
                'id',
                'parent_name',
                'mobile',
                'email',
                'visiting_purpose',
                'postal_dispatch',
                'postal_receive',
                'date'
            ],
        },
    ];
    
    ngOnInit(): void {
        this.getAllVisitors();
        this.modalDataService.$updateModal.subscribe((res) => {
            console.log(res);
            if (res) {
                this.toggleVisitorsModal();
            }
        });
    }
    
    getAllVisitors() {
        this.webServices
            .getMethod(`${this.constant.people.visitorsList}/1`)
            .subscribe((res) => {
                this.visitorsList = res?.data?.visitordetails ?? null;
                console.log(this.visitorsList);
            });
    }



    
visitorForm!: FormGroup;
submitted = false;
formErrors: any;
formControls!: string[];
public visible = false;

loading: boolean = true;
activityValues: number[] = [0, 100];

/* modal */

toggleVisitorsModal() {
    this.visible = !this.visible;
}

handleVisitorsModalChange(event: any) {
    this.visible = event;
}

/* modal end */

createForm() {
    this.visitorForm = this.formBuilder.group({
        parentName: [''],
        address: [''],
        mobile: [''],
        email: [''],
        purpose: [''],
        postalDispatch: [''],
        postalReceive: [''],
        date: [''],
        wardName: [''],
        examination: [''],
        class: [''],
        ptmAttend: [''],
        notifyStatus: [''],
        teachingRating: [""],
        disciplineRating: [''],
        facilitiesRating: [{
            tal: '',
            cag: '',
            classRoom: '',
            eca: '',
            transport: '',
            cwts: '',
            cl: '',
            soi: '',
            sos: ''
        }]

    });
    this.formControls = Object.keys(this.visitorForm.controls);
}

onReset() {
    this.submitted = false;
    this.visitorForm.reset();
}

onValidate() {
    this.submitted = true;

    // stop here if form is invalid
    return this.visitorForm.status === 'VALID';
}

onSubmit() {
    console.warn(this.onValidate(), this.visitorForm.value);
    if (this.onValidate()) {
        this.webServices
            .postMethod(
                JSON.stringify(this.visitorForm.value),
                this.constant.people.createVisitor
            )
            .subscribe((res) => {
                console.log(res);
            });
    }

}
}