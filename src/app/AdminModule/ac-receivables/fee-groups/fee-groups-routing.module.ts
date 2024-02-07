import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeeGroupsComponent } from './fee-groups.component'

const routes: Routes = [
  { path: '', component: FeeGroupsComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class FeeGroupsRoutingModule { }
