import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'invoices',
        loadChildren: () =>
          import('./invoices/invoices.module').then(
            (m) => m.InvoicesModule
          ),
        data: {
          title: `ac-receivables / invoices`,
        },
      },
      {
        path: 'collections',
        loadChildren: () =>
          import('./collections/collections.module').then(
            (m) => m.CollectionsModule
          ),
        data: {
          title: `ac-receivables / collections`,
        },
      },

      {
        path: 'fee-groups',
        loadChildren: () =>
          import('./fee-groups/fee-groups.module').then(
            (m) => m.FeeGroupsModule
          ),
        data: {
          title: `ac-receivables / fee-groups`,
        },
      },
      {
        path: 'bank-accounts',
        loadChildren: () =>
          import('./bank-accounts/bank-accounts.module').then(
            (m) => m.BankAccountsModule
          ),
        data: {
          title: `ac-receivables / bank-accounts`,
        },
      },
      {
        path: 'transactions',
        loadChildren: () =>
          import('./transactions/transactions.module').then(
            (m) => m.TransactionsModule
          ),
        data: {
          title: `ac-receivables / transactions`,
        },
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then(
            (m) => m.SettingsModule
          ),
        data: {
          title: `ac-receivables / settings`,
        },
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcReceivablesRoutingModule { }
