import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',

    children: [
      {
        path: 'alumni',
        loadChildren: () =>
          import('./alumni/alumni.module').then((m) => m.AlumniModule),
        data: {
          title:`people / alumni`,
        },
      },
      {
        path: 'others',
        loadChildren: () =>
          import('./others/others.module').then((m) => m.OthersModule),
        data: {
          title:`people / others`,
        },
      },
      {
        path: 'parents',
        loadChildren: () =>
          import('./parents/parents.module').then((m) => m.ParentsModule),
        data: {
          title:`people / parents`,
        },
      },
      {
        path: 'student',
        loadChildren: () =>
          import('./student/student.module').then((m) => m.StudentModule),
        data: {
          title:`people / student`,
        },
      },
      {
        path: 'teacher',
        loadChildren: () =>
          import('./teacher/teacher.module').then((m) => m.TeacherModule),
        data: {
          title:`people / teacher`,
        },
      },
      {
        path: 'visitors',
        loadChildren: () =>
          import('./visitors/visitors.module').then((m) => m.VisitorsModule),
        data: {
          title:`people / visitors`,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeopleRoutingModule {}
