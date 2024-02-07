import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'inquiries',
        loadChildren: () =>
          import('./inquiries/inquiries.module').then((m) => m.InquiriesModule),
      },
      {
        path: 'issues',
        loadChildren: () =>
          import('./issues/issues.module').then((m) => m.IssuesModule),
      },
      {
        path: 'issues-track',
        loadChildren: () =>
          import('./issues-track/issues-track.module').then(
            (m) => m.IssuesTrackModule
          ),
      },
      {
        path: 'support-calls',
        loadChildren: () =>
          import('./support-calls/support-calls.module').then(
            (m) => m.SupportCallsModule
          ),
      },
    ],
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HelpCenterRoutingModule {}
