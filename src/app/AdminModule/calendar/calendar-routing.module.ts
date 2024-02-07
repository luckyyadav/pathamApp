import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'calendarComponent',
        loadChildren: () =>
          import('./calendar-component/calendar-component.module').then(
            (m) => m.CalendarComponentModule
          ),
        /*   data: {
            title: $localize`Hostels / HostelsComponent`,
          }, */
      },
      {
        path: 'diary',
        loadChildren: () =>
          import('./diary/diary.module').then((m) => m.DiaryModule),
        /*   data: {
            title: $localize`Hostels / HostelsComponent`,
          }, */
      },
      {
        path: 'notices',
        loadChildren: () =>
          import('./notices/notices.module').then((m) => m.NoticesModule),
        /*   data: {
            title: $localize`Hostels / HostelsComponent`,
          }, */
      },
      {
        path: 'events',
        loadChildren: () =>
          import('./events/events.module').then((m) => m.EventsModule),
        /*   data: {
            title: $localize`Hostels / HostelsComponent`,
          }, */
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CalendarRoutingModule {}
