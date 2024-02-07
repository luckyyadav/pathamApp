import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {BankAccountsComponent} from './bank-accounts.component'

const routes: Routes = [
  { path: '', component: BankAccountsComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class BankAccountsRoutingModule { }
