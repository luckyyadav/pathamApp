import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SyllabusComponent } from './syllabus.component';

const routes: Routes = [
  {
    path: '',
    component: SyllabusComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SyllabusRoutingModule { }
