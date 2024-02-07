import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InquiriesComponent } from './inquiries.component';

export const routes: Routes = [
  {
    path: '',
    component: InquiriesComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class InquiriesRoutingModule {}
