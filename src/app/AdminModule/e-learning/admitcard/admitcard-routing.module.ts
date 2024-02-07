import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdmitcardComponent } from './admitcard.component';

const routes: Routes = [
  {
    path: '',
    component: AdmitcardComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdmitcardRoutingModule { }