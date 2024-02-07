import { Component, OnInit } from '@angular/core';
import { Constant } from '../../../services/constant-URL/constant';
import { WebService } from '../../../services/WebServices/webservices.service';
import { ModalAndDataService } from '../../../services/modal-ServiceAndData-Service/modalData.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationFormsService } from '../../../services/FormValidationServices/validation-forms.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {
  allSubscriptions: any;
  constructor(private constant: Constant, private webServices: WebService) {}
  subscriptionsDataColumns = [
    { columnDef: 'sl', header: 'Sl.' },
    { columnDef: 'start_date', header: 'Start Date' },
    { columnDef: 'end_date', header: 'End Date' },
    { columnDef: 'plan_title', header: 'Subscription' },
    { columnDef: 'subscription_type', header: 'Pay Plan' },
    { columnDef: 'amount', header: 'Subscription Fee' },
    { columnDef: 'discount_amount', header: 'Discounts' },
    { columnDef: 'paid_amount', header: 'Paid Amount' },
    { columnDef: 'due_amount', header: 'Due Amount' },
    { columnDef: 'due_date', header: 'Due Date' },
    { columnDef: 'status', header: 'Plan Status' },
    {
      tableCols: [
        'sl',
        'start_date',
        'end_date',
        'plan_title',
        'subscription_type',
        'amount',
        'discount_amount',
        'paid_amount',
        'due_amount',
        'due_date',
        'status',
      ],
    },
  ];
  ngOnInit(): void {
    this.getAllSubscriptions();
  }

  getAllSubscriptions() {
    this.webServices
      .getMethod(this.constant.subscribtions.listsubscription)
      .subscribe((res) => {
        console.log(res);
        this.allSubscriptions = res.data.subscriptionData;
      });
  }
}
