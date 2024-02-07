import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WaitingListComponent } from './waiting-list.component';

const routes: Routes = [
  {
    path: '',
    component: WaitingListComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaitingListRoutingModule { }
