import { Component, OnInit } from '@angular/core';
import { Constant } from '../../../services/constant-URL/constant';
import { WebService } from '../../../services/WebServices/webservices.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
})
export class ExpensesComponent implements OnInit {
  constructor(private constant: Constant, private webServices: WebService) {}

  AllExpenses: any;

  dataColumns = [
    {
      columnDef: 'expenseId',
      header: 'Expense ID',
    },
    { columnDef: 'expenseVoucherNo', header: 'Voucher No' },
    {
      columnDef: 'expenseTitle',
      header: 'Expense Title',
      link: 'expenseTitle',
    },
    {
      columnDef: 'expenses_cat_val',
      header: 'Category',
    },
    { columnDef: 'expenses_sub_cat_display_val', header: 'Sub Category' },
    { columnDef: 'payment_status', header: 'Payment Status' },
    { columnDef: 'expense_date', header: 'Date' },
    { columnDef: 'expenseNotes', header: 'Notes' },
    { columnDef: 'status', header: 'Status' },
    { columnDef: 'expenseAmount', header: 'Expense Amount' },
    {
      columnDef: 'action',
      header: 'Action',
      actions: ['download', 'edit'],
      disableSort: 'true',
    },
    {
      tableCols: [
        'expenseId',
        'expenseVoucherNo',
        'expenseTitle',
        'expenses_cat_val',
        'expenses_sub_cat_display_val',
        'payment_status',
        'expense_date',
        'expenseNotes',
        'status',
        'expenseAmount',
        'action',
      ],
    },
  ];

  ngOnInit(): void {
    this.getAllExpenses();
  }

  getAllExpenses() {
    this.webServices
      .getMethod(this.constant.ACPayable.allExpense)
      .subscribe((res) => {
        this.AllExpenses = res.data.expenses;

        console.log(res.data.expenses);
      });
  }
}
