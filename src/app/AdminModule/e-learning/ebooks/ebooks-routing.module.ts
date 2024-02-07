import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EbooksComponent } from './ebooks.component';

const routes: Routes = [
  {
    path: '',
    component: EbooksComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EbooksRoutingModule { }
