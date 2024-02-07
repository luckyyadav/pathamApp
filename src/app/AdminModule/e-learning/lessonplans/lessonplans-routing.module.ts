import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LessonplansComponent } from './lessonplans.component';

const routes: Routes = [
  {
    path: '',
    component: LessonplansComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonplansRoutingModule { }
