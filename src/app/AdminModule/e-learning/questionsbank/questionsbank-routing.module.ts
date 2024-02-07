import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsbankComponent } from './questionsbank.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionsbankComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsbankRoutingModule { }