import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {DiaryComponent} from './diary.component'

const routes: Routes = [{path:'',component: DiaryComponent}];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiaryRoutingModule {}
