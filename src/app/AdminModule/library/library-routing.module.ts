import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'books',
        loadChildren: () =>
          import('./books/books.module').then((m) => m.BooksModule),
        data: {
          title: `Library / Books`,
        },
      },
      {
        path: 'issue',
        loadChildren: () =>
          import('./issue/issue.module').then((m) => m.IssueModule),
        data: {
          title: `Library / Issue`,
        },
      },
      {
        path: 'waitinglist',
        loadChildren: () =>
          import('./waiting-list/waiting-list.module').then(
            (m) => m.WaitingListModule
          ),
        data: {
          title: `Library / Waiting-List`,
        },
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
        data: {
          title: `Library / Settings`,
        },
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LibraryRoutingModule {}
