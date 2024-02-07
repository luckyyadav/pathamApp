import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { JobsComponent } from './jobs.component';


const routes: Routes = [{ path: '', component: JobsComponent }];


@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class JobsRoutingModule { }
