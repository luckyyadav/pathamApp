import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './transactions.component';
import { SharedCommonComponentModule } from '../../SharedCommonComponentModule/sharedComponent.module';


@NgModule({
  declarations: [TransactionsComponent],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    SharedCommonComponentModule,
  ],
})
export class TransactionsModule {}
