import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LiveclassesComponent } from './liveclasses.component';

const routes: Routes = [
  {
    path: '',
    component: LiveclassesComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiveclassesRoutingModule { }
