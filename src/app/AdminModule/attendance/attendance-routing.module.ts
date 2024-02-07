import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'leaves',
        loadChildren: () =>
          import('./leaves/leaves.module').then((m) => m.LeavesModule),
        data: {
          title: `attendance / leaves`,
        },
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
        data: {
          title: `attendance / settings`,
        },
      },

      {
        path: 'shifts',
        loadChildren: () =>
          import('./shifts/shifts.module').then((m) => m.ShiftsModule),
        data: {
          title: `attendance / shifts`,
        },
      },
      {
        path: 'staff',
        loadChildren: () =>
          import('./staff/staff.module').then((m) => m.StaffModule),
        data: {
          title: `attendance / staff`,
        },
      },
      {
        path: 'students',
        loadChildren: () =>
          import('./students/students.module').then((m) => m.StudentsModule),
        data: {
          title: `attendance / students`,
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
export class AttendanceRoutingModule {}
