import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {TeacherSubjectComponent} from './teacher-subject.component'

const routes:Routes = [
  {path:'',component: TeacherSubjectComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TeacherSubjectRoutingModule { }
