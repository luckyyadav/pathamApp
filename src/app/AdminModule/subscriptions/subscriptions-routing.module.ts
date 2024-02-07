import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'subscriptions',
        loadChildren: () =>
          import('./subscriptions/subscriptions.module').then(
            (m) => m.SubscriptionsModule
          ),
        /*   data: {
            title: $localize`Hostels / HostelsComponent`,
          }, */
      },
      {
        path: 'invoice',
        loadChildren: () =>
          import('./invoice/invoice.module').then((m) => m.InvoiceModule),
        /*   data: {
            title: $localize`Hostels / HostelsComponent`,
          }, */
      },
    ],
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SubscriptionsRoutingModule { }
