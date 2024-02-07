import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './Auth/page404/page404.component';
import { Page500Component } from './Auth/page500/page500.component';
import { RegisterComponent } from './Auth/register/register.component';

import { authGuard } from './AuthGurards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [authGuard],
    data: {
      title: 'Home',
      role: 'admin',
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./AdminModule/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },

      {
        path: 'charts',
        loadChildren: () =>
          import('./views/charts/charts.module').then((m) => m.ChartsModule),
      },

      {
        path: 'people',
        loadChildren: () =>
          import('./AdminModule/People/people.module').then(
            (m) => m.PeopleModule
          ),
      },

      {
        path: 'hostels',
        loadChildren: () =>
          import('./AdminModule/Hostels/hostels.module').then(
            (m) => m.HostelsModule
          ),
      },

      {
        path: 'ac-payables',
        loadChildren: () =>
          import('./AdminModule/ac-payables/ac-payables.module').then(
            (m) => m.AcPayablesModule
          ),
      },

      {
        path: 'ac-receivables',
        loadChildren: () =>
          import('./AdminModule/ac-receivables/ac-receivables.module').then(
            (m) => m.AcReceivablesModule
          ),
      },

      {
        path: 'administration',
        loadChildren: () =>
          import('./AdminModule/administration/administration.module').then(
            (m) => m.AdministrationModule
          ),
      },

      {
        path: 'admissions',
        loadChildren: () =>
          import('./AdminModule/admissions/admissions.module').then(
            (m) => m.AdmissionsModule
          ),
      },

      {
        path: 'attendance',
        loadChildren: () =>
          import('./AdminModule/attendance/attendance.module').then(
            (m) => m.AttendanceModule
          ),
      },
      {
        path: 'calendar',
        loadChildren: () =>
          import('./AdminModule/calendar/calendar.module').then(
            (m) => m.CalendarModule
          ),
      },
      {
        path: 'classes',
        loadChildren: () =>
          import('./AdminModule/classes/classes.module').then(
            (m) => m.ClassesModule
          ),
      },
      {
        path: 'messages',
        loadChildren: () =>
          import('./AdminModule/messages/messages.module').then(
            (m) => m.MessagesModule
          ),
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('./AdminModule/Reports/reports.module').then(
            (m) => m.ReportsModule
          ),
      },
      {
        path: 'library',
        loadChildren: () =>
          import('./AdminModule/library/library.module').then(
            (m) => m.LibraryModule
          ),
      },
      {
        path: 'inventory',
        loadChildren: () =>
          import('./AdminModule/inventory/inventory.module').then(
            (m) => m.InventoryModule
          ),
      },
      {
        path: 'transportation',
        loadChildren: () =>
          import('./AdminModule/transportation/transportation.module').then(
            (m) => m.TransportationModule
          ),
      },
      {
        path: 'batch-programs',
        loadChildren: () =>
          import('./AdminModule/batch-programs/batch-programs.module').then(
            (m) => m.BatchProgramsModule
          ),
      },
      {
        path: 'inventory',
        loadChildren: () =>
          import('./AdminModule/inventory/inventory.module').then(
            (m) => m.InventoryModule
          ),
      },
      {
        path: 'help-center',
        loadChildren: () =>
          import('./AdminModule/helpCenter/help-center.module').then(
            (m) => m.HelpCenterModule
          ),
      },
      {
        path: 'jobs',
        loadChildren: () =>
          import('./AdminModule/jobs/jobs.module').then((m) => m.JobsModule),
      },
      {
        path: 'newsletters',
        loadChildren: () =>
          import('./AdminModule/newsletters/newsletters.module').then(
            (m) => m.NewslettersModule
          ),
      },
      {
        path: 'photo-gallery',
        loadChildren: () =>
          import('./AdminModule/photo-gallery/photo-gallery.module').then(
            (m) => m.PhotoGalleryModule
          ),
      },
      {
        path: 'program',
        loadChildren: () =>
          import('./AdminModule/program/program.module').then(
            (m) => m.ProgramModule
          ),
      },
      {
        path: 'releases',
        loadChildren: () =>
          import('./AdminModule/releases/releases.module').then(
            (m) => m.ReleasesModule
          ),
      },
      {
        path: 'subscriptions',
        loadChildren: () =>
          import('./AdminModule/subscriptions/subscriptions.module').then(
            (m) => m.SubscriptionsModule
          ),
      },
      {
        path: 'e-learning',
        loadChildren: () =>
          import('./AdminModule/e-learning/e-learning.module').then(
            (m) => m.ELearningModule
          ),
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () => import('./Auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'auth/login' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking',
      // relativeLinkResolution: 'legacy'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
