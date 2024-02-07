import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'access-settings',
        loadChildren: () =>
          import('./access-settings/access-settings.module').then(
            (m) => m.AccessSettingsModule
          ),
        data: {
          title: `administration / access-settings`,
        },
      },
      {
        path: 'certificates',
        loadChildren: () =>
          import('./certificates/certificates.module').then(
            (m) => m.CertificatesModule
          ),
        data: {
          title: `administration / certificates`,
        },
      },

      {
        path: 'documents',
        loadChildren: () =>
          import('./documents/documents.module').then(
            (m) => m.DocumentsModule
          ),
        data: {
          title: `administration / documents`,
        },
      },
      {
        path: 'marksheet-settings',
        loadChildren: () =>
          import('./marksheet-settings/marksheet-settings.module').then(
            (m) => m.MarksheetSettingsModule
          ),
        data: {
          title: `administration / marksheets-settings`,
        },
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./users/users.module').then(
            (m) => m.UsersModule
          ),
        data: {
          title: `administration / users`,
        },
      },
      {
        path: 'web-portal',
        loadChildren: () =>
          import('./web-portal/web-portal.module').then(
            (m) => m.WebPortalModule
          ),
        data: {
          title: `administration / web-portal`,
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
export class AdministrationRoutingModule { }
