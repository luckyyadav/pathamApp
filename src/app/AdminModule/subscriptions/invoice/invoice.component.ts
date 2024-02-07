import { Component, OnInit } from '@angular/core';
import { Constant } from '../../../services/constant-URL/constant';
import { WebService } from '../../../services/WebServices/webservices.service';
import { ModalAndDataService } from '../../../services/modal-ServiceAndData-Service/modalData.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationFormsService } from '../../../services/FormValidationServices/validation-forms.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  allInvoice: any;
  constructor(private constant: Constant, private webServices: WebService) {}
  invoiceDataColumns = [
    { columnDef: 'sl', header: 'Sl.' },
    { columnDef: 'plan_title', header: 'Plan' },
    { columnDef: 'subscription_type', header: 'Subscription Type' },
    { columnDef: 'payable_amount', header: 'Amount' },
    { columnDef: 'paid_amount', header: 'Paid Amount' },
    { columnDef: 'balance_amount', header: 'Due Amount' },
    { columnDef: 'start_date', header: 'Start Date' },
    { columnDef: 'end_date', header: 'End Date' },
    { columnDef: 'discount_amount', header: 'Discounts' },
    { columnDef: 'status', header: 'Status' },
    {
      columnDef: 'action',
      header: 'Action',
      actions: ['download', 'edit'],
      disableSort: 'true',
    },
    {
      tableCols: [
        'sl',
        'plan_title',
        'subscription_type',
        'payable_amount',
        'paid_amount',
        'balance_amount',
        'start_date',
        'end_date',
        'discount_amount',
        'status',
        'action',
      ],
    },
  ];
  ngOnInit(): void {
    this.getAllInvoice();
  }

  getAllInvoice() {
    this.webServices
      .getMethod(this.constant.subscribtions.listinvoice)
      .subscribe((res) => {
        console.log(res);
        this.allInvoice = res.invoices;
      });
  }
}
