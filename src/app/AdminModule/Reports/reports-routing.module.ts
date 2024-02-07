import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'emailreports',
        loadChildren: () =>
          import('./email-reports/email-reports.module').then(
            (m) => m.EmailReportsModule
          ),
        /* data: {
          title: $localize`people / alumni`,
        }, */
      },
      {
        path: 'graphs',
        loadChildren: () =>
          import('./graphs/graphs.module').then((m) => m.GraphsModule),
        /*  data: {
          title: $localize`people / others`,
        }, */
      },
      {
        path: 'reportscomponent',
        loadChildren: () =>
          import('./reports-component/reports-component.module').then(
            (m) => m.ReportsComponentModule
          ),
        /* data: {
          title: $localize`people / parents`,
        }, */
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ReportsRoutingModule {}
