import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'hostelsComponent',
        loadChildren: () =>
          import('./HostelsComponent/hostelsComponent.module').then(
            (m) => m.HostelsComponentModule
          ),
        data: {
          title: `Hostels / HostelsComponent`,
        },
      },
      {
        path: 'feecategories',
        loadChildren: () =>
          import('./Fee-Categories/fee-categories.module').then(
            (m) => m.FeeCategoriesModule
          ),
        data: {
          title: `Hostels / Fee-Categories`,
        },
      },

      {
        path: 'attendance',
        loadChildren: () =>
          import('./Attendance/attendance.module').then(
            (m) => m.AttendanceModule
          ),
        data: {
          title: `Hostels / Attendance`,
        },
      },

      {
        path: 'residents',
        loadChildren: () =>
          import('./Residents/residents.module').then((m) => m.ResidentsModule),
        data: {
          title: `Hostels / Residents`,
        },
      },

      {
        path: 'rooms',
        loadChildren: () =>
          import('./Rooms/rooms.module').then((m) => m.RoomsModule),
        data: {
          title: `Hostels / Rooms`,
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
export class HostelsRoutingModule {}
