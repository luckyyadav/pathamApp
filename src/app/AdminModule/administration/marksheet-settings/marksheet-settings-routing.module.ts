import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MarksheetSettingsComponent } from './marksheet-settings.component'

const routes: Routes = [
  { path: '', component: MarksheetSettingsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class MarksheetSettingsRoutingModule { }
