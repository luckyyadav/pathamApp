import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponentComponent } from './classes-component.component';

const routes: Routes = [
  {
    path: '',
    component: ClassesComponentComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassesComponentRoutingModule {}
