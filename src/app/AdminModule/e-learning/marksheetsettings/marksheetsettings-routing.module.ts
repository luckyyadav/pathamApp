import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MarksheetsettingsComponent } from './marksheetsettings.component';

const routes: Routes = [
  {
    path: '',
    component: MarksheetsettingsComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarksheetsettingsRoutingModule { }
