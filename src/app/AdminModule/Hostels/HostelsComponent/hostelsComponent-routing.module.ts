import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HostelsComponent} from './hostelsComponent.component'

const routes: Routes = [
  { path: '', component: HostelsComponent },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HostelsComponentRoutingModule { }
