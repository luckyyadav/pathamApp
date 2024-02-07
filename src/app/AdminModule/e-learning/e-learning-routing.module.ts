import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'admitcard',
        loadChildren: () =>
          import('./admitcard/admitcard.module').then((m) => m.AdmitcardModule),
      },
      {
        path: 'ebooks',
        loadChildren: () =>
          import('./ebooks/ebooks.module').then((m) => m.EbooksModule),
      },
      {
        path: 'homework',
        loadChildren: () =>
          import('./homework/homework.module').then((m) => m.HomeworkModule),
      },
      {
        path: 'lessonplans',
        loadChildren: () =>
          import('./lessonplans/lessonplans.module').then((m) => m.LessonplansModule),
      },
      {
        path: 'testpaper',
        loadChildren: () =>
          import('./testpaper/testpaper.module').then((m) => m.TestpaperModule),
      },
      {
        path: 'onlineexams',
        loadChildren: () =>
          import('./onlineexams/onlineexams.module').then((m) => m.OnlineexamsModule),
      },
      {
        path: 'questionsbank',
        loadChildren: () =>
          import('./questionsbank/questionsbank.module').then((m) => m.QuestionsbankModule),
      },
      {
        path: 'syllabus',
        loadChildren: () =>
          import('./syllabus/syllabus.module').then((m) => m.SyllabusModule),
      },
      {
        path: 'marksheetsettings',
        loadChildren: () =>
          import('./marksheetsettings/marksheetsettings.module').then((m) => m.MarksheetsettingsModule),
      },
      {
        path: 'marksheet',
        loadChildren: () =>
          import('./marksheet/marksheet.module').then((m) => m.MarksheetModule),
      },
      {
        path: 'liveclasses',
        loadChildren: () =>
          import('./liveclasses/liveclasses.module').then((m) => m.LiveclassesModule),
      },
    ],
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})

export class ELearningRoutingModule { }
