import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'classesComponent',
        loadChildren: () =>
          import('./classes-component/classes-component.module').then(
            (m) => m.ClassesComponentModule
          ),
        /*   data: {
            title: $localize`Hostels / HostelsComponent`,
          }, */
      },
      {
        path: 'courses',
        loadChildren: () =>
          import('./courses/courses.module').then((m) => m.CoursesModule),
        /*   data: {
            title: $localize`Hostels / HostelsComponent`,
          }, */
      },
      {
        path: 'departments',
        loadChildren: () =>
          import('./departments/departments.module').then(
            (m) => m.DepartmentsModule
          ),
        /*   data: {
            title: $localize`Hostels / HostelsComponent`,
          }, */
      },
      {
        path: 'sections',
        loadChildren: () =>
          import('./sections/sections.module').then((m) => m.SectionsModule),
        /*   data: {
            title: $localize`Hostels / HostelsComponent`,
          }, */
      },
      {
        path: 'teachersubject',
        loadChildren: () =>
          import('./teacher-subject/teacher-subject.module').then(
            (m) => m.TeacherSubjectModule
          ),
        /*   data: {
            title: $localize`Hostels / HostelsComponent`,
          }, */
      },
      {
        path: 'subjects',
        loadChildren: () =>
          import('./subjects/subjects.module').then((m) => m.SubjectsModule),
        /*   data: {
            title: $localize`Hostels / HostelsComponent`,
          }, */
      },
      {
        path: 'timetable',
        loadChildren: () =>
          import('./timetable/timetable.module').then((m) => m.TimetableModule),
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
export class ClassesRoutingModule {}
