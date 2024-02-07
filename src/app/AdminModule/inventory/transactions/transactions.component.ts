import { Component } from '@angular/core';
import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})

export class TransactionsComponent {
  constructor(private webService: WebService, private urlConst: Constant) {}

  dataSource: any;
  dataColumns = [
    { columnDef: 'sl', header: 'Sl.' },

    { columnDef: 'id', header: 'Transaction ID' },
    { columnDef: 'product_name', header: 'Item' },
    { columnDef: 'quantity', header: 'Quantity' },
    { columnDef: 'transaction_type', header: 'Transaction Type' },
    { columnDef: 'from_location_id', header: 'From Location' },
    { columnDef: 'to_location_id', header: 'To Location' },
    { columnDef: 'transactions_date', header: 'Transaction Date' },

    {
      tableCols: [
        'sl',
        'id',
        'product_name',
        'quantity',
        'transaction_type',
        'from_location_id',
        'to_location_id',
        'transactions_date',
      ],
    },
  ];

  ngOnInit(): void {
    this.gettransactions();
  }

  gettransactions() {
    this.webService
      .getMethod(this.urlConst.Inventory.transactionListAll)
      .subscribe((res) => {
        this.dataSource = res.data.inv_transactions;
        console.log('Res Transactions', res);
      });
  }
}
